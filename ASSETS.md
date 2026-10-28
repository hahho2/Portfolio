# Artwork provenance

The chakra enhancement adds procedural masks and seeded particle geometry in `src/effects/`, with no new third-party raster artwork. The opening MP4 in `public/media/` is rendered from `src/remotion/Film.tsx` using the existing original village art, bundled Barlow Condensed font and authored geometric/particle layers. It contains no copyrighted soundtrack. The official resume PDF is the exact file supplied by the user; it is not regenerated.

`public/assets/village.webp` is original artwork produced for this project with the built-in ImageGen tool, then encoded to WebP with Pillow (quality 88). No supplied anime images were used as references. The original generated PNG is retained in the Codex generated-images directory.

## Exact generation prompt

Use case: stylized-concept. Create a cinematic ultra-wide 16:9 anime background painting for an original shinobi developer portfolio. Hand-painted anime environment, detailed cel-shaded architectural art, dramatic Japanese ninja village at dusk: layered green tiled rooftops, warm glowing windows, distant forested mountain cliffs and monument rock reliefs, warm orange sun in hazy sky on right. On the right third an ORIGINAL lone adult ninja silhouette in a dark navy windblown cloak and plain headband standing on a rooftop, back to camera, tiny orange embers around him. No recognizable Naruto characters, no copyrighted symbols, no logos, no text. Left half is quiet dark navy atmosphere with subtle mist, suitable for white headline overlay. Colors deep midnight blue #101725, muted teal roofs, warm amber and burnt orange light. Elevated film production background art, painterly beautiful detail, evocative scale, widescreen cinematic composition. Not photoreal, not 3D. Save output for use in website.
