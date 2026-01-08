# The Insurance Guardian.com - Next.js Version

This is the modern Next.js version of the The Insurance Guardian.com website, built with TypeScript and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

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
npm start
```

## Project Structure

```
├── app/              # Next.js App Router pages
│   ├── page.tsx      # Homepage
│   ├── layout.tsx    # Root layout
│   └── globals.css   # Global styles
├── components/       # React components
│   ├── Header.tsx    # Navigation header
│   ├── Footer.tsx    # Footer component
│   └── QuoteForm.tsx # Quote form with validation
├── public/           # Static assets
└── images/           # Image assets (from original project)
```

## Features

- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Responsive design
- ✅ Form validation
- ✅ SEO optimized
- ✅ Modern React patterns
- ✅ Server-side rendering (SSR)

## Migration Status

- ✅ Project setup
- ✅ Homepage migrated
- ✅ Components created (Header, Footer, QuoteForm)
- ⏳ Pages migration (FAQ, Terms, Privacy, Blog) - In progress
- ⏳ Image optimization
- ⏳ Additional features

## Next Steps

1. Migrate remaining pages (FAQ, Terms, Privacy, Blog)
2. Add image optimization
3. Set up environment variables
4. Deploy to Vercel

## Notes

- Original static HTML files are preserved in the root directory
- Images directory structure maintained
- All functionality preserved with modern React patterns

