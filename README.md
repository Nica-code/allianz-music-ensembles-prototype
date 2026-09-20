# Allianz Music Ensembles Prototype

A responsive, one-page redesign concept for Allianz Music Ensembles. It uses the organization's existing logo, ensemble photograph, testimonials, SoundCloud recordings, contact destinations, and consultation form.

## Run locally

Install Node.js 20 or newer. With npm, run:

```bash
npm install
npm run dev
```

The repository also includes a pnpm lockfile, so `pnpm install` and `pnpm dev` work as well.

Create the static production output with:

```bash
npm run build
```

The deployable browser files are written to `dist/client`.

## Put the project on GitHub

1. Sign in to [GitHub](https://github.com/) and choose **New repository**.
2. Name it `allianz-music-ensembles-prototype`.
3. Leave **Add a README**, **.gitignore**, and **license** unchecked because they already exist locally.
4. Create the repository and copy its HTTPS URL.
5. Open PowerShell in this project folder and set your Git identity if you have not already:

```powershell
git config user.name "Your Name"
git config user.email "your-github-email@example.com"
```

6. Connect and upload the project, replacing the example URL with the one GitHub gives you:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/allianz-music-ensembles-prototype.git
git branch -M main
git push -u origin main
```

## Publish free with Netlify

1. Sign in to [Netlify](https://www.netlify.com/) with GitHub.
2. Choose **Add new site** → **Import an existing project**.
3. Select this repository.
4. Netlify reads `netlify.toml`; confirm the build command is `npm run build` and the publish directory is `dist/client`.
5. Choose **Deploy site**. Future GitHub pushes publish automatically.

## Publish free with Cloudflare Pages

1. In the [Cloudflare dashboard](https://dash.cloudflare.com/), open **Workers & Pages** and create a Pages project from Git.
2. Select this repository.
3. Choose **Vite** as the framework preset.
4. Set the build command to `npm run build` and the output directory to `dist/client`.
5. Deploy. Future GitHub pushes publish automatically.

## Source assets

The project intentionally contains no stock or generated photographs. Asset origins are recorded in [`public/assets/asset-manifest.md`](public/assets/asset-manifest.md).
