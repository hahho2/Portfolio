# Harsh Yadav — The Shinobi Developer

**Vercel deployment:** see [DEPLOYMENT.md](DEPLOYMENT.md). Configuration is included: Vite, Node 22.x, `npm ci`, `npm run build`, output `dist`. No environment variables are required unless you configure contact delivery.

React, TypeScript, Vite and Tailwind portfolio with Remotion cinematics, GSAP landscape parallax, and Motion interactions.

## Run
`npm install` then `npm run dev`. Production: `npm run build`; preview: `npm run preview`.

## Content and setup
Edit `src/data.ts` for profile, skills, projects and journey milestones. Add verified email, GitHub and LinkedIn URLs there. Place an official resume PDF under `public/` and set `profile.resume` to its root-relative URL. No employment dates, proficiency percentages or performance claims are invented.

Contact delivery is intentionally unconfigured. Without an endpoint the form validates and saves a local draft; it never claims a message was sent. Configure `VITE_CONTACT_ENDPOINT` in `.env.local` to an actual JSON delivery service with validation, rate limiting and appropriate CORS. No service credentials belong in client code. Professional links and resume display explicit unavailable states until supplied.

The original `Images/` files are preserved and not shipped. The environment artwork in `public/assets/` is original AI-generated work; provenance and exact prompt are in `ASSETS.md`. There is no redistributed anime footage, character art, or soundtrack. Optional wind is synthesized locally after user interaction.

## Interaction checks
Opening can be skipped immediately or with Escape. Reloading the same session does not force another intro. Reduced motion skips automatic intro and parallax/ambient loops. Chapter links are ordinary browser anchors. Skill category filters and technique disclosures work by keyboard. HRMS uses a native dialog with Escape and focus restoration. Contact validation uses native browser constraints; missing delivery configuration saves a local draft.

## Approved chakra enhancement

Update: the dragon sequence is now a **nine-second automatic opening before the homepage**, rather than an in-page scroll interlude. On a fresh home entry/reload it plays without scrolling, with Skip/Escape and Enter portfolio controls. The page is hidden and inert until completion; the animation is removed from the homepage flow. Watch the opening replays it. Direct chapter links and reduced motion bypass automatic playback. The timer starts after the particle targets/font are ready, with a load-failure watchdog so the page cannot remain blocked. The older 15-second Remotion export remains available as a source asset but is no longer the Watch the opening action.

The heading fire and dragon use one lazy Three.js renderer. A bounded desktop sticky interlude maps native scroll to seeded particle targets; `src/effects/timeline.ts` defines deterministic word holds. Mobile uses a static particle-dragon composition with no pin. Ambient effects can be paused; the optional pointer embers start disabled. Reduced motion bypasses the renderer and automatic cinematic. The preserved seven chapter anchors, dossiers and draft contact workflow remain available.

The 15-second opening is rendered to `public/media/shinobi-opening.mp4` (1280×720, H.264; approximately 2.7 MB). Replay uses the MP4, with a poster and live Remotion fallback. To regenerate: `npx remotion render src/remotion/index.tsx ShinobiOpening public/media/shinobi-opening.mp4 --codec=h264 --crf=23 --concurrency=2`. Run `node tests/particle-timeline.mjs` for target-boundary and reverse-scrub checks. Rendering uses the installed matching Remotion CLI. Zod is overridden to the audited patched version.

The supplied official resume is now available as `/harsh-yadav-resume.pdf`; its SHA256 matches the source PDF. Resume-backed education, both internships, technical skills, scoped HRMS case-study and contact URLs are incorporated. HRMS metrics retain their scope and attribution. Contact delivery is still unconfigured; email links work independently.

A recoverable copy of the previous working source/assets is in `backups/before-chakra-enhancement.zip`. The implementation does not use the separate proposal concept images as finished UI assets.

Latest timing adjustment: the final phrase stage is extended by 40% (1.08s to 1.512s), preserving all earlier beats and the existing end fade. Total automatic opening duration is 9.432s. The particle timeline test asserts the 1.4 duration ratio.

Opening entry update: the dragon now plays on every fresh load, including #origin and other chapter URLs. Hash navigation within the loaded site does not restart it. Skip, replay, reduced-motion bypass and 9.432-second timing remain. This supersedes earlier deep-link-bypass notes.

Latest timing: the final phrase stage is 50% longer than its previous 1.512 seconds, now 2.268 seconds. Earlier beats are unchanged; total opening is 10.188 seconds. The timing assertion checks the 1.5 ratio against the prior duration.
