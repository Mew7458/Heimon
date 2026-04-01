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

## Features in this demo

- Simultaneous command style (Pokemon-like): player chooses action target, enemy AI chooses action target in the same round.
- Execution order is speed-based (higher `Spd` acts first each round).
- Click a friendly unit, then click a highlighted enemy target to commit your action.
- Range rules implemented in demo:
  - `basic` (targets current lane front; if that lane is empty, retargets to nearest lane(s) with enemies; ties can hit both sides)
  - `pierce` (targets front + back in current lane; if lane empty, retargets nearest lane(s))
- Type multiplier system from provided Typings (implemented for used attack types in this demo: Normal / Plant / Bug).
- Pokemon-inspired damage calculation:
  - level factor
  - attack/defense ratio
  - STAB bonus
  - type multiplier
  - random factor (0.85 ~ 1.00)
- Enemy AI uses a best-action heuristic: prioritize lethal hits, then maximize expected damage and threat reduction.
- Face-to-face battlefield presentation: enemy and player formations are displayed vertically (enemy on top, player on bottom) and face each other.
- Slide-out right panel with the requested buttons (Base/Cards/Team/Bag/Exit/Locked) as UI shell.

## Run

Open `index.html` directly in a browser.

`Skip Turn` can be used if the player chooses to take no action for that round.
