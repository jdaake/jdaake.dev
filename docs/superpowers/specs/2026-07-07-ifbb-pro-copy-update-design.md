# IFBB Pro Copy Update — Design

**Date:** 2026-07-07
**Status:** Approved

## Context

Jordan earned his IFBB Pro card on 2026-07-05 weekend at the NPC Universe,
winning the Masters 35+ Classic Physique class (Class C). The site currently
frames him as a national-level competitor preparing for Master's Nationals
2026 with the goal of earning the pro card. All of that copy is now outdated.

## Scope

Site-wide copy update only. No new sections, pages, or design changes.
Four files change.

**Framing:** "National competitor chasing the card" becomes "IFBB Pro."
Where detail fits, the credential line is: *earned the IFBB Pro card at the
2026 NPC Universe, winning the Masters 35+ Classic Physique class.*

## Changes

### 1. Home — `app/page.js`

- `marqueeItems`: `'National Competitor'` → `'IFBB Pro'`
- Index blurb (Posing Coach, no. 02): "Stage presentation for competitive
  bodybuilders, from a national-level competitor." → "Stage presentation for
  competitive bodybuilders, from an IFBB Pro."
- `facts` scorecard:
  - `{ value: 'Top 5', label: 'National Placings' }` →
    `{ value: 'IFBB', label: 'Pro, Classic Physique' }`
  - `{ value: "July '26", label: "Master's Nationals" }` →
    `{ value: '10+', label: 'Years Competing' }`
- Manifesto paragraph: "Competitive Classic Physique bodybuilder." →
  "IFBB Pro Classic Physique bodybuilder."

### 2. Coaching — `app/coaching/page.js`

- `stats` strip: `{ value: 'Top 5', suffix: '', label: 'National Placings' }`
  → `{ value: 'IFBB', suffix: '', label: 'Pro Card, 2026' }`
- "Why I Coach" third paragraph: "Currently preparing for Master's Nationals
  2026 with plans to earn my IFBB Pro card. I coach because I want to share
  what I've learned — the details that took me years to figure out." →
  "In July 2026 I earned my IFBB Pro card, winning the Masters 35+ Classic
  Physique class at NPC Universe. I coach because I want to share what got me
  there — the details that took me years to figure out."
- Metadata description: "Bodybuilding posing coach helping athletes present
  their best physique on stage." → "IFBB Pro posing coach helping athletes
  present their best physique on stage."

### 3. About — `app/about/page.js`

- Bodybuilding paragraph: "Classic Physique competitor. 6'3\", competing at
  the 239 lb cap. Multiple top-5 finishes at national-level shows. Currently
  preparing for Master's Nationals in July 2026 with one goal: earn my IFBB
  Pro card." → "IFBB Pro, Classic Physique. 6'3\", competing at the 239 lb
  cap. A decade of national-level competition and multiple top-5 finishes led
  to July 2026, when I won the Masters 35+ Classic Physique class at NPC
  Universe and earned my pro card."
- Stats grid: `{ value: 'Top 5', label: 'Nationals' }` →
  `{ value: 'Pro', label: 'IFBB, 2026' }`

### 4. Site metadata — `app/layout.js`

- Description: "Software engineer and national-level Classic Physique
  competitor. Building cloud systems by day, coaching stage presentation by
  night." → "Software engineer and IFBB Pro Classic Physique competitor.
  Building cloud systems by day, coaching stage presentation by night."

## Explicitly unchanged

- Photo captions ("national stage") — factually where the photos were taken.
- Coaching hero copy and "Why I Coach" first paragraph — the national-stage
  history is still true and sets up the pro card line.
- All layout, styling, components, and stat-tile animation (`CountUp` already
  handles non-numeric values like "Top 5" / "IFBB").

## Testing

- `npm run build` passes.
- Visual check of home, coaching, and about pages: stat tiles render and
  animate, no layout breakage from longer labels.
