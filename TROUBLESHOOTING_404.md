# Troubleshooting 404 Errors on Cloudflare Pages

## Common Causes of 404 Errors

### 1. Deploy Command Still Present
**Symptom**: Build succeeds but deployment fails
**Solution**: Remove the deploy command from Cloudflare Pages settings (see `REMOVE_DEPLOY_COMMAND.md`)

### 2. Wrong Build Output Directory
**Symptom**: Site deploys but shows 404
**Solution**: Verify in Cloudflare Pages settings:
- **Build output directory**: `out` (not `.next` or `dist`)

### 3. Routes Not Found
**Symptom**: Homepage works but other pages show 404
**Solution**: The `_redirects` file has been added to handle routing

## Verify Your Deployment

### Check These URLs:
- `https://your-site.pages.dev/` - Should show homepage
- `https://your-site.pages.dev/blog` - Should show blog listing
- `https://your-site.pages.dev/faq` - Should show FAQ page
- `https://your-site.pages.dev/blog/top-5-tips-choosing-auto-insurance` - Should show blog post

### If Homepage Shows 404:

1. **Check Build Output Directory**
   - Go to Cloudflare Pages → Settings → Builds & deployments
   - Verify **Build output directory** is set to: `out`

2. **Check if `index.html` exists**
   - The build should create `out/index.html`
   - If it doesn't exist, the build might have failed

3. **Check Deployment Logs**
   - Go to Cloudflare Pages → Deployments
   - Click on the latest deployment
   - Check if the build completed successfully
   - Look for any errors in the logs

### If Specific Pages Show 404:

1. **Check if HTML files exist**
   - `out/blog.html` should exist
   - `out/faq.html` should exist
   - `out/blog/top-5-tips-choosing-auto-insurance.html` should exist

2. **Check `_redirects` file**
   - The `_redirects` file should be in `out/_redirects`
   - It should contain routing rules

3. **Clear Cloudflare Cache**
   - Go to Cloudflare Dashboard → Caching → Purge Everything
   - Wait a few minutes and try again

## Quick Fixes

### Fix 1: Rebuild and Redeploy
```bash
# Locally
npm run build

# Check that out/ directory has all files
ls out/

# Push to trigger new deployment
git push origin main
```

### Fix 2: Verify Cloudflare Pages Settings
1. Go to Cloudflare Pages → Your Project → Settings
2. Verify:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Deploy command**: (EMPTY)
   - **Root directory**: `/` (empty)

### Fix 3: Check File Structure
After build, your `out/` directory should contain:
```
out/
├── index.html
├── blog.html
├── faq.html
├── blog/
│   ├── top-5-tips-choosing-auto-insurance.html
│   └── how-to-save-auto-insurance.html
├── _redirects
├── images/
└── _next/
```

## Still Getting 404?

1. **Check the exact URL you're accessing**
   - Make sure you're using the correct Cloudflare Pages URL
   - Format: `https://your-project-name.pages.dev`

2. **Check browser console**
   - Open browser DevTools (F12)
   - Check Console tab for errors
   - Check Network tab to see which files are failing to load

3. **Try incognito/private browsing**
   - Sometimes browser cache causes issues

4. **Check Cloudflare Pages deployment status**
   - Go to Deployments tab
   - Make sure the latest deployment shows "Success"

## Contact Support

If none of these solutions work:
1. Check Cloudflare Pages documentation
2. Review deployment logs carefully
3. Verify all files are in the `out/` directory after build

