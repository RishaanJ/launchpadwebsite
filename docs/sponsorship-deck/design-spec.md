# Launchpad Sponsorship Deck — Visual Design Spec (1920×1080)

Sources: `app/globals.css`, `app/layout.tsx`, `app/_components/Chrome.tsx`, `app/page.tsx`, `app/partners/page.tsx`.

## 1. Color palette (exact tokens from globals.css)

| Token | oklch (source of truth) | Hex (sRGB) | Use |
|---|---|---|---|
| `paper` | `oklch(0.985 0 0)` | `#FAFAFA` | Default slide background |
| `paper-2` | `oklch(0.965 0 0)` | `#F3F3F3` | Alternate section bg, featured-row tint, pill fills |
| `ink` | `oklch(0.14 0 0)` | `#090909` | Primary text, dark slides, CTA pill fill |
| `ink-soft` | `oklch(0.42 0 0)` | `#4D4D4D` | Body copy, secondary text |
| `ink-mute` | `oklch(0.62 0 0)` | `#868686` | Kickers, captions, mono numerals, arrows |
| `rule` | `oklch(0.89 0 0)` | `#DBDBDB` | 1px borders, dividers, card-grid gap fill |
| `rule-soft` | `oklch(0.94 0 0)` | `#EBEBEB` | Hairline borders (header), background grid lines |
| `accent` | `oklch(0.66 0.22 28)` | `#FC463C` | Headline final period, dots, center node — accent ONLY, never large fills |
| `accent-ink` | `oklch(0.985 0 0)` | `#FAFAFA` | Text on accent (rarely used) |

Derived opacities used on dark (ink) surfaces: text `paper/70` (body), `paper/55` and `paper/50` (mono strip), border `paper/25` (outline pill), divider `paper/15`. Featured tier row: `paper-2 @ 60%` over paper. The site's highlighter underline uses raw `#FF0000` in one hero spot; for the deck standardize on `accent #FC463C`. Radius token `--radius: 10px` exists but the brand uses only two radii in practice: **fully rounded pills** and **0px (square) cards** (`rounded-none`).

## 2. Typography

Fonts (from `layout.tsx`): **Geist** (variable, `--font-sans`; weights used: 400, 500 medium, 600 semibold, 700 bold), **Geist Mono** (`--font-mono`; 400/500), **Pixelify Sans** (`--font-pixel`, 400–700 — decorative only, use sparingly or not at all in the deck). Body default is Geist 400, antialiased.

Slide type scale — site sizes at max-clamp × 1.333 (1920 canvas / 1440 site container), rounded. Tracking and line-height are copied verbatim from the code.

| Style | Font / weight | Size (px) | Letter-spacing | Line-height | Site source |
|---|---|---|---|---|---|
| Display XL (cover wordmark) | Geist Bold 700 | 200 | −0.045em | 0.84 | footer wordmark `clamp(...,7.5rem)` |
| Display / hero H1 | Geist Bold 700 | 140 | −0.04em | 0.88 | partners h1 `clamp(...,6.5rem)` |
| Big-statement H1 | Geist Bold 700 | 116 | −0.045em | 0.86 | shipathon h2 |
| Section H2 | Geist Bold 700 | 96 | −0.035em | 0.92 | section h2 `clamp(...,4.5rem)` |
| Sub-statement | Geist Medium 500 (key phrase Bold) | 58 | −0.02em to −0.03em | 1.1 | hero subtitle `clamp(...,2.75rem)` |
| Stat number | Geist Bold 700 | 58 | −0.04em | 1.0 | chapter stat `clamp(...,2.75rem)` |
| Tier name H3 | Geist Bold 700 | 48 | −0.03em | 1.0 (leading-none) | tier h3 `clamp(...,2.25–2.5rem)` |
| Card title | Geist Bold 700 | 40 | −0.025em | 0.95–1.0 | partner card name |
| Lede | Geist Medium 500 | 36 | −0.015em | 1.25 | partners hero lede `clamp(...,1.75rem)` |
| Body | Geist Regular 400 | 24 | 0 | 1.625 (leading-relaxed) | 17–18px body |
| Body small / perks | Geist Regular 400 | 20 | 0 | 1.625 | 15px perk text |
| List-item title | Geist Semibold 600 | 26 | −0.015em | 1.2 | 19px track name |
| Button label | Geist Medium 500 | 20 | 0 | 1 | 15px CTA |
| **Kicker / mono label** | Geist Mono 400 | 15 | **+0.22em, UPPERCASE** | 1.2 | 11px `tracking-[0.22em]` (SectionLabel uses 0.24em) |
| Mono caption / table header | Geist Mono 500 | 13 | +0.24em, UPPERCASE | 1.2 | 10px manifest header |
| Mono numeral (01, 02…) | Geist Mono 400 | 16 | +0.22em, UPPERCASE | 1.2 | 12px list numbers |

Signature move: every headline ends with a period whose color is `accent`, no space before it — `Sponsor the next generation` + accent `.`. Emphasis inside ink-soft paragraphs = Geist Medium in full `ink`.

## 3. Layout system (1920×1080)

- **Margins:** 120px left/right. Content width = **1680px**.
- **Grid:** 12 columns, 24px gutters, on the 1680 content box.
- **Vertical rhythm:** kicker zone starts at y=120; headline begins ~48px below kicker; lede ~32px below headline; big blocks separated by 72–96px (site `mt-14`/`py-24`).
- **Rules:** every structural line is exactly **1px `rule`** (`#DBDBDB`); hairlines on paper backgrounds may use `rule-soft`. Sections are separated by full-bleed 1px `rule` lines (border-t idiom) running edge-to-edge (0→1920), with content inset to margins.
- **Card grid (`bg-rule` + `gap-px`):** build as one frame filled `#DBDBDB` with 1px outer stroke `#DBDBDB`, containing an auto-layout grid with **1px gaps**; each cell is a `#FAFAFA` rectangle, **0 corner radius**, padding **40px**, min-height **240px** (partner cells), **300px** (roster cells), **345px** (tier cells). The 1px of `rule` showing through the gaps is the entire card border system — no shadows, ever.
- **Divide-y tier rows:** a stack bounded by 1px `rule` lines top and bottom (`border-y`), with 1px `rule` dividers between rows; rows have generous padding (**56–64px** vertical, 16–21px horizontal). Featured row gets a full-width fill of `paper-2 @ 60%`.
- **Background grid (cover only):** 1px `rule-soft` lines every **64px**, offset −1,−1, at ~50% layer opacity, masked with a radial fade (ellipse ~90%×70% centered at 50%, 45%; solid to 30%, transparent by 95%).

## 4. Component specs

1. **Kicker label (SectionLabel):** Geist Mono 15px, UPPERCASE, +0.22em (0.24em for standalone section labels), color `ink-mute`. Optionally prefixed by a 6px `accent` dot (site status pill idiom).
2. **Headline with accent period:** Geist Bold, tracking/leading per scale above, `ink`; final "." in `accent`. Max width ≈ 16–20 characters per line; tight negative leading means descenders nearly touch — that's intentional.
3. **Badge/status pill:** rounded-full, 1px `rule` stroke, `paper-2` fill, padding 22×11, content = mono kicker style in `ink-soft`, optional 8px `accent` dot at left. Variant: inner mini-pill `ink` fill, `paper` mono text 14px +0.14em (hero "Fall '26" chip).
4. **Stat callout:** mono kicker (`ink-mute`) above or beside a Geist Bold 58px number (−0.04em) in `ink`, followed by Geist 20px `ink-soft` descriptor; multiple stats separated by a 1px × 32px vertical `rule` tick; whole strip bounded top+bottom by 1px `rule` (border-y) with ~32px vertical padding.
5. **Tier card (grid cell):** `#FAFAFA`, 40px padding, 0 radius, vertical layout space-between: top row = two mono kickers justified ("TIER 04" / "OPEN" or "$30,000+"); middle = tier name Geist Bold 48px −0.03em leading-none + amount Geist Medium 24px `ink-soft` 8px below; bottom = ghost link (see 8).
6. **Tier row (divide-y pattern):** 3-column grid, columns **[290px | flexible | auto]**: col 1 = mono "TIER 01" kicker, tier name Bold 48px (16px below), amount Medium 27px `ink-soft`; col 2 = one-liner Geist Medium 23px `ink`, then perk list; col 3 (top-aligned) = ghost link "Start at Friend →". Perk list item = 2-col grid [21px | 1fr], 16px gap: mono `/` in `ink-mute` + 20px `ink-soft` text, 13px between items.
7. **Benefits table / manifest list:** header row = mono caption 13px +0.24em, left label `ink` / right label `ink-mute`, bounded by 1px `rule` above and below with 16px padding; body rows divided by 1px `rule`, each row a 2-col grid [58px | 1fr] with mono numeral "01" `ink-mute` + title Geist Semibold 26px `ink` + one-line body 20px `ink-soft`; row padding 28px vertical. For a matrix, columns are tier names in mono caption style, cells use `accent`-colored `/` or `ink-mute` em-dash.
8. **Ghost link:** Geist Medium 19px `ink-soft`, 1px `rule` underline sitting 2px below baseline, followed by the arrow glyph — 19×19px, stroke 1.6px `ink-mute`, round caps/joins (paths: shaft `M3 8h10`, head `M9 4l4 4-4 4` in a 16 viewBox).
9. **CTA button (ink pill):** fully rounded, fill `ink`, no stroke; label Geist Medium 20px `paper`; padding 32px × 16px; optional trailing arrow in `paper`. Dark-slide variant: transparent fill, 1px `paper/25` stroke, `paper` text.
10. **Footer strip (every slide):** 1px `rule` line full-bleed at **y = 1000**; below it, baseline row at y ≈ 1024–1040 within margins: left = mono 15px UPPERCASE +0.22em `ink-mute` "LAUNCHPAD — SPONSORSHIP 2026"; right = mono page number "03 / 12" same style. On dark slides use `paper/15` rule and `paper/55` text. Optionally a small `accent` period after "LAUNCHPAD".

## 5. Slide templates

**A. Cover.** Bg `paper`; 64px `rule-soft` grid layer @50% with radial fade mask (center 50%, 45%). Centered column: badge pill at y≈300 ("SPONSORSHIP · 2026–27" with ink mini-chip); wordmark "Launchpad" + accent "." Geist Bold 200px, −0.045em, centered, y≈430–600; sub-statement 58px Medium, leading 1.1, −0.02em, centered, max ~34ch, key phrase Bold with accent underline; footer strip. No imagery needed — the type is the design.

**B. Big-statement slide.** Bg `paper` (alternate `paper-2` for rhythm). Kicker at (120, 140). Headline 116px Bold, leading 0.86, −0.045em, starting y≈300, max width ~1200px (2–3 lines), accent period. Sub-statement 58px at y≈700, max ~26ch, pattern "Not X. Not Y. The real thing." with de-emphasized clause in `ink-soft`. Footer strip. Optional: 4×4 dithering texture (`#FAFAFA`/`#1F1F1F`, ~55% opacity, radially masked to edges) for the hero's grain.

**C. Two-column content.** Kicker (120, 140); Section H2 96px at y≈200 (max ~18ch, 2 lines, accent period). Below y≈480: left column (cols 1–7, ~960px) = body 24px/1.625 `ink-soft` with `ink` Medium emphasis spans, then CTA pill + ghost link row 56px below; right column (cols 9–12, ~560px, top-aligned) = manifest list (component 7) with border-y header ("MANIFEST" / "5 TRACKS · PICK ONE") and 4–5 numbered rows. Footer strip.

**D. Table/matrix slide.** Kicker + H2 as in C. Table spans full 1680 width starting y≈460: header row mono caption 13px with 1px `rule` above/below; 4–6 rows, 1px `rule` dividers, ~90px row height; first column benefit name (Geist Medium 22px `ink`, width ~560px), remaining 4 columns centered under tier-name mono headers ("FRIEND $500" … "TITLE $30K+"), cell mark = accent `/` (included) or `ink-mute` — (not). Title column may carry a full-height `paper-2 @60%` tint. Footer strip.

**E. Tier-grid slide.** Kicker + H2 ("Pick a seat. We'll put your name on it." accent period). At y≈480: the gap-px grid — outer 1682×580 frame filled `rule`, 4 cells 1px-gapped (~419px each), each per component 5, ordered Title→Friend or reverse with "TIER 04…01" numerals descending. Below grid 40px: left mono caption "0 OF 6 FOUNDING SEATS FILLED", right ghost link. Footer strip.

**F. Closing/contact slide (dark).** Bg `ink`, mirrors the site footer. Wordmark "Launchpad" + accent "." Bold ~160px, leading 0.84, −0.045em at (120, ~360); mission line 24px `paper/70` max 44ch below. Right-bottom aligned: mono kicker "GET ON THE LIST" `paper/50`, then outline pill (1px `paper/25`, rounded-full, padding 27×16) "hello@buildlaunchpad.org →" in `paper` Medium 20px. Bottom strip: 1px `paper/15` rule at y≈940, below it two mono 15px +0.22em `paper/55` lines left ("© 2026 LAUNCHPAD · FISCALLY SPONSORED BY HACK CLUB" / "EIN: 81-2908499") and link list right ("INSTAGRAM LINKEDIN PRESS CONTACT", 32px apart).

**Rules of the brand, in one line each:** near-white paper + near-black ink, one red accent used only as punctuation; everything separated by 1px gray rules, never shadows; cards are square, buttons are pills; headlines are huge, bold, negatively tracked and end in a red period; labels are small uppercase mono with wide +0.22em tracking; numbers are zero-padded ("01", "02"); lists are marked with mono "/".
