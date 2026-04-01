const TYPE_CHART = {
  Normal: { weak: ["Erroneous", "Steel"], strong: [] },
  Plant: { weak: ["Wind", "Fire", "Bug", "Poison", "Erroneous", "Steel"], strong: ["Water", "Rock", "Ground"] },
  Bug: { weak: ["Erroneous", "Organism", "Rock", "Steel", "Wind", "Fire"], strong: ["Plant", "Normal", "Fear"] }
};

const CARDS = {
  Man: {
    name: "Man", types: ["Normal"], stats: { HP: 10, PO: 1, Def: 0, MO: 0, MR: 0, Spd: 10 },
    skill: { name: "Punch", type: "Normal", power: 5, range: "basic" }
  },
  Brig: {
    name: "Brig", types: ["Bug"], stats: { HP: 15, PO: 5, Def: 0, MO: 1, MR: 0, Spd: 15 },
    skill: { name: "Miniture Bite", type: "Bug", power: 5, range: "basic" }
  },
  Cat: {
    name: "Cat", types: ["Normal"], stats: { HP: 17, PO: 10, Def: 5, MO: 1, MR: 0, Spd: 20 },
    skill: { name: "Scratch", type: "Normal", power: 5, range: "basic" }
  },
  Dandi: {
    name: "Dandi", types: ["Plant"], stats: { HP: 25, PO: 20, Def: 10, MO: 5, MR: 5, Spd: 2 },
    skill: { name: "Vine thorns", type: "Plant", power: 3, range: "pierce" }
  }
};

const STARTING_FORMATION = {
  player: ["Man", null, "Dandi", "Cat", "Brig", "Cat"],
  enemy: ["Man", null, "Man", "Cat", "Brig", "Cat"]
};

let state = {};

const playerGrid = document.getElementById("playerGrid");
const enemyGrid = document.getElementById("enemyGrid");
const logEl = document.getElementById("log");
const phaseText = document.getElementById("phaseText");
const roundText = document.getElementById("roundText");

function cloneUnit(cardName, team, slot) {
  if (!cardName) return null;
  const base = CARDS[cardName];
  return {
    id: `${team}-${slot}-${cardName}-${Math.random().toString(36).slice(2, 7)}`,
    name: base.name,
    types: [...base.types],
    stats: { ...base.stats },
    skill: { ...base.skill },
    hp: base.stats.HP,
    alive: true,
    team,
    slot
  };
}

function initBattle() {
  state = {
    round: 1,
    phase: "player",
    selectedUnitId: null,
    playerUsedAction: false,
    player: STARTING_FORMATION.player.map((c, i) => cloneUnit(c, "player", i)),
    enemy: STARTING_FORMATION.enemy.map((c, i) => cloneUnit(c, "enemy", i)),
    ended: false
  };
  logEl.innerHTML = "";
  addLog("Battle started.");
  render();
}

function getUnit(team, idx) { return state[team][idx]; }

function frontLineIndex(team, col) {
  const front = state[team][col];
  if (front && front.alive) return col;
  const back = state[team][col + 3];
  if (back && back.alive) return col + 3;
  return -1;
}

function computeTargets(attacker) {
  const enemyTeam = attacker.team === "player" ? "enemy" : "player";
  const col = attacker.slot % 3;
  const frontIdx = frontLineIndex(enemyTeam, col);
  const allFront = [0, 1, 2].map(c => frontLineIndex(enemyTeam, c)).filter(i => i >= 0);
  const targets = new Set();

  if (attacker.skill.range === "basic") {
    if (frontIdx >= 0) targets.add(frontIdx);
  } else if (attacker.skill.range === "pierce") {
    if (state[enemyTeam][col]?.alive) targets.add(col);
    if (state[enemyTeam][col + 3]?.alive) targets.add(col + 3);
  } else if (attacker.skill.range === "all") {
    state[enemyTeam].forEach((u, idx) => { if (u?.alive) targets.add(idx); });
  } else if (attacker.skill.range === "free-basic") {
    allFront.forEach(i => targets.add(i));
  }
  return [...targets];
}

function typeMultiplier(attackType, defenderTypes) {
  let mult = 1;
  const rule = TYPE_CHART[attackType];
  if (!rule) return mult;
  defenderTypes.forEach(t => {
    if (rule.strong.includes(t)) mult *= 1.5;
    if (rule.weak.includes(t)) mult *= 0.5;
  });
  return mult;
}


function previewDamage(attacker, defender) {
  const raw = attacker.skill.power + attacker.stats.PO - defender.stats.Def;
  const baseDamage = Math.max(1, raw);
  const multiplier = typeMultiplier(attacker.skill.type, defender.types);
  return Math.max(1, Math.floor(baseDamage * multiplier));
}

function chooseBestEnemyAction() {
  const enemyCandidates = state.enemy.filter(u => u?.alive && computeTargets(u).length > 0);
  let best = null;

  enemyCandidates.forEach(attacker => {
    const targets = computeTargets(attacker);
    targets.forEach(targetIdx => {
      const defender = state.player[targetIdx];
      if (!defender?.alive) return;
      const damage = previewDamage(attacker, defender);
      const lethal = damage >= defender.hp ? 1 : 0;
      const threat = defender.stats.PO * 2 + defender.stats.Spd;
      const attackerSpeedWeight = attacker.stats.Spd * 0.2;
      const score = lethal * 10000 + damage * 100 + threat + attackerSpeedWeight;

      if (!best || score > best.score) {
        best = { attacker, defender, score, damage, lethal: !!lethal };
      }
    });
  });

  return best;
}

function dealDamage(attacker, defender) {
  const raw = attacker.skill.power + attacker.stats.PO - defender.stats.Def;
  const baseDamage = Math.max(1, raw);
  const multiplier = typeMultiplier(attacker.skill.type, defender.types);
  const dmg = Math.max(1, Math.floor(baseDamage * multiplier));
  defender.hp = Math.max(0, defender.hp - dmg);
  if (defender.hp <= 0) defender.alive = false;
  addLog(`${attacker.team.toUpperCase()} ${attacker.name} uses ${attacker.skill.name} on ${defender.name} for ${dmg} damage (${multiplier.toFixed(2)}x).`);
  if (!defender.alive) addLog(`${defender.team.toUpperCase()} ${defender.name} is defeated.`);
}

function onPlayerSlotClick(idx) {
  if (state.phase !== "player" || state.ended) return;
  const unit = getUnit("player", idx);
  if (!unit?.alive) return;
  state.selectedUnitId = unit.id;
  render();
}

function onEnemySlotClick(idx) {
  if (state.phase !== "player" || state.ended) return;
  const attacker = state.player.find(u => u?.id === state.selectedUnitId && u.alive);
  if (!attacker || state.playerUsedAction) return;
  const valid = computeTargets(attacker);
  if (!valid.includes(idx)) return;
  const defender = state.enemy[idx];
  dealDamage(attacker, defender);
  state.playerUsedAction = true;
  state.selectedUnitId = null;
  checkBattleEnd();
  render();

  if (!state.ended) {
    setTimeout(() => enemyTurn(), 350);
  }
}

function enemyTurn() {
  if (state.ended) return;
  state.phase = "enemy";
  render();

  const bestAction = chooseBestEnemyAction();
  if (!bestAction) {
    addLog("Enemy has no actions.");
  } else {
    addLog(`Enemy AI chooses ${bestAction.attacker.name} -> ${bestAction.defender.name} (predicted ${bestAction.damage}${bestAction.lethal ? ", lethal" : ""}).`);
    dealDamage(bestAction.attacker, bestAction.defender);
  }

  checkBattleEnd();
  state.round += 1;
  state.phase = "player";
  state.playerUsedAction = false;
  render();
}

function checkBattleEnd() {
  const playerAlive = state.player.some(u => u?.alive);
  const enemyAlive = state.enemy.some(u => u?.alive);
  if (!playerAlive || !enemyAlive) {
    state.ended = true;
    state.phase = "ended";
    addLog(enemyAlive ? "Enemy wins." : "Player wins.");
  }
}

function cardHtml(unit, cls, teamName, rowTag) {
  if (!unit) return `<div class="slot ${cls}"><div class="rowtag">${rowTag}</div><small>Empty</small></div>`;
  const hpPct = Math.max(0, Math.round((unit.hp / unit.stats.HP) * 100));
  const face = teamName === "player" ? "↑ Facing Enemy" : "↓ Facing Player";
  return `<div class="slot ${cls} ${unit.alive ? "" : "dead"}">
      <div class="rowtag">${rowTag}</div>
      <div class="name">${unit.name}</div>
      <div class="face">${face}</div>
      <small>${unit.types.join("/")} | ${unit.skill.name}</small>
      <div class="hpbar"><div class="hpfill" style="width:${hpPct}%"></div></div>
      <small>HP ${unit.hp}/${unit.stats.HP} | PO ${unit.stats.PO} | DEF ${unit.stats.Def} | SPD ${unit.stats.Spd}</small>
    </div>`;
}

function renderGrid(teamName, rootEl, onClick) {
  rootEl.innerHTML = "";
  const order = teamName === "enemy" ? [3,4,5,0,1,2] : [0,1,2,3,4,5];
  order.forEach((idx, drawIdx) => {
    const u = state[teamName][idx];
    const wrapper = document.createElement("div");
    const baseCls = teamName === "player" ? "ally" : "enemy";
    const rowTag = drawIdx < 3 ? (teamName === "enemy" ? "Back Row" : "Front Row") : (teamName === "enemy" ? "Front Row" : "Back Row");
    wrapper.innerHTML = cardHtml(u, baseCls, teamName, rowTag);
    const slotDiv = wrapper.firstElementChild;

    if (teamName === "player" && state.phase === "player" && u?.alive && !state.playerUsedAction) {
      slotDiv.classList.add("selectable");
    }
    if (teamName === "enemy" && state.phase === "player" && state.selectedUnitId) {
      const attacker = state.player.find(p => p?.id === state.selectedUnitId);
      if (attacker && computeTargets(attacker).includes(idx)) slotDiv.classList.add("targetable");
    }
    slotDiv.addEventListener("click", () => onClick(idx));
    rootEl.appendChild(slotDiv);
  });
}

function render() {
  renderGrid("enemy", enemyGrid, onEnemySlotClick);
  renderGrid("player", playerGrid, onPlayerSlotClick);
  phaseText.textContent = state.ended ? "Battle Ended" : state.phase === "player" ? "Player Turn" : "Enemy Turn";
  roundText.textContent = `Round ${state.round}`;
  document.getElementById("endTurnBtn").disabled = state.phase !== "player" || state.ended || state.playerUsedAction;
}

function addLog(text) {
  const time = new Date().toLocaleTimeString();
  logEl.innerHTML += `<div>[${time}] ${text}</div>`;
  logEl.scrollTop = logEl.scrollHeight;
}

document.getElementById("endTurnBtn").addEventListener("click", () => {
  if (state.phase !== "player" || state.ended) return;
  addLog("Player skips action.");
  enemyTurn();
});

document.getElementById("restartBtn").addEventListener("click", initBattle);
document.getElementById("resetBtn").addEventListener("click", initBattle);
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("sidePanel").classList.toggle("open");
});

initBattle();
