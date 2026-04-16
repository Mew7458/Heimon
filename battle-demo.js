const TYPE_CHART = {
  Normal: { weak: ["Erroneous", "Steel"], strong: [], immune: [] },
  Plant: { weak: ["Wind", "Fire", "Bug", "Poison", "Erroneous", "Steel"], strong: ["Water", "Rock", "Ground"], immune: [] },
  Wind: { weak: ["Electric", "Steel", "Rock", "Erroneous"], strong: ["Plant", "Bug", "Fire"], immune: ["Ground"] },
  Fire: { weak: ["Water", "Rock", "Erroneous"], strong: ["Plant", "Bug", "Ice", "Steel"], immune: [] },
  Water: { weak: ["Plant", "Electric", "Erroneous"], strong: ["Rock", "Ground", "Fire"], immune: [] },
  Electric: { weak: ["Ground", "Rock", "Erroneous", "Organism"], strong: ["Water", "Wind", "Bug"], immune: [] },
  Steel: { weak: ["Fire", "Dragon", "Erroneous", "Organism"], strong: ["Poison"], immune: [] },
  Ground: { weak: ["Water", "Plant", "Erroneous", "Organism"], strong: ["Rock", "Steel", "Fire"], immune: ["Electric"] },
  Ice: { weak: ["Erroneous", "Organism", "Fire", "Water", "Rock"], strong: ["Dragon", "Plant", "Ground"], immune: [] },
  Rock: { weak: ["Erroneous", "Organism", "Plant", "Steel"], strong: ["Wind", "Ice", "Fire"], immune: [] },
  Bug: { weak: ["Erroneous", "Organism", "Rock", "Steel", "Wind", "Fire"], strong: ["Plant", "Normal", "Fear"], immune: [] },
  Poison: { weak: ["Erroneous", "Organism", "Bug"], strong: ["Plant", "Water"], immune: [] },
  Phantom: { weak: ["Erroneous", "Organism"], strong: ["Fear"], immune: ["Normal", "Fear"] },
  Dragon: { weak: ["Steel", "Erroneous"], strong: ["Plant", "Wind", "Fire", "Water"], immune: [] },
  Fear: { weak: ["Bug", "Phantom", "Dragon", "Erroneous"], strong: ["Normal", "Organism"], immune: [] },
  Organism: { weak: ["Water", "Fire", "Plant", "Wind"], strong: ["Erroneous"], immune: [] },
  Erroneous: { weak: ["Organism"], strong: ["Normal", "Plant", "Wind", "Fire", "Water", "Electric", "Steel", "Ground", "Ice", "Rock", "Bug", "Poison", "Phantom", "Dragon", "Fear"], immune: [] }
};

const CARDS = {
  Man: { name: "Man", types: ["Normal"], baseStats: { HP: 10, PO: 1, Def: 0, MO: 0, MR: 0, Spd: 10 }, ability: "None", skill: { name: "Punch", type: "Normal", power: 2, range: "basic", damageKind: "PO" } },
  Brig: { name: "Brig", types: ["Bug"], baseStats: { HP: 15, PO: 5, Def: 0, MO: 1, MR: 0, Spd: 15 }, ability: "Fear", skill: { name: "Mini Bite", type: "Bug", power: 5, range: "basic", damageKind: "PO" } },
  BuBa: { name: "BuBa", types: ["Bug"], baseStats: { HP: 35, PO: 7, Def: 20, MO: 2, MR: 5, Spd: 10 }, ability: "Harden", skill: { name: "Hardened Sting", type: "Bug", power: 6, range: "basic", damageKind: "PO" } },
  Gosple: { name: "Gosple", types: ["Bug"], baseStats: { HP: 45, PO: 25, Def: 20, MO: 5, MR: 10, Spd: 27 }, ability: "Engine", skill: { name: "Gospel Charge", type: "Bug", power: 9, range: "basic", damageKind: "PO" } },
  Cat: { name: "Cat", types: ["Normal"], baseStats: { HP: 17, PO: 10, Def: 5, MO: 1, MR: 0, Spd: 20 }, ability: "Engine", skill: { name: "Scratch", type: "Normal", power: 6, range: "basic", damageKind: "PO" } },
  Mao: { name: "Mao", types: ["Normal"], baseStats: { HP: 45, PO: 25, Def: 10, MO: 10, MR: 5, Spd: 25 }, ability: "Engine", skill: { name: "Wild Claw", type: "Normal", power: 8, range: "basic", damageKind: "PO" } },
  Dandi: { name: "Dandi", types: ["Plant"], baseStats: { HP: 25, PO: 20, Def: 10, MO: 5, MR: 5, Spd: 2 }, ability: "Absorb", skill: { name: "Vine Thorns", type: "Plant", power: 7, range: "pierce", damageKind: "MO" } },
  Madalion: { name: "Madalion", types: ["Plant", "Poison"], baseStats: { HP: 75, PO: 35, Def: 20, MO: 7, MR: 10, Spd: 3 }, ability: "Drain", skill: { name: "Poison Bloom", type: "Plant", power: 8, range: "pierce", damageKind: "MO" } },
  Kog: { name: "Kog", types: ["Water", "Ground"], baseStats: { HP: 100, PO: 5, Def: 15, MO: 10, MR: 10, Spd: 5 }, ability: "Rest", skill: { name: "Mud Splash", type: "Water", power: 7, range: "basic", damageKind: "MO" } },
  Shizi: { name: "Shizi", types: ["Rock", "Plant"], baseStats: { HP: 35, PO: 5, Def: 15, MO: 0, MR: 5, Spd: 5 }, ability: "Thorns", skill: { name: "Stone Jab", type: "Rock", power: 5, range: "basic", damageKind: "PO" } },
  Shiking: { name: "Shiking", types: ["Rock", "Plant"], baseStats: { HP: 65, PO: 15, Def: 35, MO: 5, MR: 15, Spd: 7 }, ability: "Thorns", skill: { name: "Crown Smash", type: "Rock", power: 9, range: "basic", damageKind: "PO" } },
  Galladon: { name: "Galladon", types: ["Dragon"], baseStats: { HP: 25, PO: 15, Def: 5, MO: 10, MR: 5, Spd: 15 }, ability: "Bloodthirst", skill: { name: "Drake Strike", type: "Dragon", power: 8, range: "basic", damageKind: "PO" } },
  Threlladon: { name: "Threlladon", types: ["Dragon", "Organism"], baseStats: { HP: 75, PO: 35, Def: 20, MO: 25, MR: 15, Spd: 24 }, ability: "Bloodthirst+", skill: { name: "Threl Rend", type: "Dragon", power: 10, range: "basic", damageKind: "PO" } },
  Knight: { name: "Knight", types: ["Normal", "Steel"], baseStats: { HP: 50, PO: 20, Def: 15, MO: 1, MR: 0, Spd: 10 }, ability: "Knight's Soul", skill: { name: "Steel Slash", type: "Steel", power: 8, range: "basic", damageKind: "PO" } },
  Witling: { name: "Witling", types: ["Wind"], baseStats: { HP: 17, PO: 7, Def: 0, MO: 2, MR: 0, Spd: 10 }, ability: "Down the Wind", skill: { name: "Wind Seed", type: "Wind", power: 6, range: "basic", damageKind: "MO" } },
  Wit: { name: "Wit", types: ["Wind"], baseStats: { HP: 60, PO: 15, Def: 10, MO: 25, MR: 10, Spd: 20 }, ability: "Down the Wind", skill: { name: "Typhoon Mind", type: "Wind", power: 9, range: "basic", damageKind: "MO" } },
  Spiritue: { name: "Spiritue", types: ["Phantom"], baseStats: { HP: 20, PO: 0, Def: 0, MO: 15, MR: 5, Spd: 15 }, ability: "Indistinct", skill: { name: "Ghost Touch", type: "Phantom", power: 8, range: "basic", damageKind: "MO" } },
  Spiripile: { name: "Spiripile", types: ["Phantom"], baseStats: { HP: 65, PO: 0, Def: 0, MO: 37, MR: 15, Spd: 23 }, ability: "Indistinct", skill: { name: "Pile Wail", type: "Phantom", power: 11, range: "basic", damageKind: "MO" } },
  Fisherman: { name: "Fisherman", types: ["Normal", "Organism"], baseStats: { HP: 125, PO: 50, Def: 35, MO: 10, MR: 35, Spd: 20 }, ability: "Resilience", skill: { name: "Net Slam", type: "Normal", power: 10, range: "basic", damageKind: "PO" } },
  Progenlion: { name: "Progenlion", types: ["Plant", "Organism"], baseStats: { HP: 175, PO: 65, Def: 45, MO: 40, MR: 35, Spd: 20 }, ability: "Spread and Consume", skill: { name: "Path of Thorns", type: "Plant", power: 12, range: "free-basic", damageKind: "MO" } },
  Sharkuna: { name: "Sharkuna", types: ["Water"], baseStats: { HP: 45, PO: 20, Def: 10, MO: 15, MR: 10, Spd: 35 }, ability: "Bloodthirst", skill: { name: "Tide Bite", type: "Water", power: 9, range: "basic", damageKind: "PO" } },
  Snight: { name: "Snight", types: ["Water"], baseStats: { HP: 50, PO: 35, Def: 15, MO: 25, MR: 10, Spd: 40 }, ability: "Bloodthirst+", skill: { name: "Midnight Wave", type: "Water", power: 10, range: "basic", damageKind: "PO" } },
  Layseak: { name: "Layseak", types: ["Water", "Rock"], baseStats: { HP: 55, PO: 35, Def: 15, MO: 0, MR: 5, Spd: 5 }, ability: "Trap Jaws", skill: { name: "Crush Jaws", type: "Rock", power: 9, range: "basic", damageKind: "PO" } },
  Khip: { name: "Khip", types: ["Water", "Plant"], baseStats: { HP: 55, PO: 35, Def: 15, MO: 0, MR: 5, Spd: 5 }, ability: "Bloodthirst+ / Engine", skill: { name: "Slice Through", type: "Water", power: 20, range: "all", damageKind: "TD" } },
  Sheldor: { name: "Sheldor", types: ["Rock", "Ground"], baseStats: { HP: 35, PO: 15, Def: 25, MO: 5, MR: 15, Spd: 10 }, ability: "Adaption Recover", skill: { name: "Shell Bash", type: "Rock", power: 8, range: "basic", damageKind: "PO" } },
  Sheldon: { name: "Sheldon", types: ["Rock", "Ground", "Dragon"], baseStats: { HP: 85, PO: 30, Def: 45, MO: 5, MR: 20, Spd: 15 }, ability: "Adaption Recover", skill: { name: "Boulder of Care", type: "Rock", power: 0, range: "self", damageKind: "MO" } },
  Wishie: { name: "Wishie", types: ["Water"], baseStats: { HP: 25, PO: 15, Def: 5, MO: 1, MR: 2, Spd: 40 }, ability: "First Strike", skill: { name: "Flash Fin", type: "Water", power: 7, range: "basic", damageKind: "PO" } },
  Washie: { name: "Washie", types: ["Water"], baseStats: { HP: 55, PO: 27, Def: 15, MO: 10, MR: 12, Spd: 45 }, ability: "First Strike", skill: { name: "Rapid Tide", type: "Water", power: 9, range: "basic", damageKind: "PO" } },
  Waigenitor: { name: "Waigenitor", types: ["Water"], baseStats: { HP: 125, PO: 35, Def: 30, MO: 25, MR: 25, Spd: 47 }, ability: "First Strike / Engine / Our Tides", skill: { name: "Ocean Crown", type: "Water", power: 11, range: "all", damageKind: "PO" } },
  "The Thing": { name: "The Thing", types: ["Fear", "Organism"], baseStats: { HP: 1250, PO: 75, Def: 50, MO: 0, MR: 45, Spd: 15 }, ability: "Shell of certain Creation", skill: { name: "Serve....", type: "Fear", power: 50, range: "free-basic", damageKind: "TD" } },
  "A Certain Creation - The Eye": { name: "A Certain Creation - The Eye", types: ["Fear", "Erroneous"], baseStats: { HP: 500, PO: 30, Def: 15, MO: 75, MR: 35, Spd: 30 }, ability: "Creation of something Beyond", skill: { name: "Nature of violence", type: "Fear", power: 10, range: "all", damageKind: "TD" } }
};

const EVOLUTION_RULES = {
  Man: [{ at: 15, to: "Knight" }],
  Brig: [{ at: 7, to: "BuBa" }],
  BuBa: [{ at: 17, to: "Gosple" }],
  Cat: [{ at: 12, to: "Mao" }],
  Dandi: [{ at: 25, to: "Madalion" }],
  Madalion: [{ at: 55, to: "Progenlion", requires: "Crown of the Progenitor" }],
  Shizi: [{ at: 15, to: "Shiking" }],
  Galladon: [{ at: 27, to: "Threlladon" }],
  Witling: [{ at: 23, to: "Wit" }],
  Spiritue: [{ at: 27, to: "Spiripile" }],
  Sharkuna: [{ at: 28, to: "Snight" }],
  Sheldor: [{ at: 30, to: "Sheldon" }],
  Wishie: [{ at: 27, to: "Washie" }],
  Washie: [{ at: 55, to: "Waigenitor", requires: "Crown of the Progenitor" }]
};

const STARTING_FORMATION = {
  player: ["Man", null, "Dandi", "Cat", "Brig", "Cat"],
  enemy: ["Man", null, "Man", "Cat", "Brig", "Cat"]
};

const SPECIAL_SKILLS = new Set(["Khip", "Sheldon", "Progenlion", "The Thing", "A Certain Creation - The Eye"]);
const BASIC_PO_POWER = 0;
const BASIC_MO_POWER = 0;

const MAX_LEVEL = 50;
const DEFAULT_BATTLE_LEVEL = 10;
let state = {};

const playerGrid = document.getElementById("playerGrid");
const enemyGrid = document.getElementById("enemyGrid");
const logEl = document.getElementById("log");
const phaseText = document.getElementById("phaseText");
const roundText = document.getElementById("roundText");
let passiveParticleLoop = null;
const SAVE_KEY = "tbc_demo_profile_v1";
const PACKS = {
  man_for_you: {
    name: "Man for You",
    price: 0,
    dailyFree: true,
    open(profile) {
      const rewards = [{ kind: "gold", amount: 10 }, { kind: "gold", amount: 10 }];
      rewards.push(Math.random() < 0.5 ? { kind: "gold", amount: 20 } : { kind: "card", name: "Man", amount: 1 });
      rewards.push({ kind: "card", name: "Man", amount: 1 });
      return rewards;
    }
  },
  planes_1: {
    name: "The Planes 1",
    price: 500,
    dailyFree: false,
    open(profile) {
      return [
        rollReward([{ card: "Man", p: 25 }, { card: "Brig", p: 25 }, { card: "Cat", p: 25 }, { card: "Shizi", p: 20 }, { card: "Kog", p: 5 }]),
        rollReward([{ card: "Man", p: 25 }, { card: "Brig", p: 25 }, { card: "Cat", p: 25 }, { card: "Shizi", p: 20 }, { card: "Kog", p: 5 }]),
        rollReward([{ card: "Man", p: 10 }, { card: "Brig", p: 15 }, { card: "Cat", p: 15 }, { card: "Shizi", p: 15 }, { card: "Kog", p: 15 }, { card: "Dandi", p: 15 }, { card: "Wit", p: 15 }]),
        rollReward([{ card: "Man", p: 5 }, { card: "Brig", p: 15 }, { card: "Cat", p: 15 }, { card: "Shizi", p: 15 }, { card: "Kog", p: 15 }, { card: "Dandi", p: 15 }, { card: "Wit", p: 15 }, { card: "Spiritue", p: 5 }]),
      ];
    }
  }
};
const PACK_ORDER = ["man_for_you", "planes_1"];
const MAPS = {
  "Cave1-1": {
    width: 15, height: 11, spawn: { x: 5, y: 6 },
    exits: [{ x: 15, y: 6, to: "Cave1-2", spawn: { x: 1, y: 6 } }],
    walls: [],
    enemies: [],
    npcs: []
  },
  "Cave1-2": {
    width: 15, height: 11, spawn: { x: 6, y: 1 },
    exits: [
      { x: 1, y: 6, to: "Cave1-1", spawn: { x: 15, y: 6 } },
      { x: 15, y: 6, to: "Cave1-3", spawn: { x: 1, y: 6 }, requiresGalladon: true }
    ],
    walls: [{ x1: 7, y1: 5, x2: 9, y2: 7 }],
    enemies: [],
    npcs: [{ id: "galladon", x: 12, y: 6 }, { id: "dew", x: 14, y: 2 }]
  },
  "Cave1-3": {
    width: 10, height: 28, spawn: { x: 6, y: 1 },
    exits: [
      { x: 1, y: 6, to: "Cave1-2", spawn: { x: 15, y: 6 } },
      { x: 10, y: 28, to: null, spawn: null }
    ],
    walls: [],
    enemies: [
      { id: "m1", type: "Man", x: 4, y: 13, facing: "down" },
      { id: "m2", type: "Man", x: 7, y: 17, facing: "down" },
      { id: "m3", type: "Man", x: 3, y: 20, facing: "down" },
      { id: "m4", type: "Man", x: 8, y: 24, facing: "down" }
    ],
    npcs: []
  }
};

let profile = loadProfile();
normalizeCardCounts();
let selectedPackId = "man_for_you";
let openingState = null;
let inEncounterBattle = false;
let gameEntered = false;
let dialogueQueue = [];
let activeEncounter = null;
let worldLocked = false;
let dialogueResolve = null;
let enemyMoveTicker = null;
let isAnimatingMove = false;
let actorFrame = null;
let worldViewportInfo = null;
const actorMotion = { player: null, enemies: {} };
const enemySeenMarks = {};
const enemyMoveRuntime = {};

function scaleStat(baseValue, level, kind) {
  if (baseValue === 0) return 0;
  const n = level - 1;
  if (kind === "HP") return Math.round(baseValue * (1 + 0.09 * n)) + 2 * Math.floor(n / 5);
  if (kind === "PO" || kind === "MO") return Math.round(baseValue * (1 + 0.055 * n)) + Math.floor(n / 8);
  if (kind === "Def" || kind === "MR") return Math.round(baseValue * (1 + 0.045 * n));
  if (kind === "Spd") return Math.round(baseValue * (1 + 0.02 * n));
  return baseValue;
}

function rollReward(weightedCards) {
  const roll = Math.random() * 100;
  let acc = 0;
  for (const entry of weightedCards) {
    acc += entry.p;
    if (roll <= acc) return { kind: "card", name: entry.card, amount: 1 };
  }
  const fallback = weightedCards[weightedCards.length - 1];
  return { kind: "card", name: fallback.card, amount: 1 };
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function defaultProfile() {
  return {
    wallet: 1000,
    cards: {},
    cardInstances: {},
    nextCardUid: 1,
    lastFreePackDate: null,
    map: { id: "Cave1-1", x: 5, y: 6 },
    facing: "down",
    cardLevels: {},
    cardRanks: {},
    cardDamageTypes: {},
    teamSlots: [null, null, null, null, null, null],
    defeatedEnemies: {},
    enemyRespawnAt: {},
    clearedNpcs: {},
    introSeen: false,
    galladonJoined: false,
    lastSave: null,
    enemyState: {}
  };
}

function loadProfile() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return defaultProfile();
    const parsed = JSON.parse(raw);
    const loaded = {
      wallet: Number.isFinite(parsed.wallet) ? parsed.wallet : 1000,
      cards: parsed.cards || {},
      cardInstances: parsed.cardInstances || {},
      nextCardUid: Number.isFinite(parsed.nextCardUid) ? parsed.nextCardUid : 1,
      lastFreePackDate: parsed.lastFreePackDate || null,
      map: parsed.map || { id: "Cave1-1", x: 5, y: 6 },
      facing: parsed.facing || "down",
      cardLevels: parsed.cardLevels || {},
      cardRanks: parsed.cardRanks || {},
      cardDamageTypes: parsed.cardDamageTypes || {},
      teamSlots: Array.isArray(parsed.teamSlots) && parsed.teamSlots.length === 6 ? parsed.teamSlots : [null, null, null, null, null, null],
      defeatedEnemies: parsed.defeatedEnemies || {},
      enemyRespawnAt: parsed.enemyRespawnAt || {},
      clearedNpcs: parsed.clearedNpcs || {},
      introSeen: !!parsed.introSeen,
      galladonJoined: !!parsed.galladonJoined,
      lastSave: parsed.lastSave || null,
      enemyState: parsed.enemyState || {}
    };
    migrateCardInventory(loaded);
    return loaded;
  } catch {
    return defaultProfile();
  }
}

function migrateCardInventory(target) {
  if (!target.cardInstances || !Object.keys(target.cardInstances).length) {
    target.cardInstances = {};
    target.nextCardUid = Math.max(1, Number(target.nextCardUid) || 1);
    Object.entries(target.cards || {}).forEach(([cardName, qty]) => {
      for (let i = 0; i < qty; i += 1) addCardInstance(cardName, { profileRef: target });
    });
  }
  normalizeCardCounts(target);
  if (Array.isArray(target.teamSlots)) {
    const used = new Set();
    target.teamSlots = target.teamSlots.map(slot => {
      if (!slot) return null;
      if (String(slot).startsWith("c")) {
        used.add(slot);
        return slot;
      }
      const list = target.cardInstances[slot] || [];
      const pick = list.find(inst => !used.has(inst.id));
      if (!pick) return null;
      used.add(pick.id);
      return pick.id;
    });
  }
}

function normalizeCardCounts(target = profile) {
  const counts = {};
  Object.entries(target.cardInstances || {}).forEach(([cardName, arr]) => {
    counts[cardName] = (arr || []).length;
  });
  target.cards = counts;
}

function saveProfile() {
  localStorage.setItem(SAVE_KEY, JSON.stringify(profile));
}

function computeStats(baseStats, level) {
  return {
    HP: scaleStat(baseStats.HP, level, "HP"),
    PO: scaleStat(baseStats.PO, level, "PO"),
    Def: scaleStat(baseStats.Def, level, "Def"),
    MO: scaleStat(baseStats.MO, level, "MO"),
    MR: scaleStat(baseStats.MR, level, "MR"),
    Spd: scaleStat(baseStats.Spd, level, "Spd")
  };
}

function resolveEvolution(cardName, level) {
  let current = cardName;
  while (EVOLUTION_RULES[current]) {
    const next = EVOLUTION_RULES[current].find(rule => level >= rule.at);
    if (!next || !CARDS[next.to]) break;
    current = next.to;
  }
  return current;
}

function cloneUnit(cardName, team, slot, level, attackTypePreset = null) {
  if (!cardName) return null;
  const unitLevel = Math.min(MAX_LEVEL, Math.max(1, level));
  const resolvedName = resolveEvolution(cardName, unitLevel);
  const base = CARDS[resolvedName];
  const stats = computeStats(base.baseStats, unitLevel);
  const defaultType = base.types[0];
  return {
    id: `${team}-${slot}-${resolvedName}-${Math.random().toString(36).slice(2, 7)}`,
    name: base.name,
    types: [...base.types],
    baseStats: { ...base.baseStats },
    stats,
    skill: { ...base.skill },
    ability: base.ability || "None",
    hasSpecialSkill: SPECIAL_SKILLS.has(base.name),
    attackTypes: {
      PO: attackTypePreset?.PO || defaultType,
      MO: attackTypePreset?.MO || defaultType
    },
    hp: stats.HP,
    alive: true,
    tempBuffs: [],
    persistentPassiveFx: new Set(),
    passiveAuraColors: new Set(),
    team,
    slot,
    level: unitLevel
  };
}

function buildPlayerBattleTeam() {
  const validIds = new Set(allCardInstances().map(x => x.id));
  profile.teamSlots = (profile.teamSlots || [null, null, null, null, null, null]).map(id => (id && validIds.has(id) ? id : null));
  return (profile.teamSlots || [null, null, null, null, null, null]).map((instanceId, i) => {
    if (!instanceId) return null;
    const inst = findCardInstanceById(instanceId);
    if (!inst) return null;
    const typeCfg = profile.cardDamageTypes?.[instanceId];
    const unit = cloneUnit(inst.cardName, "player", i, inst.level || 1, {
      PO: typeCfg?.po,
      MO: typeCfg?.mo
    });
    const hpFromSave = Number(inst.currentHp);
    if (Number.isFinite(hpFromSave) && hpFromSave <= 0) return null;
    unit.hp = Math.max(1, Math.min(unit.stats.HP, Number.isFinite(hpFromSave) ? hpFromSave : unit.stats.HP));
    unit.instanceId = instanceId;
    return unit;
  });
}

function initBattle(mode = "demo", options = {}) {
  const formation = options.formation || STARTING_FORMATION;
  const level = options.level || DEFAULT_BATTLE_LEVEL;
  const enemyLevel = options.enemyLevel || level;
  state = {
    mode,
    round: 1,
    step: 1,
    phase: "player-select",
    selected: null,
    selectedAction: "PO",
    activeTeam: "player",
    manualBothSides: false,
    resources: {
      player: { sp: 0, skillPoints: 0 },
      enemy: { sp: 0, skillPoints: 0 }
    },
    player: mode === "encounter" ? buildPlayerBattleTeam() : formation.player.map((c, i) => cloneUnit(c, "player", i, level, null)),
    enemy: formation.enemy.map((c, i) => cloneUnit(c, "enemy", i, enemyLevel, null)),
    pending: { player: null, enemy: null },
    plannedActions: { player: [], enemy: [] },
    actedThisRound: { player: new Set(), enemy: new Set() },
    roundStepLimit: 3,
    ended: false
  };

  logEl.innerHTML = "";
  addLog(mode === "encounter" ? "遭遇战开始。" : "Battle started. Default demo mode (player vs AI).");
  applyBattleStartPassives();
  state.roundStepLimit = computeRoundStepLimit();
  render();
  ensurePassiveParticleLoop();
}

function getUnit(team, idx) { return state[team][idx]; }

function computeRoundStepLimit() {
  const playerAlive = state.player.filter(u => u?.alive).length;
  const enemyAlive = state.enemy.filter(u => u?.alive).length;
  return Math.max(1, Math.min(3, playerAlive, enemyAlive));
}

function frontLineIndex(team, col) {
  const front = state[team][col];
  if (front && front.alive) return col;
  const back = state[team][col + 3];
  if (back && back.alive) return col + 3;
  return -1;
}

function nearestColumnsWithFront(team, fromCol) {
  const available = [0, 1, 2].map(col => ({ col, idx: frontLineIndex(team, col) })).filter(item => item.idx >= 0);
  if (available.length === 0) return [];
  const minDist = Math.min(...available.map(item => Math.abs(item.col - fromCol)));
  return available.filter(item => Math.abs(item.col - fromCol) === minDist);
}

function computeTargetsForRange(attacker, range) {
  const enemyTeam = attacker.team === "player" ? "enemy" : "player";
  const col = attacker.slot % 3;
  const frontIdx = frontLineIndex(enemyTeam, col);
  const allFront = [0, 1, 2].map(c => frontLineIndex(enemyTeam, c)).filter(i => i >= 0);
  const targets = new Set();

  if (range === "self") {
    targets.add(attacker.slot);
  } else if (range === "basic") {
    if (frontIdx >= 0) targets.add(frontIdx);
    else nearestColumnsWithFront(enemyTeam, col).forEach(item => targets.add(item.idx));
  } else if (range === "pierce") {
    if (state[enemyTeam][col]?.alive || state[enemyTeam][col + 3]?.alive) {
      if (state[enemyTeam][col]?.alive) targets.add(col);
      if (state[enemyTeam][col + 3]?.alive) targets.add(col + 3);
    } else {
      nearestColumnsWithFront(enemyTeam, col).forEach(item => {
        if (state[enemyTeam][item.col]?.alive) targets.add(item.col);
        if (state[enemyTeam][item.col + 3]?.alive) targets.add(item.col + 3);
      });
    }
  } else if (range === "all") {
    state[enemyTeam].forEach((u, idx) => { if (u?.alive) targets.add(idx); });
  } else if (range === "free-basic") {
    allFront.forEach(i => targets.add(i));
  }

  return [...targets];
}

function typeMultiplier(attackType, defenderTypes) {
  let mult = 1;
  const rule = TYPE_CHART[attackType];
  if (!rule) return mult;
  defenderTypes.forEach(t => {
    if (rule.immune.includes(t)) mult = 0;
    else {
      if (rule.strong.includes(t)) mult *= 1.5;
      if (rule.weak.includes(t)) mult *= 0.5;
    }
  });
  return mult;
}

function actionToDamageModel(attacker, actionMode) {
  if (actionMode === "PO") {
    return { kind: "PO", power: BASIC_PO_POWER, attackType: attacker.attackTypes.PO, range: "basic" };
  }
  if (actionMode === "MO") {
    return { kind: "MO", power: BASIC_MO_POWER, attackType: attacker.attackTypes.MO, range: "basic" };
  }
  return {
    kind: attacker.skill.damageKind,
    power: attacker.skill.power,
    attackType: attacker.skill.type,
    range: attacker.skill.range,
    name: attacker.skill.name
  };
}

function canUseSkill(team, attacker) {
  return attacker.hasSpecialSkill && state.resources[team].skillPoints >= 1;
}

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

function getUnitCardElement(unitId) {
  return document.querySelector(`[data-unit-id="${unitId}"]`);
}

function syncUnitCardMetrics(unit) {
  if (!unit) return;
  const card = getUnitCardElement(unit.id);
  if (!card) return;
  const hpPct = Math.max(0, Math.round((unit.hp / Math.max(1, unit.stats.HP)) * 100));
  const hpFill = card.querySelector(".hpfill");
  if (hpFill) hpFill.style.width = `${hpPct}%`;
  const statLine = card.querySelector(".stat-line");
  if (statLine) {
    statLine.textContent = `HP ${unit.hp}/${unit.stats.HP} | PO ${unit.stats.PO} | MO ${unit.stats.MO} | DEF ${unit.stats.Def} | MR ${unit.stats.MR} | SPD ${unit.stats.Spd}`;
  }
  if (!unit.alive) card.classList.add("dead");
}

function spawnParticles(targetEl, colorClassOrHex, count = 4) {
  if (!targetEl) return;
  const isHexColor = typeof colorClassOrHex === "string" && colorClassOrHex.startsWith("#");
  for (let i = 0; i < count; i += 1) {
    const particle = document.createElement("span");
    particle.className = "passive-particle";
    if (isHexColor) particle.style.background = colorClassOrHex;
    else particle.classList.add(colorClassOrHex);
    particle.style.left = `${20 + Math.random() * 60}%`;
    targetEl.appendChild(particle);
    setTimeout(() => particle.remove(), 700);
  }
}

function applyPassiveFx(unit, cssClass, colorClass, persistent = false) {
  if (!unit) return;
  const el = getUnitCardElement(unit.id);
  if (persistent) {
    unit.persistentPassiveFx?.add(cssClass);
    if (colorClass?.startsWith?.("#")) unit.passiveAuraColors?.add(colorClass);
    if (colorClass === "red") unit.passiveAuraColors?.add("#ff5a5a");
    if (colorClass === "gray") unit.passiveAuraColors?.add("#d9d9d9");
    if (colorClass === "green") unit.passiveAuraColors?.add("#69f28f");
    syncUnitPassiveAura(unit, el);
  }
  if (!el) return;
  el.classList.add(cssClass);
  spawnParticles(el, colorClass);
  if (!persistent) setTimeout(() => el.classList.remove(cssClass), 650);
}

function removePassiveFx(unit, cssClass, colorClass) {
  if (!unit) return;
  if (cssClass) unit.persistentPassiveFx?.delete(cssClass);
  if (colorClass?.startsWith?.("#")) unit.passiveAuraColors?.delete(colorClass);
  if (colorClass === "red") unit.passiveAuraColors?.delete("#ff5a5a");
  if (colorClass === "gray") unit.passiveAuraColors?.delete("#d9d9d9");
  if (colorClass === "green") unit.passiveAuraColors?.delete("#69f28f");
  syncUnitPassiveAura(unit);
}

function clearPassiveFx(unit) {
  if (!unit?.persistentPassiveFx) return;
  unit.persistentPassiveFx.clear();
  unit.passiveAuraColors?.clear();
  syncUnitPassiveAura(unit);
}

function addTemporaryBuff(unit, stat, amount, source, fxClass = null, fxColor = null) {
  if (!unit?.alive || !amount) return;
  unit.stats[stat] = Math.max(0, unit.stats[stat] + amount);
  unit.tempBuffs.push({ stat, amount, source, expiresRound: state.round, fxClass, fxColor });
  if (fxClass || fxColor) applyPassiveFx(unit, fxClass, fxColor, true);
}

function expireRoundBuffs() {
  getAllUnits().forEach(unit => {
    if (!unit?.tempBuffs?.length) return;
    const remaining = [];
    unit.tempBuffs.forEach(buff => {
      if (buff.expiresRound <= state.round) {
        unit.stats[buff.stat] = Math.max(0, unit.stats[buff.stat] - buff.amount);
        if (buff.fxClass || buff.fxColor) removePassiveFx(unit, buff.fxClass, buff.fxColor);
        addLog(`Buff Ended: ${buff.source} on ${unit.name}.`);
      } else {
        remaining.push(buff);
      }
    });
    unit.tempBuffs = remaining;
  });
}

function canActThisRound(team, unit) {
  const aliveCount = state[team].filter(u => u?.alive).length;
  if (aliveCount <= 1) return true;
  return !state.actedThisRound[team].has(unit.id);
}

function registerRoundAction(team, unit) {
  const aliveCount = state[team].filter(u => u?.alive).length;
  if (aliveCount <= 1) return;
  state.actedThisRound[team].add(unit.id);
}

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const value = Number.parseInt(clean, 16);
  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255
  };
}

function resolvePassiveAura(unit) {
  const colors = [...(unit?.passiveAuraColors || [])];
  if (!colors.length) return { rgb: "255,255,255", alpha: "0", hex: "#ffffff" };
  const mixed = colors.reduce((acc, color) => {
    const rgb = hexToRgb(color);
    return { r: acc.r + rgb.r, g: acc.g + rgb.g, b: acc.b + rgb.b };
  }, { r: 0, g: 0, b: 0 });
  const count = colors.length;
  const avg = {
    r: Math.round(mixed.r / count),
    g: Math.round(mixed.g / count),
    b: Math.round(mixed.b / count)
  };
  const alpha = Math.min(0.42, 0.26 + (count - 1) * 0.06);
  const hex = `#${avg.r.toString(16).padStart(2, "0")}${avg.g.toString(16).padStart(2, "0")}${avg.b.toString(16).padStart(2, "0")}`;
  return { rgb: `${avg.r},${avg.g},${avg.b}`, alpha: `${alpha}`, hex };
}

function syncUnitPassiveAura(unit, targetEl = null) {
  if (!unit) return;
  const el = targetEl || getUnitCardElement(unit.id);
  if (!el) return;
  const aura = resolvePassiveAura(unit);
  el.style.setProperty("--passive-aura-rgb", aura.rgb);
  el.style.setProperty("--passive-aura-alpha", aura.alpha);
  el.style.setProperty("--passive-aura-color", aura.hex);
}

function getAllUnits() {
  return [...(state.player || []), ...(state.enemy || [])].filter(Boolean);
}

function tickPassiveParticles() {
  getAllUnits().forEach(unit => {
    if (!unit.alive) return;
    const aura = resolvePassiveAura(unit);
    if (Number.parseFloat(aura.alpha) <= 0) return;
    const el = getUnitCardElement(unit.id);
    if (!el) return;
    spawnParticles(el, aura.hex, 8);
  });
}

function ensurePassiveParticleLoop() {
  if (passiveParticleLoop) return;
  tickPassiveParticles();
  passiveParticleLoop = setInterval(tickPassiveParticles, 1200);
}


function healUnit(unit, amount, reason) {
  if (!unit?.alive) return;
  const heal = Math.max(1, Math.round(amount));
  const before = unit.hp;
  unit.hp = Math.min(unit.stats.HP, unit.hp + heal);
  const actual = unit.hp - before;
  if (actual <= 0) return;
  addLog(`Heal: ${unit.name} +${actual} HP (${reason}).`);
  syncUnitCardMetrics(unit);
  const el = getUnitCardElement(unit.id);
  if (el) {
    el.classList.add("passive-heal");
    spawnParticles(el, "green");
    setTimeout(() => el.classList.remove("passive-heal"), 650);
  }
}

function applyBattleStartPassives() {
  ["player", "enemy"].forEach(team => {
    const teamUnits = state[team].filter(u => u?.alive);
    teamUnits.forEach(unit => {
      if (unit.ability?.includes("Down the Wind")) {
        const others = teamUnits.filter(u => u.id !== unit.id && u.types.includes("Wind")).length;
        if (others > 0) {
          unit.stats.Spd = Math.max(1, Math.round(unit.stats.Spd * (1 + others * 0.05)));
          addLog(`Passive Triggered: Down the Wind on ${unit.name} (+${others * 5}% Spd).`);
        }
      }
    });
  });
}

async function playAttackAnimation(attacker, defender, action) {
  const attackerEl = getUnitCardElement(attacker.id);
  const defenderEl = getUnitCardElement(defender.id);
  if (!attackerEl || !defenderEl) return;

  if (action.kind === "PO") {
    attackerEl.classList.add(attacker.team === "player" ? "attack-dash-player" : "attack-dash-enemy");
    await sleep(180);
    attackerEl.classList.remove("attack-dash-player", "attack-dash-enemy");
    defenderEl.classList.add("target-hit");
    await sleep(180);
    defenderEl.classList.remove("target-hit");
  } else if (action.kind === "MO") {
    attackerEl.classList.add("attack-shake");
    await sleep(180);
    attackerEl.classList.remove("attack-shake");
    defenderEl.classList.add("target-hit", "target-magic");
    await sleep(220);
    defenderEl.classList.remove("target-hit", "target-magic");
  } else {
    defenderEl.classList.add("target-hit");
    await sleep(180);
    defenderEl.classList.remove("target-hit");
  }
}

function triggerPassives(attacker, defender, damage, defeatedTarget, action) {
  if (attacker.ability?.includes("Engine") && damage > 0) {
    attacker.stats.Spd = Math.max(1, Math.round(attacker.stats.Spd * 1.1));
    addLog(`Passive Triggered: Engine on ${attacker.name} (+10% Spd).`);
    applyPassiveFx(attacker, "passive-engine", "gray", true);
  }
  if (attacker.ability?.includes("Fear") && Math.random() < 0.25) {
    addTemporaryBuff(attacker, "Spd", 5, "Fear", "passive-fear", "#b388ff");
    addLog(`Passive Triggered: Fear on ${attacker.name} (+5 Spd until round end).`);
  }

  if (attacker.ability?.includes("Harden") && Math.random() < 0.25) {
    addTemporaryBuff(attacker, "Def", 5, "Harden", "passive-harden", "#7dd3fc");
    addLog(`Passive Triggered: Harden on ${attacker.name} (+5 Def until round end).`);
  }

  if (attacker.ability?.includes("Absorb") && damage > 0) healUnit(attacker, Math.max(1, damage * 0.1), "Absorb");
  if (attacker.ability?.includes("Drain") && damage > 0) healUnit(attacker, Math.max(1, damage * 0.2), "Drain");

  if (defeatedTarget && attacker.ability?.includes("Bloodthirst+")) {
    attacker.stats.PO = Math.max(1, Math.round(attacker.stats.PO * 1.2));
    addLog(`Passive Triggered: Bloodthirst+ on ${attacker.name} (+20% PO).`);
    applyPassiveFx(attacker, "passive-bloodthirst", "red", true);
  } else if (defeatedTarget && attacker.ability?.includes("Bloodthirst")) {
    attacker.stats.PO = Math.max(1, Math.round(attacker.stats.PO * 1.1));
    addLog(`Passive Triggered: Bloodthirst on ${attacker.name} (+10% PO).`);
    applyPassiveFx(attacker, "passive-bloodthirst", "red", true);
  }

  if (defeatedTarget && attacker.ability?.includes("Our Tides")) {
    const allies = state[attacker.team].filter(u => u?.alive);
    allies.forEach(u => { u.stats.Spd += 2; });
    addLog(`Passive Triggered: Our Tides on ${attacker.name} (+2 Spd to allies).`);
  }

  if (attacker.ability?.includes("Trap Jaws") && damage > 0 && defender.alive) {
    defender.stats.Spd = Math.max(1, defender.stats.Spd - 2);
    addLog(`Passive Triggered: Trap Jaws on ${defender.name} (-2 Spd).`);
  }

  if (defender.ability?.includes("Thorns") && damage > 0 && attacker.alive) {
    const reflect = Math.max(1, Math.round(damage * 0.05));
    attacker.hp = Math.max(0, attacker.hp - reflect);
    addLog(`Passive Triggered: Thorns reflects ${reflect} to ${attacker.name}.`);
    if (attacker.hp <= 0) {
      attacker.alive = false;
      clearPassiveFx(attacker);
    }
  }

  if (defender.ability?.includes("Resilience") && damage > 0) {
    defender.stats.PO = Math.max(1, Math.round(defender.stats.PO * 1.02));
    defender.stats.Def = Math.max(0, Math.round(defender.stats.Def * 1.05));
    defender.stats.MR = Math.max(0, Math.round(defender.stats.MR * 1.05));
    addLog(`Passive Triggered: Resilience on ${defender.name} (PO/Def/MR up).`);
  }

  if (defender.ability?.includes("Adaption Recover") && damage > 0) {
    if (damage < defender.stats.HP * 0.25) {
      defender.stats.Def = Math.max(0, Math.round(defender.stats.Def * 1.05));
      addLog(`Passive Triggered: Adaption Recover on ${defender.name} (+5% Def).`);
    }
  }

  if (attacker.ability?.includes("Spread and Consume") && defeatedTarget) {
    const allies = state[attacker.team].filter(u => u?.alive);
    allies.forEach(u => healUnit(u, Math.max(1, (u.stats.HP - u.hp) * 0.05), "Spread and Consume"));
    addLog("Passive Triggered: Spread and Consume team recovery.");
  }

  if (attacker.ability?.includes("Rest") && action.kind === "MO" && damage === 0) {
    healUnit(attacker, attacker.stats.HP * 0.05, "Rest");
  }
}


function computeFinalDamage(attacker, defender, action) {
  if (action.kind === "TD") return Math.max(1, Math.round(action.power));
  if (attacker.ability?.includes("Shell of certain Creation")) {
    const missingPct = 1 - (attacker.hp / Math.max(1, attacker.stats.HP));
    const poPenalty = Math.min(0.35, missingPct);
    const spdBonus = missingPct * 2;
    attacker.stats.Spd = Math.max(1, Math.round(attacker.baseStats.Spd * (1 + spdBonus)));
    attacker.stats.PO = Math.max(1, Math.round(attacker.baseStats.PO * (1 - poPenalty)));
  }

  const isMagical = action.kind === "MO";
  const offense = isMagical ? attacker.stats.MO : attacker.stats.PO;
  const raw = action.power + offense;
  let typed = raw * typeMultiplier(action.attackType, defender.types);

  if (attacker.ability?.includes("Knight's Soul") && defender.types.some(t => t !== "Normal")) typed *= 1.1;
  if (attacker.ability?.includes("First Strike")) {
    const delta = Math.max(0, attacker.stats.Spd - defender.stats.Spd);
    typed *= (1 + delta / 100);
  }
  if (defender.ability?.includes("Indistinct") && action.kind === "PO" && attacker.stats.HP < defender.stats.HP) {
    addLog(`Passive Triggered: Indistinct blocks PO on ${defender.name}.`);
    return 0;
  }
  if (defender.ability?.includes("Creation of something Beyond") && Math.random() < 0.2) {
    addLog(`Passive Triggered: Evasiveness on ${defender.name}, attack missed.`);
    return 0;
  }
  if (typed <= 0) return 0;
  const defenseStat = isMagical ? defender.stats.MR : defender.stats.Def;
  const reduced = typed * 30 / (30 + Math.max(0, defenseStat));
  return Math.max(1, Math.round(reduced));
}

function dealDamage(attacker, defender, action) {
  const dmg = computeFinalDamage(attacker, defender, action);
  defender.hp = Math.max(0, defender.hp - dmg);
  if (defender.hp <= 0) {
    defender.alive = false;
    clearPassiveFx(defender);
  }
  addLog(`${attacker.team.toUpperCase()} ${attacker.name} ${action.kind}(${action.attackType}) -> ${defender.name} for ${dmg}.`);
  if (!defender.alive) addLog(`${defender.team.toUpperCase()} ${defender.name} is defeated.`);
  triggerPassives(attacker, defender, dmg, !defender.alive, action);
  syncUnitCardMetrics(attacker);
  syncUnitCardMetrics(defender);
}


function chooseBestEnemyAction() {
  const enemyCandidates = state.enemy.filter(u => u?.alive && canActThisRound("enemy", u));
  let best = null;
  enemyCandidates.forEach(attacker => {
    const action = actionToDamageModel(attacker, "PO");
    computeTargetsForRange(attacker, action.range).forEach(targetIdx => {
      const defender = state.player[targetIdx];
      if (!defender?.alive) return;
      const damage = computeFinalDamage(attacker, defender, action);
      const lethal = damage >= defender.hp ? 1 : 0;
      const threat = defender.stats.PO * 2 + defender.stats.Spd;
      const score = lethal * 10000 + damage * 100 + threat;
      if (!best || score > best.score) {
        best = { team: "enemy", attackerId: attacker.id, targetIdx, actionMode: "PO", score };
      }
    });
  });
  return best;
}

function getUnitById(team, id) {
  return state[team].find(u => u?.id === id);
}

function grantRoundResources() {
  ["player", "enemy"].forEach(team => {
    const res = state.resources[team];
    res.sp += 10;
    while (res.sp >= 100) {
      res.sp -= 100;
      res.skillPoints += 1;
    }
  });
  addLog(`Round end: P1 SP ${state.resources.player.sp} / Skill ${state.resources.player.skillPoints}, P2 SP ${state.resources.enemy.sp} / Skill ${state.resources.enemy.skillPoints}`);
}

async function resolveRound() {
  state.phase = "resolving";
  render();

  const actions = [...state.plannedActions.player, ...state.plannedActions.enemy].filter(Boolean).map(action => {
    const attacker = getUnitById(action.team, action.attackerId);
    if (!attacker?.alive) return null;
    const model = actionToDamageModel(attacker, action.actionMode);
    const defenderTeam = action.team === "player" ? "enemy" : "player";
    const defender = state[defenderTeam][action.targetIdx];
    return { ...action, attacker, defender, model, speed: attacker.stats.Spd };
  }).filter(Boolean).filter(a => a.defender?.alive);

  actions.sort((a, b) => b.speed - a.speed || (Math.random() < 0.5 ? -1 : 1));
  for (const action of actions) {
    if (!action.attacker.alive || !action.defender.alive) continue;
    if (action.actionMode === "SKILL") {
      if (canUseSkill(action.team, action.attacker)) {
        state.resources[action.team].skillPoints -= 1;
        await playAttackAnimation(action.attacker, action.defender, action.model);
        dealDamage(action.attacker, action.defender, action.model);
        await sleep(500);
      }
    } else {
      await playAttackAnimation(action.attacker, action.defender, action.model);
      dealDamage(action.attacker, action.defender, action.model);
      await sleep(500);
    }
  }

  checkBattleEnd();
  if (!state.ended) {
    expireRoundBuffs();
    grantRoundResources();
    state.round += 1;
    state.step = 1;
    state.actedThisRound.player.clear();
    state.actedThisRound.enemy.clear();
    state.roundStepLimit = computeRoundStepLimit();
  }
  state.pending.player = null;
  state.pending.enemy = null;
  state.plannedActions.player = [];
  state.plannedActions.enemy = [];
  state.selected = null;
  state.selectedAction = "PO";
  state.activeTeam = "player";
  state.phase = state.ended ? "ended" : "player-select";
  render();
}

function lockCurrentStepAndContinue() {
  if (state.pending.player) {
    const playerUnit = getUnitById("player", state.pending.player.attackerId);
    if (playerUnit) registerRoundAction("player", playerUnit);
    state.plannedActions.player.push(state.pending.player);
  }
  if (state.pending.enemy) {
    const enemyUnit = getUnitById("enemy", state.pending.enemy.attackerId);
    if (enemyUnit) registerRoundAction("enemy", enemyUnit);
    state.plannedActions.enemy.push(state.pending.enemy);
  }
  state.pending.player = null;
  state.pending.enemy = null;
  state.selected = null;
  state.selectedAction = "PO";

  if (state.step >= state.roundStepLimit) {
    addLog(`${state.roundStepLimit}步行动已锁定，开始按速度统一结算。`);
    setTimeout(resolveRound, 250);
    return;
  }

  state.step += 1;
  addLog(`Step ${state.step}/${state.roundStepLimit} 开始选择行动。`);
  render();
}

function commitTeamAction(team, attacker, targetIdx, actionMode) {
  const pendingAction = { team, attackerId: attacker.id, targetIdx, actionMode };
  state.pending[team] = pendingAction;

  if (!state.manualBothSides) {
    state.pending.enemy = chooseBestEnemyAction();
    lockCurrentStepAndContinue();
    return;
  }

  state.activeTeam = team === "player" ? "enemy" : "player";
  state.selected = null;
  state.selectedAction = "PO";

  if (state.pending.player && state.pending.enemy) {
    addLog("双方行动已选定，按速度结算。");
    lockCurrentStepAndContinue();
  } else {
    addLog(`${team === "player" ? "Player 1" : "Player 2"} 已锁定行动，等待对方。`);
    render();
  }
}

function onSlotClick(team, idx) {
  if (state.phase !== "player-select" || state.ended) return;
  const unit = getUnit(team, idx);

  const selectingTeam = state.manualBothSides ? state.activeTeam : "player";
  if (!state.selected) {
    if (team !== selectingTeam || !unit?.alive) return;
    if (!canActThisRound(selectingTeam, unit)) {
      addLog(`${unit.name} already acted this round (max 1 action per round).`);
      return;
    }
    state.selected = { team, id: unit.id };
    render();
    return;
  }

  const attacker = getUnitById(state.selected.team, state.selected.id);
  if (!attacker?.alive) {
    state.selected = null;
    render();
    return;
  }

  if (team === selectingTeam) {
    if (!unit?.alive) return;
    if (!canActThisRound(selectingTeam, unit)) {
      addLog(`${unit.name} already acted this round (max 1 action per round).`);
      return;
    }
    state.selected = { team, id: unit.id };
    render();
    return;
  }

  if (!unit?.alive) return;
  const actionMode = state.selectedAction;
  if (actionMode === "SKILL" && !canUseSkill(selectingTeam, attacker)) {
    addLog(`${attacker.name} cannot use Skill now (need special skill + 1 skill point).`);
    return;
  }

  const actionModel = actionToDamageModel(attacker, actionMode);
  const valid = computeTargetsForRange(attacker, actionModel.range);
  if (!valid.includes(idx)) return;

  addLog(`${selectingTeam === "player" ? "Player 1" : "Player 2"} selects ${attacker.name} ${actionMode} -> ${unit.name}`);
  registerRoundAction(selectingTeam, attacker);
  commitTeamAction(selectingTeam, attacker, idx, actionMode);
}

function checkBattleEnd() {
  const playerAlive = state.player.some(u => u?.alive);
  const enemyAlive = state.enemy.some(u => u?.alive);
  if (!playerAlive || !enemyAlive) {
    state.ended = true;
    state.phase = "ended";
    addLog(enemyAlive ? "Player 2 wins." : "Player 1 wins.");
    if (state.mode === "encounter") finalizeEncounterBattle(!enemyAlive);
  }
}

function syncTeamHpFromBattle() {
  (state.player || []).forEach(unit => {
    if (!unit?.instanceId) return;
    const found = findCardInstanceById(unit.instanceId);
    if (!found) return;
    const list = profile.cardInstances[found.cardName] || [];
    const ref = list.find(x => x.id === unit.instanceId);
    if (!ref) return;
    ref.currentHp = Math.max(1, Math.min(unit.stats.HP, unit.hp));
  });
  normalizeCardCounts();
}

function finalizeEncounterBattle(playerWon) {
  syncTeamHpFromBattle();
  if (playerWon && activeEncounter) {
    const key = `${activeEncounter.mapId}:${activeEncounter.enemyId}`;
    profile.enemyRespawnAt[key] = Date.now() + 30_000;
    profile.wallet += 10;
    addLog("遭遇战胜利，获得 10G。敌人将在30秒后复活。");
  }
  saveProfile();
  renderWalletBadge();
  renderMap();
  setTimeout(() => {
    if (inEncounterBattle && state.mode === "encounter" && state.ended) returnToMapFromBattle();
  }, 450);
}

function cardHtml(unit, cls, teamName, rowTag, isSelected = false, actionMode = "PO") {
  if (!unit) return `<div class="slot ${cls}"><div class="rowtag">${rowTag}</div><small>Empty</small></div>`;
  const hpPct = Math.max(0, Math.round((unit.hp / unit.stats.HP) * 100));
  const face = teamName === "player" ? "↑ Facing 玩家2" : "↓ Facing 玩家1";
  const res = state.resources[teamName];
  const spPct = Math.max(0, Math.min(100, res.sp));
  const showSkill = unit.hasSpecialSkill;
  const actionMenu = isSelected
    ? `<div class="card-actions">
        <button class="card-action ${actionMode === "PO" ? "active" : ""}" data-action="PO">PO</button>
        <button class="card-action ${actionMode === "MO" ? "active" : ""}" data-action="MO">MO</button>
        ${showSkill ? `<button class="card-action ${actionMode === "SKILL" ? "active" : ""}" data-action="SKILL">Skill</button>` : ""}
      </div>`
    : "";
  const persistentFxClasses = [...(unit.persistentPassiveFx || [])].join(" ");
  const aura = resolvePassiveAura(unit);
  return `<div class="slot ${cls} ${persistentFxClasses} ${unit.alive ? "" : "dead"} ${isSelected ? "selected-card" : ""}" data-unit-id="${unit.id}" style="--passive-aura-rgb:${aura.rgb};--passive-aura-alpha:${aura.alpha};--passive-aura-color:${aura.hex};">
      <div class="sp-vertical"><div class="sp-fill" style="height:${spPct}%"></div></div>
      <div class="rowtag">${rowTag}</div>
      <div class="name">${unit.name} (Lv.${unit.level})</div>
      <div class="face">${face}</div>
      <small>${unit.ability} | PO:${unit.attackTypes.PO} MO:${unit.attackTypes.MO}</small>
      <div class="hpbar"><div class="hpfill" style="width:${hpPct}%"></div></div>
      <small class="stat-line">HP ${unit.hp}/${unit.stats.HP} | PO ${unit.stats.PO} | MO ${unit.stats.MO} | DEF ${unit.stats.Def} | MR ${unit.stats.MR} | SPD ${unit.stats.Spd}</small>
      <small>SP ${res.sp}/100 | Skill ${res.skillPoints}</small>
      ${actionMenu}
    </div>`;
}

function renderGrid(teamName, rootEl) {
  rootEl.innerHTML = "";
  const order = teamName === "enemy" ? [3, 4, 5, 0, 1, 2] : [0, 1, 2, 3, 4, 5];
  order.forEach((idx, drawIdx) => {
    const u = state[teamName][idx];
    const wrapper = document.createElement("div");
    const baseCls = teamName === "player" ? "ally" : "enemy";
    const rowTag = drawIdx < 3 ? (teamName === "enemy" ? "Back Row" : "Front Row") : (teamName === "enemy" ? "Front Row" : "Back Row");
    const isSelected = !!(state.selected && u && state.selected.id === u.id);
    wrapper.innerHTML = cardHtml(u, baseCls, teamName, rowTag, isSelected, state.selectedAction);
    const slotDiv = wrapper.firstElementChild;

    if (state.phase === "player-select" && u?.alive) {
      const selectingTeam = state.manualBothSides ? state.activeTeam : "player";
      if (!state.selected && teamName === selectingTeam) slotDiv.classList.add("selectable");
      const selectedAttacker = state.selected ? getUnitById(state.selected.team, state.selected.id) : null;
      if (selectedAttacker) {
        const model = actionToDamageModel(selectedAttacker, state.selectedAction);
        const validTargets = computeTargetsForRange(selectedAttacker, model.range);
        if (teamName !== selectingTeam && validTargets.includes(idx)) slotDiv.classList.add("targetable");
      }
    }

    slotDiv.querySelectorAll(".card-action").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (state.phase !== "player-select" || state.ended) return;
        state.selectedAction = btn.dataset.action;
        render();
      });
    });

    slotDiv.addEventListener("click", () => onSlotClick(teamName, idx));
    slotDiv.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      if (state.phase !== "player-select" || state.ended) return;
      state.selected = null;
      addLog("Selection cancelled.");
      render();
    });
    rootEl.appendChild(slotDiv);
  });
}

function render() {
  renderGrid("enemy", enemyGrid);
  renderGrid("player", playerGrid);
  ensurePassiveParticleLoop();

  const modeText = state.phase === "resolving" ? "Resolving by Speed" : "Choose Action";

  phaseText.textContent = state.phase === "ended" ? "Battle Ended" : modeText;
  roundText.textContent = `Round ${state.round} Step ${state.step}/${state.roundStepLimit} | P1 SP ${state.resources.player.sp}/${state.resources.player.skillPoints} | P2 SP ${state.resources.enemy.sp}/${state.resources.enemy.skillPoints}`;

  document.getElementById("endTurnBtn").disabled = state.phase !== "player-select" || state.ended || state.manualBothSides;
}

function addLog(text) {
  const time = new Date().toLocaleTimeString();
  logEl.innerHTML += `<div>[${time}] ${text}</div>`;
  logEl.scrollTop = logEl.scrollHeight;
}

function renderPackModal() {
  document.getElementById("walletValue").textContent = profile.wallet;
  const pack = PACKS[selectedPackId];
  document.getElementById("packNameLabel").textContent = pack.name;
  document.getElementById("packPriceLabel").textContent = pack.dailyFree ? "Daily Free Pack" : `${pack.price}G`;
  renderWalletBadge();
}

function selectPackByDelta(delta) {
  const idx = PACK_ORDER.indexOf(selectedPackId);
  const next = (idx + delta + PACK_ORDER.length) % PACK_ORDER.length;
  selectedPackId = PACK_ORDER[next];
  renderPackModal();
}

function renderWalletBadge() {
  const el = document.getElementById("walletBadgeValue");
  if (el) el.textContent = profile.wallet;
}

function isWall(map, x, y) {
  return map.walls.some(w => x >= w.x1 && x <= w.x2 && y >= w.y1 && y <= w.y2);
}

function enemyAtPosition(mapId, x, y) {
  const enemies = getActiveEnemies(mapId);
  return enemies.find(enemy => enemy.x === x && enemy.y === y);
}

function getActiveNpcs(mapId) {
  const map = MAPS[mapId];
  return (map.npcs || []).filter(npc => !profile.clearedNpcs?.[`${mapId}:${npc.id}`]);
}

function getActiveEnemies(mapId) {
  initEnemyState(mapId);
  const map = MAPS[mapId];
  const now = Date.now();
  return map.enemies
    .map(base => {
      const pos = profile.enemyState[mapId]?.[base.id];
      return { ...base, x: pos?.x ?? base.x, y: pos?.y ?? base.y, facing: pos?.facing || base.facing || "down" };
    })
    .filter(enemy => {
      const key = `${mapId}:${enemy.id}`;
      const respawnAt = Number(profile.enemyRespawnAt?.[key] || 0);
      if (!respawnAt) return true;
      if (now >= respawnAt) {
        delete profile.enemyRespawnAt[key];
        return true;
      }
      return false;
    });
}

function initEnemyState(mapId) {
  if (!profile.enemyState[mapId]) profile.enemyState[mapId] = {};
  MAPS[mapId].enemies.forEach(enemy => {
    if (!profile.enemyState[mapId][enemy.id]) {
      profile.enemyState[mapId][enemy.id] = { x: enemy.x, y: enemy.y, facing: enemy.facing || "down" };
      return;
    }
    if (!profile.enemyState[mapId][enemy.id].facing) {
      profile.enemyState[mapId][enemy.id].facing = enemy.facing || "down";
    }
  });
}

function enemySeenKey(mapId, enemyId) {
  return `${mapId}:${enemyId}`;
}

function pruneSeenMarks(now = Date.now()) {
  Object.keys(enemySeenMarks).forEach(key => {
    if ((enemySeenMarks[key] || 0) <= now) delete enemySeenMarks[key];
  });
}

function clearSeenMarks(mapId = null) {
  Object.keys(enemySeenMarks).forEach(key => {
    if (!mapId || key.startsWith(`${mapId}:`)) delete enemySeenMarks[key];
  });
}

function resetEnemyMoveRuntime() {
  Object.keys(enemyMoveRuntime).forEach(mapId => delete enemyMoveRuntime[mapId]);
}

function isPlayerSeen(now = Date.now()) {
  pruneSeenMarks(now);
  return Object.values(enemySeenMarks).some(ts => ts > now);
}

function getSeenRemainingMs(now = Date.now()) {
  pruneSeenMarks(now);
  const remain = Object.values(enemySeenMarks).reduce((max, ts) => Math.max(max, ts - now), 0);
  return Math.max(0, remain);
}

function hasLineOfSightToPlayer(enemy, mapId) {
  const map = MAPS[mapId];
  const off = facingOffset(enemy.facing);
  let x = enemy.x + off.x;
  let y = enemy.y + off.y;
  while (x >= 1 && x <= map.width && y >= 1 && y <= map.height) {
    if (isWall(map, x, y)) return false;
    if (getActiveNpcs(mapId).some(n => n.x === x && n.y === y)) return false;
    if (getActiveEnemies(mapId).some(e => e.id !== enemy.id && e.x === x && e.y === y)) return false;
    if (profile.map.x === x && profile.map.y === y) return true;
    x += off.x;
    y += off.y;
  }
  return false;
}

function refreshSeenMarks(mapId, now = Date.now()) {
  getActiveEnemies(mapId)
    .filter(enemy => (enemy.type || "").toLowerCase() === "man")
    .forEach(enemy => {
      if (hasLineOfSightToPlayer(enemy, mapId)) {
        enemySeenMarks[enemySeenKey(mapId, enemy.id)] = now + 5000;
      }
    });
  pruneSeenMarks(now);
}

function chooseStepTowardPlayer(enemy, mapId, occupied) {
  const dx = profile.map.x - enemy.x;
  const dy = profile.map.y - enemy.y;
  const candidates = [];
  if (Math.abs(dx) >= Math.abs(dy)) {
    candidates.push({ x: Math.sign(dx), y: 0 });
    if (dy !== 0) candidates.push({ x: 0, y: Math.sign(dy) });
  } else {
    candidates.push({ x: 0, y: Math.sign(dy) });
    if (dx !== 0) candidates.push({ x: Math.sign(dx), y: 0 });
  }
  candidates.push({ x: 0, y: 0 });
  for (const move of candidates) {
    const nx = enemy.x + move.x;
    const ny = enemy.y + move.y;
    const key = `${nx},${ny}`;
    if (isBlockedForEnemy(mapId, enemy, nx, ny, occupied)) continue;
    return move;
  }
  return { x: 0, y: 0 };
}

function isBlockedForEnemy(mapId, enemy, x, y, occupied) {
  const map = MAPS[mapId];
  if (x < 1 || x > map.width || y < 1 || y > map.height) return true;
  if (isWall(map, x, y)) return true;
  if (getActiveNpcs(mapId).some(n => n.x === x && n.y === y)) return true;
  const key = `${x},${y}`;
  if (occupied.has(key) && key !== `${enemy.x},${enemy.y}`) return true;
  return false;
}

function moveEnemiesRandom(mapId, now = Date.now()) {
  if (mapId !== "Cave1-3") return;
  if (!enemyMoveRuntime[mapId]) enemyMoveRuntime[mapId] = {};
  const occupied = new Set();
  const enemies = getActiveEnemies(mapId);
  enemies.forEach(enemy => occupied.add(`${enemy.x},${enemy.y}`));
  enemies.forEach(enemy => {
    const markKey = enemySeenKey(mapId, enemy.id);
    const isChasing = Number(enemySeenMarks[markKey] || 0) > now;
    const baseInterval = 900;
    const moveInterval = isChasing ? Math.round(baseInterval / 1.5) : baseInterval;
    const runtime = enemyMoveRuntime[mapId][enemy.id] || { nextMoveAt: now + Math.floor(Math.random() * 220) };
    enemyMoveRuntime[mapId][enemy.id] = runtime;
    if (now < runtime.nextMoveAt) return;

    const dirs = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: -1 }];
    const pick = isChasing
      ? chooseStepTowardPlayer(enemy, mapId, occupied)
      : dirs[Math.floor(Math.random() * dirs.length)];
    const nx = enemy.x + pick.x;
    const ny = enemy.y + pick.y;
    const key = `${nx},${ny}`;
    if (isBlockedForEnemy(mapId, enemy, nx, ny, occupied)) {
      runtime.nextMoveAt = now + moveInterval;
      return;
    }
    occupied.delete(`${enemy.x},${enemy.y}`);
    occupied.add(key);
    const nextFacing = pick.x > 0 ? "right" : pick.x < 0 ? "left" : pick.y > 0 ? "down" : pick.y < 0 ? "up" : enemy.facing;
    profile.enemyState[mapId][enemy.id] = { x: nx, y: ny, facing: nextFacing || "down" };
    runtime.nextMoveAt = now + moveInterval;
  });
}

function startEnemyMoveTicker() {
  if (enemyMoveTicker) clearInterval(enemyMoveTicker);
  enemyMoveTicker = setInterval(() => {
    if (!gameEntered || worldLocked || inEncounterBattle) return;
    const now = Date.now();
    refreshSeenMarks(profile.map.id, now);
    moveEnemiesRandom(profile.map.id, now);
    const contactEnemy = enemyAtPosition(profile.map.id, profile.map.x, profile.map.y);
    if (contactEnemy) {
      activeEncounter = { mapId: profile.map.id, enemyId: contactEnemy.id };
      startEncounterBattle(contactEnemy);
      return;
    }
    saveProfile();
    renderMap();
  }, 200);
}

function renderMap() {
  const minimap = document.getElementById("minimap");
  const info = document.getElementById("mapInfo");
  if (!minimap || !info) return;
  minimap.innerHTML = "";
  const map = MAPS[profile.map.id];
  const { viewW, viewH, startX, startY } = getMapViewport(map);
  for (let y = startY; y < startY + viewH; y += 1) {
    for (let x = startX; x < startX + viewW; x += 1) {
      const cell = document.createElement("div");
      cell.className = "mini-cell";
      if (x > map.width || y > map.height) {
        cell.classList.add("wall");
      } else {
        if (isWall(map, x, y)) cell.classList.add("wall");
        if (map.exits.some(exit => exit.x === x && exit.y === y)) cell.classList.add("exit");
        if (enemyAtPosition(profile.map.id, x, y)) cell.classList.add("enemy");
        if (profile.map.x === x && profile.map.y === y) {
          cell.classList.add("player", `facing-${profile.facing || "down"}`);
        }
      }
      minimap.appendChild(cell);
    }
  }
  const frontNpc = getFrontNpc(map);
  const interactionHint = frontNpc ? ` | 前方可互动: ${frontNpc.id} (按Z)` : "";
  const now = Date.now();
  const seenHint = isPlayerSeen(now) ? ` | Seen(${(getSeenRemainingMs(now) / 1000).toFixed(1)}s)` : "";
  info.textContent = `${profile.map.id} (${profile.map.x}, ${profile.map.y}) 朝向:${facingLabel(profile.facing)}${interactionHint}${seenHint}`;
  renderWorldMap();
  renderSaveSummary();
}

function renderWorldMap() {
  const worldMap = document.getElementById("worldMap");
  if (!worldMap) return;
  const map = MAPS[profile.map.id];
  const { viewW, viewH, startX, startY } = getMapViewport(map);
  worldViewportInfo = { viewW, viewH, startX, startY };
  worldMap.innerHTML = "";
  worldMap.style.gridTemplateColumns = `repeat(${viewW}, minmax(22px, 1fr))`;
  for (let y = startY; y < startY + viewH; y += 1) {
    for (let x = startX; x < startX + viewW; x += 1) {
      const cell = document.createElement("div");
      cell.className = "world-cell";
      if (x > map.width || y > map.height) {
        cell.classList.add("wall");
      } else {
        if (isWall(map, x, y)) cell.classList.add("wall");
        if (map.exits.some(exit => exit.x === x && exit.y === y)) cell.classList.add("exit");
        if (getActiveNpcs(profile.map.id).some(npc => npc.x === x && npc.y === y)) cell.classList.add("npc");
      }
      worldMap.appendChild(cell);
    }
  }
  syncActorTargets();
  ensureActorLoop();
}

function getMapViewport(map) {
  const viewW = 15;
  const viewH = 11;
  const startX = Math.max(1, Math.min(profile.map.x - Math.floor(viewW / 2), map.width - viewW + 1));
  const startY = Math.max(1, Math.min(profile.map.y - Math.floor(viewH / 2), map.height - viewH + 1));
  return { viewW, viewH, startX, startY };
}

function syncActorTargets() {
  const enemies = getActiveEnemies(profile.map.id);
  if (!actorMotion.player) actorMotion.player = { x: profile.map.x, y: profile.map.y, tx: profile.map.x, ty: profile.map.y };
  actorMotion.player.tx = profile.map.x;
  actorMotion.player.ty = profile.map.y;
  const keep = new Set();
  enemies.forEach(enemy => {
    keep.add(enemy.id);
    if (!actorMotion.enemies[enemy.id]) actorMotion.enemies[enemy.id] = { x: enemy.x, y: enemy.y, tx: enemy.x, ty: enemy.y };
    actorMotion.enemies[enemy.id].tx = enemy.x;
    actorMotion.enemies[enemy.id].ty = enemy.y;
  });
  Object.keys(actorMotion.enemies).forEach(id => {
    if (!keep.has(id)) delete actorMotion.enemies[id];
  });
}

function ensureActorLoop() {
  if (actorFrame) return;
  const step = () => {
    actorFrame = requestAnimationFrame(step);
    if (!worldViewportInfo || document.getElementById("worldSection")?.classList.contains("hidden")) return;
    const smooth = (obj) => {
      if (!obj) return;
      obj.x += (obj.tx - obj.x) * 0.28;
      obj.y += (obj.ty - obj.y) * 0.28;
    };
    smooth(actorMotion.player);
    Object.values(actorMotion.enemies).forEach(smooth);
    renderWorldActors();
  };
  actorFrame = requestAnimationFrame(step);
}

function renderWorldActors() {
  const layer = document.getElementById("worldActors");
  const worldMap = document.getElementById("worldMap");
  if (!layer || !worldMap || !worldViewportInfo) return;
  const mapStyle = getComputedStyle(worldMap);
  const gap = parseFloat(mapStyle.gap || mapStyle.rowGap || "2") || 2;
  const padL = parseFloat(mapStyle.paddingLeft || "8") || 8;
  const padT = parseFloat(mapStyle.paddingTop || "8") || 8;
  const cellW = (worldMap.clientWidth - padL * 2 - gap * (worldViewportInfo.viewW - 1)) / worldViewportInfo.viewW;
  const cellH = (worldMap.clientHeight - padT * 2 - gap * (worldViewportInfo.viewH - 1)) / worldViewportInfo.viewH;
  layer.innerHTML = "";
  const put = (cls, x, y) => {
    if (x < worldViewportInfo.startX || y < worldViewportInfo.startY) return;
    if (x > worldViewportInfo.startX + worldViewportInfo.viewW - 1 || y > worldViewportInfo.startY + worldViewportInfo.viewH - 1) return;
    const dot = document.createElement("div");
    dot.className = `world-actor ${cls}`;
    dot.style.left = `${padL + (x - worldViewportInfo.startX) * (cellW + gap) + cellW / 2}px`;
    dot.style.top = `${padT + (y - worldViewportInfo.startY) * (cellH + gap) + cellH / 2}px`;
    layer.appendChild(dot);
  };
  if (actorMotion.player) put(`player${isPlayerSeen() ? " seen" : ""}`, actorMotion.player.x, actorMotion.player.y);
  Object.values(actorMotion.enemies).forEach(enemy => put("enemy", enemy.x, enemy.y));
}

function updateFacingByDelta(dx, dy) {
  if (dx === 1) profile.facing = "right";
  if (dx === -1) profile.facing = "left";
  if (dy === 1) profile.facing = "down";
  if (dy === -1) profile.facing = "up";
}

function facingLabel(facing) {
  if (facing === "up") return "↑";
  if (facing === "down") return "↓";
  if (facing === "left") return "←";
  if (facing === "right") return "→";
  return "↓";
}

function facingOffset(facing) {
  if (facing === "up") return { x: 0, y: -1 };
  if (facing === "down") return { x: 0, y: 1 };
  if (facing === "left") return { x: -1, y: 0 };
  if (facing === "right") return { x: 1, y: 0 };
  return { x: 0, y: 1 };
}

function getFrontPosition() {
  const offset = facingOffset(profile.facing);
  return { x: profile.map.x + offset.x, y: profile.map.y + offset.y };
}

function getFrontNpc(map) {
  const front = getFrontPosition();
  return getActiveNpcs(profile.map.id).find(n => n.x === front.x && n.y === front.y) || null;
}

function tryMovePlayer(dx, dy) {
  if (isAnimatingMove || worldLocked || inEncounterBattle) return;
  isAnimatingMove = true;
  setTimeout(() => {
    isAnimatingMove = false;
  }, 120);
  const map = MAPS[profile.map.id];
  updateFacingByDelta(dx, dy);
  const nx = profile.map.x + dx;
  const ny = profile.map.y + dy;
  if (nx < 1 || nx > map.width || ny < 1 || ny > map.height) {
    renderMap();
    return;
  }
  if (isWall(map, nx, ny)) {
    renderMap();
    return;
  }
  if (getActiveNpcs(profile.map.id).some(n => n.x === nx && n.y === ny)) {
    renderMap();
    return;
  }
  profile.map.x = nx;
  profile.map.y = ny;
  const enemy = enemyAtPosition(profile.map.id, nx, ny);
  if (enemy) {
    activeEncounter = { mapId: profile.map.id, enemyId: enemy.id };
    startEncounterBattle(enemy);
  }
  const exit = map.exits.find(e => e.x === nx && e.y === ny);
  if (exit && exit.to) {
    if (exit.requiresGalladon && !profile.galladonJoined) {
      addLog("需要先与 Galladon 互动，才能离开该地图。");
      saveProfile();
      renderMap();
      return;
    }
    profile.map.id = exit.to;
    profile.map.x = exit.spawn.x;
    profile.map.y = exit.spawn.y;
    clearSeenMarks();
    addLog(`进入地图 ${exit.to}。`);
  }
  refreshSeenMarks(profile.map.id);
  saveProfile();
  renderWalletBadge();
  renderMap();
}

function interactWithNearbyNpc() {
  const map = MAPS[profile.map.id];
  const npc = getFrontNpc(map);
  if (npc) {
    const messages = [];
    if (npc.id === "galladon") {
      messages.push("你与 Galladon 对话。");
      if (!profile.galladonJoined) {
        profile.galladonJoined = true;
        const galladonId = addCardInstance("Galladon", { level: 1, currentHp: 1, rank: 0 });
        if (!profile.teamSlots.includes(galladonId)) {
          const empty = profile.teamSlots.findIndex(x => !x);
          if (empty >= 0) profile.teamSlots[empty] = galladonId;
        }
        messages.push("*Galladon Has Joined the Party");
      }
      profile.clearedNpcs[`${profile.map.id}:${npc.id}`] = true;
    }
    if (npc.id === "dew") {
      healTeamToFull();
      messages.push("露水恢复了你的队伍生命。");
      profile.clearedNpcs[`${profile.map.id}:${npc.id}`] = true;
    }
    if (messages.length) showDialogue(messages);
    saveProfile();
    renderMap();
    renderSaveSummary();
    return;
  }
  showDialogue(["你面前没有可互动单位（先调整朝向再按Z）。"]);
}

function healTeamToFull() {
  const teamIds = new Set((profile.teamSlots || []).filter(Boolean));
  allCardInstances().forEach(inst => {
    if (!teamIds.has(inst.id)) return;
    const list = profile.cardInstances[inst.cardName] || [];
    const ref = list.find(x => x.id === inst.id);
    if (!ref) return;
    const maxHp = cardStatsWithRank(inst.cardName, inst.level, inst.rank).stats.HP;
    ref.currentHp = maxHp;
  });
}

function startEncounterBattle(enemy) {
  if (!buildPlayerBattleTeam().some(Boolean)) {
    showDialogue(["你当前没有可战斗的队伍单位，请先在 Team 里编队。"]);
    return;
  }
  inEncounterBattle = true;
  clearSeenMarks();
  document.getElementById("worldSection")?.classList.add("hidden");
  document.getElementById("worldStatus")?.classList.add("hidden");
  document.getElementById("battleSim")?.classList.remove("hidden");
  document.querySelector(".controls")?.classList.remove("hidden");
  document.getElementById("battleLogSection")?.classList.remove("hidden");
  const encounterFormation = {
    player: [null, null, null, null, null, null],
    enemy: [null, null, null, null, "Man", null]
  };
  initBattle("encounter", { formation: encounterFormation, enemyLevel: 1 });
}

function returnToMapFromBattle() {
  if (state.mode === "encounter" && state.ended) activeEncounter = null;
  inEncounterBattle = false;
  document.getElementById("battleSim")?.classList.add("hidden");
  document.querySelector(".controls")?.classList.add("hidden");
  document.getElementById("worldSection")?.classList.remove("hidden");
  document.getElementById("worldStatus")?.classList.remove("hidden");
  renderMap();
}

function renderSaveSummary() {
  const el = document.getElementById("saveSummary");
  if (!el) return;
  el.textContent = `当前地图: ${profile.map.id} (${profile.map.x}, ${profile.map.y})
钱包: ${profile.wallet}G
已拥有卡牌总数: ${Object.values(profile.cards || {}).reduce((s, n) => s + n, 0)}
敌人复活倒计时中: ${Object.keys(profile.enemyRespawnAt || {}).length}
Galladon入队: ${profile.galladonJoined ? "是" : "否"}`;
}

function cardLevel(cardName) {
  const raw = Number(profile.cardLevels?.[cardName] || 1);
  return Math.max(1, Math.min(MAX_LEVEL, Math.floor(raw)));
}

function allCardInstances(target = profile) {
  const rows = [];
  Object.entries(target.cardInstances || {}).forEach(([cardName, list]) => {
    (list || []).forEach(inst => rows.push({ cardName, ...inst }));
  });
  return rows;
}

function findCardInstanceById(instanceId, target = profile) {
  for (const [cardName, list] of Object.entries(target.cardInstances || {})) {
    const hit = (list || []).find(x => x.id === instanceId);
    if (hit) return { cardName, ...hit };
  }
  return null;
}

function addCardInstance(cardName, options = {}) {
  const target = options.profileRef || profile;
  if (!target.cardInstances[cardName]) target.cardInstances[cardName] = [];
  const level = Math.max(1, Math.min(MAX_LEVEL, Number(options.level) || 1));
  const rank = Math.max(0, Math.min(7, Number(options.rank) || 0));
  const uid = `c${target.nextCardUid || 1}`;
  target.nextCardUid = (target.nextCardUid || 1) + 1;
  const maxHp = computeStats(CARDS[cardName].baseStats, level).HP + rank;
  const currentHp = Math.max(1, Math.min(maxHp, Number(options.currentHp) || maxHp));
  target.cardInstances[cardName].push({ id: uid, level, rank, currentHp });
  normalizeCardCounts(target);
  return uid;
}

function cardRank(cardName) {
  const raw = Number(profile.cardRanks?.[cardName] || 0);
  return Math.max(0, Math.min(7, Math.floor(raw)));
}

function cardStatsWithRank(cardName, level = 1, rank = 0) {
  const base = CARDS[cardName];
  if (!base) return null;
  const lvl = Math.max(1, Math.min(MAX_LEVEL, Number(level) || 1));
  const fixedRank = Math.max(0, Math.min(7, Number(rank) || 0));
  const grown = computeStats(base.baseStats, lvl);
  return {
    level: lvl,
    rank: fixedRank,
    stats: {
      HP: grown.HP + fixedRank,
      PO: grown.PO + fixedRank,
      Def: grown.Def + fixedRank,
      MO: grown.MO + fixedRank,
      MR: grown.MR + fixedRank,
      Spd: grown.Spd + fixedRank
    }
  };
}

function ensureCardDamageTypes(unitKey) {
  if (!profile.cardDamageTypes[unitKey]) {
    const found = findCardInstanceById(unitKey);
    const fallback = CARDS[found?.cardName || unitKey]?.types?.[0] || "Normal";
    profile.cardDamageTypes[unitKey] = { po: fallback, mo: fallback };
  }
}

function renderCardsModal() {
  const list = document.getElementById("cardsOwnedList");
  const details = document.getElementById("cardDetails");
  if (!list || !details) return;
  list.innerHTML = "";
  const entries = Object.entries(profile.cards || {}).filter(([, qty]) => qty > 0).sort((a, b) => a[0].localeCompare(b[0]));
  if (!entries.length) {
    details.textContent = "你还没有拥有任何卡牌。";
    return;
  }
  entries.forEach(([cardName, qty], idx) => {
    const btn = document.createElement("button");
    btn.className = "owned-card-btn";
    btn.textContent = `${cardName} ×${qty}`;
    btn.addEventListener("click", () => {
      const info = CARDS[cardName];
      const instances = (profile.cardInstances[cardName] || []).map(inst => {
        const grown = cardStatsWithRank(cardName, inst.level, inst.rank);
        return `- ${inst.id} | Lv.${grown.level} Rank ${grown.rank}/7 | HP ${inst.currentHp}/${grown.stats.HP}`;
      }).join("\n");
      details.textContent = `${cardName}\nType: ${info.types.join(" / ")}\nAbility: ${info.ability}\n持有数量: ${qty}\n\n个体列表：\n${instances}\n\n成长规则：Lv1基础值 + 固定公式重算，不使用随机成长。\nDef/MR为软上限减伤，TD无视减伤。`;
    });
    list.appendChild(btn);
    if (idx === 0) btn.click();
  });
}

function renderTeamModal() {
  const root = document.getElementById("teamEditor");
  if (!root) return;
  root.innerHTML = "";
  const labels = ["前排-左", "前排-中", "前排-右", "后排-左", "后排-中", "后排-右"];
  const instances = allCardInstances().sort((a, b) => a.cardName.localeCompare(b.cardName) || a.id.localeCompare(b.id));
  const picked = new Set((profile.teamSlots || []).filter(Boolean));
  labels.forEach((label, idx) => {
    const wrap = document.createElement("div");
    wrap.className = "team-slot";
    const slotCard = profile.teamSlots[idx] || "";
    wrap.innerHTML = `<b>${label}</b>`;
    const cardSel = document.createElement("select");
    const available = instances.filter(inst => !picked.has(inst.id) || inst.id === slotCard);
    cardSel.innerHTML = `<option value="">(空位)</option>${available.map(inst => `<option value="${inst.id}">${inst.cardName} [${inst.id}] Lv${inst.level}</option>`).join("")}`;
    cardSel.value = slotCard;
    const poSel = document.createElement("select");
    const moSel = document.createElement("select");
    const updateDamageTypeSelect = () => {
      const card = cardSel.value;
      poSel.innerHTML = "";
      moSel.innerHTML = "";
      if (!card) return;
      const found = findCardInstanceById(card);
      if (!found) return;
      ensureCardDamageTypes(card);
      const types = CARDS[found.cardName].types || ["Normal"];
      types.forEach(t => {
        poSel.innerHTML += `<option value="${t}">PO Type: ${t}</option>`;
        moSel.innerHTML += `<option value="${t}">MO Type: ${t}</option>`;
      });
      poSel.value = profile.cardDamageTypes[card].po;
      moSel.value = profile.cardDamageTypes[card].mo;
    };
    cardSel.addEventListener("change", () => {
      profile.teamSlots[idx] = cardSel.value || null;
      const dup = profile.teamSlots.findIndex((id, i) => id && id === profile.teamSlots[idx] && i !== idx);
      if (dup >= 0) profile.teamSlots[dup] = null;
      updateDamageTypeSelect();
      renderTeamModal();
      saveProfile();
    });
    poSel.addEventListener("change", () => {
      const card = cardSel.value;
      if (!card) return;
      ensureCardDamageTypes(card);
      profile.cardDamageTypes[card].po = poSel.value;
      saveProfile();
    });
    moSel.addEventListener("change", () => {
      const card = cardSel.value;
      if (!card) return;
      ensureCardDamageTypes(card);
      profile.cardDamageTypes[card].mo = moSel.value;
      saveProfile();
    });
    updateDamageTypeSelect();
    wrap.appendChild(cardSel);
    wrap.appendChild(poSel);
    wrap.appendChild(moSel);
    root.appendChild(wrap);
  });
}

function enterGame() {
  gameEntered = true;
  document.getElementById("saveModal").classList.add("hidden");
  document.getElementById("gameApp").classList.remove("hidden");
  document.getElementById("battleLogSection")?.classList.remove("hidden");
  renderWalletBadge();
  renderMap();
  renderSaveSummary();
  startEnemyMoveTicker();
}

function showDialogue(messages, onDone = null) {
  dialogueQueue = Array.isArray(messages) ? [...messages] : [String(messages)];
  if (!dialogueQueue.length) return;
  dialogueResolve = onDone;
  const overlay = document.getElementById("dialogueOverlay");
  const text = document.getElementById("dialogueText");
  text.textContent = dialogueQueue[0];
  overlay.classList.remove("hidden");
}

function advanceDialogue() {
  if (!dialogueQueue.length) return false;
  dialogueQueue.shift();
  const overlay = document.getElementById("dialogueOverlay");
  const text = document.getElementById("dialogueText");
  if (!dialogueQueue.length) {
    overlay.classList.add("hidden");
    text.textContent = "";
    if (dialogueResolve) {
      const done = dialogueResolve;
      dialogueResolve = null;
      done();
    }
    return true;
  }
  text.textContent = dialogueQueue[0];
  return true;
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function showDialogueSequence(messages) {
  return new Promise(resolve => showDialogue(messages, resolve));
}

async function playOpeningCutscene() {
  worldLocked = true;
  const fade = document.getElementById("fadeOverlay");
  fade.classList.remove("hidden");
  fade.style.opacity = "1";
  await wait(200);
  fade.style.opacity = "0.7";
  await wait(1200);
  await showDialogueSequence([
    "You: “……”",
    "You: ”……“",
    "You: ”..Wha..what..?“",
    "You: ”Where am I….“"
  ]);
  fade.style.opacity = "0";
  await wait(900);
  fade.classList.add("hidden");
  profile.introSeen = true;
  saveProfile();
  worldLocked = false;
}

function setSaveModalMode(mode) {
  const closeBtn = document.getElementById("saveCloseBtn");
  const saveActions = document.getElementById("saveActions");
  const entryActions = document.getElementById("saveEntryActions");
  const entryTips = document.getElementById("saveEntryTips");
  if (mode === "entry") {
    closeBtn.classList.add("hidden");
    saveActions.classList.add("hidden");
    entryActions.classList.remove("hidden");
    entryTips.classList.remove("hidden");
  } else {
    closeBtn.classList.remove("hidden");
    saveActions.classList.remove("hidden");
    entryActions.classList.add("hidden");
    entryTips.classList.add("hidden");
  }
}

function applyLastSaveToProfile() {
  if (!profile.lastSave) return false;
  profile.map = { ...profile.lastSave.map };
  profile.facing = profile.lastSave.facing || profile.facing || "down";
  profile.cardLevels = { ...(profile.lastSave.cardLevels || profile.cardLevels || {}) };
  profile.cardRanks = { ...(profile.lastSave.cardRanks || profile.cardRanks || {}) };
  profile.cardDamageTypes = { ...(profile.lastSave.cardDamageTypes || profile.cardDamageTypes || {}) };
  profile.teamSlots = Array.isArray(profile.lastSave.teamSlots) && profile.lastSave.teamSlots.length === 6
    ? [...profile.lastSave.teamSlots]
    : [...(profile.teamSlots || [null, null, null, null, null, null])];
  profile.defeatedEnemies = { ...profile.lastSave.defeatedEnemies };
  profile.enemyRespawnAt = { ...(profile.lastSave.enemyRespawnAt || profile.enemyRespawnAt || {}) };
  profile.clearedNpcs = { ...(profile.lastSave.clearedNpcs || profile.clearedNpcs || {}) };
  profile.introSeen = profile.lastSave.introSeen ?? profile.introSeen;
  profile.wallet = profile.lastSave.wallet;
  profile.cardInstances = { ...(profile.lastSave.cardInstances || profile.cardInstances || {}) };
  profile.nextCardUid = Number(profile.lastSave.nextCardUid || profile.nextCardUid || 1);
  migrateCardInventory(profile);
  profile.galladonJoined = !!profile.lastSave.galladonJoined;
  profile.enemyState = { ...(profile.lastSave.enemyState || {}) };
  return true;
}

function applyRewards(rewards) {
  rewards.forEach(reward => {
    if (reward.kind === "gold") {
      profile.wallet += reward.amount;
    } else if (reward.kind === "card") {
      for (let i = 0; i < reward.amount; i += 1) addCardInstance(reward.name, { level: 1 });
    }
  });
}

function formatRewardList(rewards) {
  return rewards.map((r, i) => {
    if (r.kind === "gold") return `第${i + 1}张: +${r.amount}G`;
    return `第${i + 1}张: ${r.name} x${r.amount}`;
  }).join("\n");
}

function openSelectedPack() {
  if (openingState) return;
  const pack = PACKS[selectedPackId];
  if (!pack) return;
  if (pack.dailyFree && profile.lastFreePackDate === todayKey()) {
    document.getElementById("packResult").textContent = "Man for You 今天已领取，请明天再来。";
    return;
  }
  if (profile.wallet < pack.price) {
    document.getElementById("packResult").textContent = `G 不足，${pack.name} 需要 ${pack.price}G。`;
    return;
  }
  profile.wallet -= pack.price;
  const rewards = pack.open(profile);
  applyRewards(rewards);
  if (pack.dailyFree) profile.lastFreePackDate = todayKey();
  saveProfile();
  renderPackModal();
  startPackOpening(pack.name, rewards);
}

function startPackOpening(packName, rewards) {
  openingState = { packName, rewards, index: 0 };
  const modalCard = document.querySelector("#packModal .modal-card");
  const opening = document.getElementById("packOpening");
  const packFloat = document.getElementById("packFloat");
  const rewardCard = document.getElementById("rewardCard");
  const hint = document.getElementById("packHint");
  modalCard.classList.add("opening");
  opening.classList.remove("hidden");
  packFloat.classList.remove("hidden");
  rewardCard.classList.add("hidden");
  hint.textContent = `点击 ${packName} 卡包，开始开包`;
}

function rewardToText(reward) {
  if (reward.kind === "gold") return `+${reward.amount}G`;
  return `${reward.name} ×${reward.amount}`;
}

function showNextRewardCard() {
  if (!openingState) return;
  const rewardCard = document.getElementById("rewardCard");
  const hint = document.getElementById("packHint");
  if (openingState.index >= openingState.rewards.length) {
    finishPackOpening();
    return;
  }
  const reward = openingState.rewards[openingState.index];
  rewardCard.classList.remove("hidden");
  rewardCard.textContent = `第${openingState.index + 1}张\n${rewardToText(reward)}\n(点击继续)`;
  hint.textContent = "逐张翻开中…";
}

function finishPackOpening() {
  if (!openingState) return;
  const modalCard = document.querySelector("#packModal .modal-card");
  const opening = document.getElementById("packOpening");
  const rewardCard = document.getElementById("rewardCard");
  modalCard.classList.remove("opening");
  opening.classList.add("hidden");
  rewardCard.classList.add("hidden");
  document.getElementById("packResult").textContent = `${openingState.packName} 开包结果：\n${formatRewardList(openingState.rewards)}`;
  openingState = null;
}

document.getElementById("poBtn").addEventListener("click", () => { state.selectedAction = "PO"; render(); });
document.getElementById("moBtn").addEventListener("click", () => { state.selectedAction = "MO"; render(); });
document.getElementById("skillBtn").addEventListener("click", () => { state.selectedAction = "SKILL"; render(); });

document.getElementById("endTurnBtn").addEventListener("click", () => {
  if (state.phase !== "player-select" || state.ended || state.manualBothSides) return;
  state.pending.player = null;
  state.pending.enemy = chooseBestEnemyAction();
  addLog(`Player skips Step ${state.step}/${state.roundStepLimit}. Enemy action locked.`);
  lockCurrentStepAndContinue();
});

document.getElementById("restartBtn").addEventListener("click", () => initBattle(state.mode || "demo"));
document.getElementById("resetBtn").addEventListener("click", () => initBattle("demo"));
document.getElementById("returnMapBtn").addEventListener("click", () => returnToMapFromBattle());
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("sidePanel").classList.toggle("open");
});
document.getElementById("packBtn").addEventListener("click", () => {
  document.getElementById("packModal").classList.remove("hidden");
  renderPackModal();
});
document.getElementById("cardsBtn").addEventListener("click", () => {
  document.getElementById("cardsModal").classList.remove("hidden");
  renderCardsModal();
});
document.getElementById("teamBtn").addEventListener("click", () => {
  document.getElementById("teamModal").classList.remove("hidden");
  renderTeamModal();
});
document.getElementById("saveMenuBtn").addEventListener("click", () => {
  setSaveModalMode("menu");
  renderSaveSummary();
  document.getElementById("saveModal").classList.remove("hidden");
});
document.getElementById("cardsCloseBtn").addEventListener("click", () => {
  document.getElementById("cardsModal").classList.add("hidden");
});
document.getElementById("teamCloseBtn").addEventListener("click", () => {
  document.getElementById("teamModal").classList.add("hidden");
});
document.getElementById("saveCloseBtn").addEventListener("click", () => {
  document.getElementById("saveModal").classList.add("hidden");
});
document.getElementById("packCloseBtn").addEventListener("click", () => {
  if (openingState) finishPackOpening();
  document.getElementById("packModal").classList.add("hidden");
});
document.getElementById("packSelector").addEventListener("wheel", (e) => {
  e.preventDefault();
  if (openingState) return;
  const delta = e.deltaY > 0 ? 1 : -1;
  selectPackByDelta(delta);
});
document.getElementById("openPackBtn").addEventListener("click", openSelectedPack);
document.getElementById("packFloat").addEventListener("click", () => {
  if (!openingState) return;
  document.getElementById("packFloat").classList.add("hidden");
  showNextRewardCard();
});
document.getElementById("rewardCard").addEventListener("click", () => {
  if (!openingState) return;
  const rewardCard = document.getElementById("rewardCard");
  rewardCard.classList.add("slide-out");
  setTimeout(() => {
    rewardCard.classList.remove("slide-out");
    openingState.index += 1;
    showNextRewardCard();
  }, 280);
});
document.getElementById("dialogueOverlay").addEventListener("click", () => {
  advanceDialogue();
});

document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("startScreen").classList.add("hidden");
  setSaveModalMode("entry");
  renderSaveSummary();
  document.getElementById("saveModal").classList.remove("hidden");
});
document.getElementById("continueBtn").addEventListener("click", () => {
  profile = loadProfile();
  clearSeenMarks();
  resetEnemyMoveRuntime();
  if (!applyLastSaveToProfile()) {
    addLog("没有检测到可用存档，已按当前进度进入游戏。");
  } else {
    addLog("已读取存档，进入游戏。");
  }
  enterGame();
  if (!profile.introSeen) playOpeningCutscene();
});
document.getElementById("newGameBtn").addEventListener("click", () => {
  localStorage.removeItem(SAVE_KEY);
  profile = defaultProfile();
  clearSeenMarks();
  resetEnemyMoveRuntime();
  saveProfile();
  addLog("已创建新游戏。");
  enterGame();
  playOpeningCutscene();
});
document.getElementById("saveBtn").addEventListener("click", () => {
  profile.lastSave = {
    map: { ...profile.map },
    facing: profile.facing,
    cardLevels: { ...(profile.cardLevels || {}) },
    cardRanks: { ...(profile.cardRanks || {}) },
    cardDamageTypes: { ...(profile.cardDamageTypes || {}) },
    teamSlots: [...(profile.teamSlots || [null, null, null, null, null, null])],
    cardInstances: { ...(profile.cardInstances || {}) },
    nextCardUid: profile.nextCardUid || 1,
    defeatedEnemies: { ...(profile.defeatedEnemies || {}) },
    enemyRespawnAt: { ...(profile.enemyRespawnAt || {}) },
    clearedNpcs: { ...(profile.clearedNpcs || {}) },
    introSeen: profile.introSeen,
    wallet: profile.wallet,
    cards: { ...(profile.cards || {}) },
    galladonJoined: profile.galladonJoined,
    enemyState: { ...(profile.enemyState || {}) }
  };
  saveProfile();
  renderSaveSummary();
  addLog("存档成功。");
});
document.getElementById("loadBtn").addEventListener("click", () => {
  profile = loadProfile();
  clearSeenMarks();
  resetEnemyMoveRuntime();
  applyLastSaveToProfile();
  renderWalletBadge();
  renderMap();
  renderSaveSummary();
  addLog("已读取存档。");
});
window.addEventListener("keydown", (e) => {
  if (!gameEntered) return;
  if (!document.getElementById("dialogueOverlay").classList.contains("hidden")) {
    const key = e.key.toLowerCase();
    if (e.code === "KeyZ" || key === "z" || key === "enter" || key === " ") {
      e.preventDefault();
      advanceDialogue();
    }
    return;
  }
  if (!document.getElementById("packModal").classList.contains("hidden")) return;
  if (!document.getElementById("cardsModal").classList.contains("hidden")) return;
  if (!document.getElementById("teamModal").classList.contains("hidden")) return;
  if (!document.getElementById("saveModal").classList.contains("hidden")) return;
  if (worldLocked) return;
  if (inEncounterBattle) return;
  const key = e.key.toLowerCase();
  const isInteract = e.code === "KeyZ" || key === "z";
  if (isInteract) {
    e.preventDefault();
    interactWithNearbyNpc();
    return;
  }
  if (e.code === "KeyW" || key === "w") tryMovePlayer(0, -1);
  if (e.code === "KeyS" || key === "s") tryMovePlayer(0, 1);
  if (e.code === "KeyA" || key === "a") tryMovePlayer(-1, 0);
  if (e.code === "KeyD" || key === "d") tryMovePlayer(1, 0);
});

initBattle("demo");
