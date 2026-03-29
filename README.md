# Inside the Pressure Website

A Vite + React website for the COMM2905 digital comic project **Inside the Pressure**.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- `netlify.toml` is already included.

### GitHub Pages
Push this project to the `main` branch and enable **GitHub Pages** with **GitHub Actions** as the source. The included workflow builds the app and deploys the `dist` folder automatically.
