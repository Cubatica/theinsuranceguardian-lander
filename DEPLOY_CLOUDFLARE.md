# Deploying to Cloudflare Pages

This Next.js application is configured for Cloudflare Pages deployment using static export.

## Prerequisites

1. A Cloudflare account
2. Your project connected to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Cloudflare Dashboard

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
2. Click "Create a project"
3. Connect your Git repository
4. Configure build settings:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (or leave empty)
   - **Deploy command**: Leave this EMPTY (do not add any deploy command)
5. Click "Save and Deploy"

**Important**: Do NOT add a deploy command. Cloudflare Pages will automatically deploy the `out` directory after the build completes.

### Option 2: Deploy via Wrangler CLI

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the project
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy out
```

## Build Configuration

The project is configured with:
- **Static Export**: Enabled (`output: 'export'` in `next.config.js`)
- **Unoptimized Images**: Required for static export
- **No Server-Side Features**: All pages are statically generated

## Environment Variables

If you need environment variables:
1. Go to Cloudflare Pages → Your Project → Settings → Environment Variables
2. Add your variables for Production, Preview, or both

## Custom Domain

1. Go to Cloudflare Pages → Your Project → Custom domains
2. Add your domain and follow DNS setup instructions

## Notes

- All pages are pre-rendered at build time
- No API routes or server-side features are used
- Images are served as static assets (unoptimized)
- The site will work perfectly on Cloudflare Pages CDN

