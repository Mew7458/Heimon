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

- Turn flow: player turn -> enemy turn -> next round.
- Click a friendly unit, then click a highlighted enemy target to attack.
- Range rules implemented in demo:
  - `basic` (targets current lane front; if no front then back becomes front)
  - `pierce` (targets front + back in current lane)
- Type multiplier system from provided Typings (implemented for used attack types in this demo: Normal / Plant / Bug).
- Damage formula (Pokemon-like simplified):
  - `max(1, (SkillPO + AttackerPO - DefenderDef) * typingMultiplier)`
- Speed-based enemy AI action choice.
- Slide-out right panel with the requested buttons (Base/Cards/Team/Bag/Exit/Locked) as UI shell.

## Run

Open `index.html` directly in a browser.
