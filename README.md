# Heimon

A small browser battle demo for **The Battle Cards**.

## Demo scope

Implemented a playable turn-based combat prototype based on your requested lineup:

- **Player**: Front(L) Man, Front(C) Empty, Front(R) Dandi, Back(L) Cat, Back(C) Brig, Back(R) Cat
- **Enemy**: Front(L) Man, Front(C) Empty, Front(R) Man, Back(L) Cat, Back(C) Brig, Back(R) Cat

## Stat abbreviations

- HP: Health
- PO: Physical Offense
- Def: Defense
- MO: Magical Offense
- MR: Magic Resistance
- Spd: Speed
- TD: True Damage (reserved in design, not yet used by current skills)

## Features in this demo

- Added `模拟战斗1` entry in the 🏠 panel: all units forced to Lv1, with fully manual control for both sides (no AI), using the requested fixed formations.
- In `模拟战斗1`: each side manually selects **PO / MO / Skill** then target; both sides lock actions and resolve by `Spd` simultaneously.
- End of each full round gives both sides +10 SP; every 100 SP converts to 1 skill point.
- Not every unit has a usable special Skill; Skill action requires that unit to have a special skill and at least 1 skill point.
- Includes full base template data for all currently listed units (#001 to #030-2) so future UI screens can reuse one source of truth.
- Simultaneous command style (Pokemon-like): player chooses action target, enemy AI chooses action target in the same round.
- Execution order is speed-based (higher `Spd` acts first each round).
- Click a friendly unit, then click a highlighted enemy target to commit your action.
- Range rules implemented in demo:
  - `basic` (targets current lane front; if that lane is empty, retargets to nearest lane(s) with enemies; ties can hit both sides)
  - `pierce` (targets front + back in current lane; if lane empty, retargets nearest lane(s))
- **Level growth uses Lv1 base stats with deterministic recalculation**:
  - `HP(L) = round(B_HP × (1 + 0.09 × (L - 1))) + 2 × floor((L - 1) / 5)`
  - `PO/MO(L) = round(B × (1 + 0.055 × (L - 1))) + floor((L - 1) / 8)`
  - `Def/MR(L) = round(B × (1 + 0.045 × (L - 1)))`
  - `Spd(L) = round(B × (1 + 0.02 × (L - 1)))`
  - if Lv1 base stat is `0`, the stat stays `0`
- Evolution template switch (wired for the full unit list in the planning document; item-locked evolutions are listed in rules but stay unreachable under Max Lv50):
  - `Man -> Knight` at Lv15
  - `Brig -> BuBa` at Lv7
- Type multiplier system from the full provided Typings list (Normal, Plant, Wind, Fire, Water, Electric, Steel, Ground, Ice, Rock, Bug, Poison, Phantom, Dragon, Fear, Organism, Erroneous).
- Damage calculation now follows your Def/MR soft-cap design:
  - Physical: `Final = max(1, round((SkillPower + PO) × typeMultiplier × 30 / (30 + Def)))`
  - Magical: `Final = max(1, round((SkillPower + MO) × typeMultiplier × 30 / (30 + MR)))`
- Enemy AI uses a best-action heuristic: prioritize lethal hits, then maximize expected damage and threat reduction.
- Face-to-face battlefield presentation: enemy and player formations are displayed vertically (enemy on top, player on bottom) and face each other.
- Slide-out right panel with the requested buttons (Base/Cards/Team/Bag/Exit/Locked) as UI shell.

## Run

Open `index.html` directly in a browser.

`Skip Turn` can be used if the player chooses to take no action for that round.
