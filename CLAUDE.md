# FitFlow — working conventions

This project is built one screen at a time from the design specs in `design/`.
For every screen or feature, follow this loop:

1. **Design plan first.** Before writing code, state a short plan: named colors
   (from the CSS tokens in `frontend/src/index.css`), type pairing, layout
   concept. Explain *why* the approach fits the screen, not just what it is.
2. **Flag gaps, don't silently patch them.** If the design has a missing
   screen, an inconsistent flow, or an ambiguous state, say so explicitly and
   describe the concrete failure scenario. Don't quietly work around it or
   invent a fix without flagging it first.
3. **Surface tradeoffs, ask when it's a real decision.** If there's more than
   one reasonable way to build something, say what the tradeoff is. Ask
   rather than guess when the choice is genuinely the user's call.
4. **Narrate in plain language.** Short updates as you go — what you're
   building and why — not just a wall of diffs.
5. **Verify before declaring done.** Actually run the app and take a
   screenshot of the rendered screen. Only report a screen as complete after
   visually confirming it against the design spec.
6. **Push after each screen.** Once a screen is built and verified, commit
   and push to `origin main` at
   https://github.com/deepakanandap-arch/fitness-app.git.

## Stack
- Frontend: React (Vite), plain CSS per page, React Router
- Backend: Node.js + Express (REST API skeleton in `backend/`)
- Design tokens live in `frontend/src/index.css` (`--bg`, `--surface`,
  `--primary`, `--premium`, `--error`, `--success`, etc.)

## Design references
- `design/` holds the raw design-spec HTML pulled from claude.ai/design and
  artifact links, kept for reference while building each screen.
