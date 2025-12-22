# OptimumSeniors.com - Auto Insurance Website

A modern Next.js website for auto insurance lead generation, built with TypeScript and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Cloudflare Pages

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates a static export in the `out/` directory, ready for Cloudflare Pages deployment.

## Project Structure

```
├── app/              # Next.js App Router pages
│   ├── page.tsx      # Homepage
│   ├── layout.tsx    # Root layout
│   ├── faq/          # FAQ page
│   └── blog/         # Blog pages
├── components/       # React components
│   ├── Header.tsx    # Navigation header
│   ├── Footer.tsx    # Footer component
│   ├── PartnerLogo.tsx # Partner logo component
│   └── FAQAccordion.tsx # FAQ accordion component
├── public/           # Static assets
│   ├── images/       # Images
│   └── logo.png      # Site logo
└── out/              # Build output (generated)
```

## Deployment

### Deploy to Cloudflare Pages

1. Push your code to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
3. Click "Create a project" → "Connect to Git"
4. Select your GitHub repository
5. Configure build settings:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (leave empty)
6. Click "Save and Deploy"

See [DEPLOY_CLOUDFLARE.md](./DEPLOY_CLOUDFLARE.md) for detailed deployment instructions.

## Features

- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Static site generation
- ✅ FAQ page with accordion
- ✅ Blog with multiple posts
- ✅ Partner logos section

## License

Private project for OptimumSeniors.com

