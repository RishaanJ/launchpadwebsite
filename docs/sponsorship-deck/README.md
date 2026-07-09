# Launchpad Founding Sponsor Deck — working package

Everything needed to produce and send the sponsorship deck for the Figma project **LAUNCHPAD**.

| File | What it is |
|---|---|
| `deck-copy.md` | Complete slide-by-slide copy, 14 slides, in the site's brand voice |
| `design-spec.md` | Figma-ready visual spec: exact color tokens, type scale, layout system, components, six slide templates — extracted from the live site |
| `research.md` | Sponsor-pitch research: 8 recommendations, refined benefits matrix, top-5 objections with answers, sources |
| `frames/deck.html` | All 14 frames built at 1920×1080 per the design spec — open in a browser to present, print to PDF, or import into Figma |
| `one-pager.md` | 2-page email prospectus (per MLH guidance: the deck is for meetings, this is for the follow-up email) |
| `outreach-emails.md` | First-touch + follow-up email templates (first email: no links/attachments) |

## Getting the frames into Figma

The `figma-free` MCP server (Figma REST API) is **read-only** — it cannot create frames. To get these into the LAUNCHPAD Figma project:

1. Install the **html.to.design** plugin in Figma.
2. Open the plugin in the LAUNCHPAD project file and import `frames/deck.html` (file upload mode) — each 1920×1080 section becomes a frame.
3. Fonts: Geist and Geist Mono (both on Google Fonts and built into Figma's font list).

Alternatively `frames/deck.html` prints straight to a landscape PDF (each slide is exactly one page at 1920×1080) — usable as the send-out deck immediately.

## Known follow-ups (from research)

- Trim the meeting deck toward 10 slides; the 2-page one-pager is what gets emailed.
- Add "what your $ funds" line items per tier and the HCB public-ledger link to the transparency slide.
- Decide what an over-goal raise unlocks (Title seat ≈ the whole year-one goal).
- Fill in team-credibility slide (founders' shipped work) — the #1 objection for a new org.
