# matildas.design portfolio

En ramverksfri portfolio byggd med HTML och CSS, baserad på Figma-filen `Portfolio`.

## Struktur

- `index.html` - startsidan
- `styles.css` - all styling
- `assets/` - lokala bilder och visuella referenser
- `projects/` - case-sidor

## Kör lokalt

Öppna `index.html` direkt i webbläsaren, eller servera mappen med valfri statisk server.

## Publicera på Cloudflare Workers

Projektet kan publiceras som en statisk site via Cloudflare Workers Static Assets.

```bash
npm create cloudflare@latest -- --existing
npx wrangler deploy
```

I Cloudflare kan repot kopplas till `matildausterud/Portfolio` med:

- Build command: lämna tomt
- Output/static assets directory: `.`
