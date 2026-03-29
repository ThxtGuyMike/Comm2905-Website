# Deployment Guide

## Fastest option: Vercel
1. Create a GitHub account if you do not already have one.
2. Create a new repository and upload the project files.
3. Go to Vercel and sign in with GitHub.
4. Click **Add New Project**.
5. Import the repository.
6. Keep the default Vite settings.
   - Build command: `npm run build`
   - Output directory: `dist`
7. Click **Deploy**.
8. Vercel will give you a live URL you can click and share.

## Fastest option: Netlify
1. Upload the project to GitHub.
2. In Netlify, choose **Add new site** → **Import an existing project**.
3. Select the GitHub repo.
4. Use these settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy the site.
6. Netlify will generate a clickable URL.

## Important note
I cannot publish a live public website directly from this chat, so I cannot generate a permanent public URL for you here. I have made the project deployment-ready so that Vercel or Netlify can generate the link in one pass.
