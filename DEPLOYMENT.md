# Deploy to Vercel

This project deploys as a static Vite site. No Vercel server functions, database, or video renderer are needed for the portfolio to run.

## Git deployment

1. Push this project to your GitHub repository, including `src/`, `public/`, `scripts/`, `index.html`, `package.json`, `package-lock.json`, `tsconfig.json`, `vite.config.ts` and `vercel.json`.
2. In Vercel, choose **Add New → Project**, import the repository, and select the directory containing `package.json` as the Root Directory. For this project at the repository root, leave it as `./`.
3. The tracked configuration supplies these settings:

| Setting | Value |
|---|---|
| Framework Preset | Vite |
| Node.js | 22.x |
| Install Command | `npm ci` |
| Build Command | `npm run build` |
| Output Directory | `dist` |

4. Deploy. No environment variables are required for the current portfolio. Remove conflicting dashboard build/output overrides if you set any previously.
5. Open the deployment URL and check the dragon intro, Skip/replay, chapter links, project dialogs, resume download and mobile navigation.

The page uses hash links such as `/#origin`, so these links load the root page and work without SPA rewrites. There is no need for a catch-all rewrite that turns missing assets into HTML. Vercel serves the built `dist` output; do not set the output directory to `public` and do not run `npm run dev` or `npm run preview` as the build command.

## Assets to commit

Commit the actual files under `public/`, especially the village WebP, bundled cinematic font, supplied resume PDF, and rendered MP4. The prebuild check fails with a clear error if any required asset is empty, absent, or still a Git LFS pointer. Vite copies these files into the deployment. Asset paths and capitalization must match exactly on Vercel's Linux build system.

The dragon opening is generated in the visitor's browser. The existing Remotion MP4 is already rendered and committed as an ordinary static asset. **Do not render videos during Vercel builds.** Local regeneration instructions are in README.md.

`dist`, local caches, backups, proposal images, original unused `Images`, and Impeccable review screenshots are not needed in CLI deployment uploads. `.vercelignore` excludes these; it does not delete local files. For Git-based deployment, Vercel builds the committed project and publishes only `dist`.

## Optional contact delivery

The form currently saves a draft on the visitor's device. Email and social links work independently. To enable actual form delivery, set `VITE_CONTACT_ENDPOINT` in **Project Settings → Environment Variables** to a real HTTPS endpoint accepting JSON `{name, email, message}`, then redeploy. The service must allow requests from your deployed domain and validate/rate-limit requests.

Vite variables beginning with `VITE_` are public build-time configuration. Do not put API keys, SMTP credentials or other secrets in them. The endpoint must handle delivery and keep its own credentials server-side. Leaving the variable unset preserves the clearly labeled draft-only behavior.

## Local production verification

```sh
npm ci
node tests/particle-timeline.mjs
npm run build
npm run preview
```

Optional CLI deployment, after installing the official Vercel CLI: run `vercel` from the project root for a preview deployment; run `vercel --prod` when you want to publish production. This preparation task does not create a Vercel project or deploy anything.

References: [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite), [Vercel build configuration](https://vercel.com/docs/builds/configure-a-build), [Vite public assets](https://vite.dev/guide/assets).
