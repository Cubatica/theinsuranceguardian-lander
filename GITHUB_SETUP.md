# GitHub to Cloudflare Pages Setup Guide

Follow these steps to connect your GitHub repository to Cloudflare Pages.

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Repository name: `optimum-seniors` (or your preferred name)
4. Description: "Auto insurance website - Next.js"
5. Choose **Private** or **Public** (your preference)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **Create repository**

## Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/optimum-seniors.git

# Rename branch to main (if needed)
git branch -M main

# Push your code
git push -u origin main
```

**Alternative: Using SSH (if you have SSH keys set up)**

```bash
git remote add origin git@github.com:YOUR_USERNAME/optimum-seniors.git
git branch -M main
git push -u origin main
```

## Step 3: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Sign in or create an account
3. Click **Pages** in the sidebar
4. Click **Create a project**
5. Click **Connect to Git**
6. Authorize Cloudflare to access your GitHub account (if prompted)
7. Select your repository: `optimum-seniors`
8. Click **Begin setup**

## Step 4: Configure Build Settings

In the build configuration:

- **Project name**: `optimum-seniors` (or your preferred name)
- **Production branch**: `main` (or `master` if you're using that)
- **Framework preset**: `Next.js (Static HTML Export)`
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: `/` (leave empty)

### Environment Variables (Optional)

If you need environment variables:
- Click **Add environment variable**
- Add any variables needed (e.g., `NODE_VERSION=20`)

## Step 5: Deploy

1. Click **Save and Deploy**
2. Cloudflare will:
   - Install dependencies (`npm install`)
   - Run the build (`npm run build`)
   - Deploy the `out/` folder
3. Wait for deployment to complete (usually 2-5 minutes)

## Step 6: Custom Domain (Optional)

1. After deployment, go to your project settings
2. Click **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain (e.g., `optimum-seniors.com`)
5. Follow DNS setup instructions
6. Cloudflare will automatically configure SSL/TLS

## Automatic Deployments

Cloudflare Pages automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every pull request gets a preview URL

## Troubleshooting

### Build Fails

- Check build logs in Cloudflare Pages dashboard
- Ensure `package.json` has all dependencies
- Verify `next.config.js` has `output: 'export'`

### Images Not Loading

- Ensure all images are in `public/images/` folder
- Check image paths in your code (should start with `/images/`)

### 404 Errors

- Verify all pages are in `app/` directory
- Check that `next.config.js` has correct configuration

## Next Steps

- Set up custom domain
- Configure environment variables if needed
- Set up preview deployments for pull requests
- Monitor deployments in Cloudflare dashboard

## Support

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

