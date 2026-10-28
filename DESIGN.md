---
name: The Shinobi Developer
description: An original dusk village portfolio for Harsh Yadav.
colors:
  night: "#101725"
  surface: "#0d1420"
  raised: "#142131"
  orange: "#f97316"
  orange-hover: "#ff9344"
  blue: "#38bdf8"
  leaf: "#47795a"
  parchment: "#ead8b5"
  warm-white: "#f8f5ef"
  muted: "#a9b0bb"
  line: "#ffffff18"
  dossier-action: "#25302b"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "132px"
    fontWeight: 800
    lineHeight: 0.85
    letterSpacing: "1px"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "56px"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.7px"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.9
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "8px"
    letterSpacing: "1.8px"
rounded:
  field: "2px"
  button: "3px"
  dialog: "5px"
spacing:
  tag-inline: "10px"
  field: "14px"
  button-inline: "22px"
  section-block: "112px"
  section-block-mobile: "70px"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "#151b23"
    rounded: "{rounded.button}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.orange-hover}"
  button-dark:
    backgroundColor: "{colors.dossier-action}"
    textColor: "{colors.parchment}"
    rounded: "{rounded.button}"
  input:
    backgroundColor: "#0d1520a0"
    textColor: "#ffffff"
    rounded: "{rounded.field}"
    padding: "14px"
  tag:
    backgroundColor: "#ffffff06"
    textColor: "#b9c4d2"
    padding: "7px 10px"
---

# Design System: The Shinobi Developer

## Directional chapter motion

`useDirectionalReveals.ts` owns one-time GSAP entrances with deterministic left/right/top/bottom, zoom, rotation, mild perspective, blur, mask and word-scatter variants. Origin splits its heading and quote; academy and skills use controlled direction patterns; mission art and copy enter independently; career roles alternate; resume settles from perspective; contact sharpens from blur. Motion continues to own skill disclosure height. Responsive matchMedia reduces travel/blur on mobile and bypasses all entrances for reduced motion. Context cleanup restores inline styles; a child-list observer registers newly filtered skill rows. Scenic project parallax and contact lighting scrub independently of reading content. Existing layout, facts, navigation and the 9.432-second opening remain unchanged.

## Current opening behavior — 29 October 2026

The user's latest direction replaces the scroll-driven dragon interlude with a nine-second autoplay modal before the homepage. No dragon section remains in the page flow. The homepage shell is hidden/inert during playback and revealed on completion or Skip/Escape; Watch the opening replays the same sequence. Reduced motion and direct chapter links bypass autoplay. Time uniforms replace scroll progress for the particle timeline. Normal ambient hero/finale rendering mounts only after the opening is dismissed. Earlier descriptions of a 340vh dragon pin below are superseded by this behavior.

## Overview

**Creative North Star: "The Shinobi Developer"**

An original dusk village panorama establishes a cinematic, determined atmosphere. The world draws on Naruto's shinobi storytelling while keeping original artwork and professional facts at its center. A large condensed name, quiet navy surfaces, orange signals, parchment documents, and sparse decorative Japanese lettering form the established identity.

This document records the implemented portfolio and its approved chakra animation enhancement. Preserve the dusk village identity, stacked name, professional chapters, and direct chapter anchors. The earlier proposal is a planning record; current source code defines the delivered effects and fallbacks.

**Key Characteristics:**

- Cinematic landscape with readable dark overlays.
- Condensed display type paired with restrained sans-serif details.
- Mission records and parchment dossiers instead of repeated card grids.
- A reversible dragon-to-type interlude, optional ambient effects, and opt-in synthesized wind.

## Colors

Orange identifies primary actions, active techniques, chapter markers, and emphasized words. Blue marks keyboard focus on buttons and links and distinguishes data skills. Leaf tones distinguish frontend skills and the academy's quieter materials.

Night and surface navy establish the page rhythm; raised navy separates quotations and skill symbols. Warm white is the principal text color, muted gray supports descriptions, and translucent white lines divide records. Parchment carries the resume dossier; its darker text and action treatment belong to that material. Warm red seals are decorative document accents, with their exact shades defined in the component CSS.

## Typography

Barlow Condensed carries names, chapter headings, and project titles. Manrope carries body text, controls, and metadata. Both have local font assets and sans-serif fallbacks. Serif Japanese lettering and quotations are decorative accents rather than a separate navigation language.

The hero display steps from the desktop token to 117px below 960px and 105px below 600px. Chapter headings step to 49px and 43px. Body copy is generally 11–12px with generous line height; mission descriptions stop around 65 characters per line. Tracked uppercase metadata sits below the main reading hierarchy.

## Layout

The opening uses a generous left-aligned name over a landscape whose rooftop figure occupies the right. Fixed navigation stays quiet above it. A numbered chapter rail supports desktop exploration and disappears on mobile.

Seven story chapters follow the opening: origin, academy, jutsu, missions, journey, resume, and contact. The hero's eight-position counter includes the opening. An unnumbered dragon interlude sits between the hero strip and Origin; it does not replace a professional chapter. The mission chapter pairs a featured HRMS workplace dossier with six public GitHub mission records; their descriptions follow the provenance in SOURCES.md.

Main sections use 112px vertical padding and horizontal padding of the larger of 8% or the centered 1180px content calculation. At 600px, sections use 70px vertical padding and 7% side gutters. Below 960px navigation becomes a menu; below 600px split layouts and skill lists become single columns. The hero remains a deliberate tall composition at these breakpoints. Public missions remain editorial rows with wrapping technology tags. The desktop dragon section spans 340vh with a 100svh CSS-sticky stage. It uses ordinary scrolling with no wheel interception or minimum viewing time; Skip animation and Continue the story anchors go directly to Origin. At 650px and below, the dragon becomes an 800px static poster-and-type scene with no sticky stage. Reduced motion uses a 760px static scene. Pausing ambient effects retains the desktop scroll section but reveals its static fallback.

## Elevation & Depth

Depth comes primarily from landscape shading, tonal surfaces, fine dividers, and layered paper. Shadows are reserved for primary actions, the tilted academy scroll, parchment dossier, and modal dialog. The fixed header uses a translucent dark backdrop with blur; the mission dialog dims and blurs its backdrop. Embers add atmosphere without intercepting input. One shared transparent Three.js canvas layers title-edge flame fringes, additive dragon particles, and the contact vortex over the page. The HTML title stays crisp; noise and the text mask affect the flame fringe. CSS cloud, fog, and title-aura layers preserve the flattened village artwork.

## Shapes

Surfaces are mostly square or subtly rounded. Small button and field corners retain a document-like character; the dialog is gently rounded. Circular shapes identify the crest, selected chapter, skill nodes, and timeline markers. Slightly tilted parchment and red seals provide the tactile exceptions.

## Components

Primary buttons use orange with dark text, compact labels, and directional icons. Secondary buttons use a faint border; dossier actions use dark green on parchment. Hover lifts standard buttons 2px and changes their background. Buttons and links show blue focus outlines; inputs show orange outlines. Disabled controls visibly recede.

Navigation uses ordinary hash anchors and active-state markers. The mobile menu exposes the same chapter destinations. The skill library combines category selection with expandable technique details; creative jutsu titles are explicitly metaphors rather than proficiency ratings.

Mission rows open a native dialog with project description, technology tags, and contribution details. Public projects offer repository links and identify documentation as the source; workplace content avoids private materials. Small tags have faint borders and translucent backgrounds.

Fields have persistent labels, subtle dark backgrounds, fine borders, and native validation. The contact action reports delivery state honestly: an unconfigured endpoint saves a local draft and explicitly says nothing was sent. The supplied resume PDF is available at /harsh-yadav-resume.pdf. Email and LinkedIn are connected from resume-derived content. Education, internship dates and roles, and additional skills now appear within the existing academy, journey, and dossier layouts. The HRMS loading result is explicitly resume-reported and scoped to roughly 1,000 records; it is not an independently measured portfolio result. Drafts restore locally and can be cleared from this device. Missing configuration still uses explicit unavailable states.

The lazy-loaded cinematic module plays the rendered 15-second opening MP4 (2,718,643 bytes, about 2.7 MB), with the village image as poster. Autoplay failure exposes a Play opening control; media failure falls back to the Remotion Player. Remotion remains the source for the opening, activation, chapter stingers, and outro. The opening uses 450 frames at 30 fps, with ignition rings, a fire sweep, village reveal, title reveal, and embers. Cinematics use native modal dialogs with visible skip controls and Escape dismissal. Wind is separately opt-in; the MP4 itself is muted. First-session automatic intro is suppressed for reduced motion or direct hash visits; explicit replay remains available.

The shared Three.js scene is lazy-loaded after a short deferred mount. Its point budget is 12,500 on desktop and 3,500 below 650px, with DPR capped at 1.15. The mobile budget does not imply a mobile particle morph: animated points are hidden at widths of 650px and below, where the static dragon poster and complete DOM typography are displayed. Target masks are sampled deterministically from an authored dragon contour and the bundled display font. Scroll drives scatter → dragon → burst → six targets: CODE, CREATE, BUILD, EVOLVE, NEVER GIVE UP, and MY NINJA WAY IS TO KEEP BUILDING. The last phrase wraps across two lines. Reversing progress traverses the same target fields. Semantic text describes the sequence without announcing every animation frame.

Rendering is gated to the hero, dragon, and contact regions and document visibility. Contact-form focus suppresses the vortex. WebGL creation failure or context loss reveals the static dragon fallback. The fixed canvas ignores pointer input. A persistent Pause effects control stops the shared scene, CSS atmosphere, and added GSAP reveal timelines; it is an ambient-effect preference, separate from explicit cinematic playback and the original landscape/timeline effects. Reduced-motion preferences bypass the shared scene and added reveals and provide the static dragon layout. These are implementation safeguards, not claims of measured frame rate or comprehensive browser-emulated reduced-motion validation.

Added GSAP effects reveal chapter headings and parchment with short masks, shift mission and timeline records into place, briefly light timeline checkpoints, and scrub the finale heading. CSS gives backend, data, frontend, tools, and strategy skills distinct bounded hover effects; mission underlines and inline-link sweeps stay local. The active navigation marker is a small kunai-like clipped stroke. Optional pointer embers start off, work only with a fine pointer while effects run, and are hidden on mobile; they are suppressed over forms and open cinematics. The contact prelude reads “LET’S BUILD SOMETHING LEGENDARY.” above the existing contact content and links to the form. Motion still handles expandable skill details. There are no automatic chapter delays or intercepted scrolling.

## Do's and Don'ts

- Do preserve original dusk village artwork and its readable text overlays.
- Do keep professional facts, chapter anchors, and mission sources readily accessible.
- Do retain visible focus, reduced-motion handling, and explicit unavailable states.
- Don't redistribute anime footage, recognizable character art, or licensed soundtracks.
- Don't invent dates, outcomes, proficiency ratings, project screenshots, or deployment claims.
- Don't replace the alternating narrative compositions with identical card grids.


Latest timing adjustment: the final phrase stage is extended by 40% (1.08s to 1.512s), preserving all earlier beats and the existing end fade. Total automatic opening duration is 9.432s. The particle timeline test asserts the 1.4 duration ratio.

Opening entry update: the dragon now plays on every fresh load, including #origin and other chapter URLs. Hash navigation within the loaded site does not restart it. Skip, replay, reduced-motion bypass and 9.432-second timing remain. This supersedes earlier deep-link-bypass notes.

Latest timing: the final phrase stage is 50% longer than its previous 1.512 seconds, now 2.268 seconds. Earlier beats are unchanged; total opening is 10.188 seconds. The timing assertion checks the 1.5 ratio against the prior duration.
