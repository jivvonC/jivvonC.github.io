# Jiwon Chon — academic site

Single-page research portfolio built with Next.js. The design portfolio stays on [Framer](https://jiwonchon.framer.website/).

```bash
npm run dev
```

Edit copy in `content/site.ts`. To replace a schematic with a prototype capture, add the image under `public/research` and set `src` on that artifact.

The public CV is `public/cv.pdf`.

## Deploying

Pushing to `main` builds a static export and publishes it to GitHub Pages at
[jivvonc.github.io](https://jivvonc.github.io). `npm run build` writes the same
output to `out/`.
