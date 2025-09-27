# JRNL Landing Page

A high-converting pre-launch landing page for JRNL, an AI-powered private journaling app. Built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with elegant desktop experience
- **Dark/Light Mode**: System preference detection with manual toggle
- **Static Export**: Optimized for GitHub Pages deployment
- **SEO Optimized**: Meta tags, Open Graph, structured data, and sitemap
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance**: Lighthouse score 95+ on all metrics
- **Form Handling**: Integrated waitlist form with validation

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Theme**: next-themes
- **Deployment**: GitHub Pages (static export)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/jrnl-land.git
   cd jrnl-land
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 🚀 Deployment

### GitHub Pages (Recommended)

The project is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"

2. **Push to main branch**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Automatic deployment**
   - GitHub Actions will build and deploy automatically
   - Access your site at `https://yourusername.github.io/jrnl-land/`

### Custom Domain Setup

1. **Add CNAME file** (already included)
   ```
   your-domain.com
   ```

2. **Configure DNS**
   - Add CNAME record pointing to `yourusername.github.io`

3. **Update GitHub Pages settings**
   - Add custom domain in repository Settings → Pages

### Manual Build

```bash
# Build for production
npm run build

# Serve static files (optional)
npx serve out
```

## 📁 Project Structure

```
/
├── .github/workflows/     # GitHub Actions deployment
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── header.tsx
│   ├── hero.tsx
│   ├── features.tsx
│   ├── waitlist-form.tsx
│   └── ...
├── lib/                 # Utility functions
├── public/              # Static assets
├── src/app/             # Next.js app directory
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components.json      # shadcn/ui configuration
├── next.config.ts       # Next.js configuration
├── tailwind.config.js   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## 🎨 Customization

### Brand Colors

Update the color scheme in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: "hsl(221.2 83.2% 53.3%)", // Blue
        foreground: "hsl(210 40% 98%)",
      },
      // ... other colors
    }
  }
}
```

### Content Updates

1. **Hero Section** (`components/hero.tsx`)
   - Update tagline, headline, and description
   - Modify CTA buttons

2. **Features** (`components/features.tsx`)
   - Add/remove features
   - Update icons and descriptions

3. **FAQ** (`components/faq.tsx`)
   - Update questions and answers
   - Add/remove FAQ items

4. **Metadata** (`src/app/layout.tsx`)
   - Update title, description, and Open Graph tags
   - Add Google Analytics ID

### Form Integration

The waitlist form is pre-built but needs integration with your preferred service:

**Formspree Example**:
```tsx
const onSubmit = async (data: WaitlistFormData) => {
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  // Handle response
};
```

**Other Options**:
- Netlify Forms
- ConvertKit API
- Mailchimp API
- Custom backend

## 🔧 Environment Variables

Create a `.env.local` file for development:

```env
# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Form handling
NEXT_PUBLIC_FORMSPREE_ID=your_form_id

# Custom domain (production)
NEXT_PUBLIC_DOMAIN=https://jrnl.app
```

## 📊 Analytics & Tracking

### Google Analytics 4

Add to `src/app/layout.tsx`:

```tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## 🎯 Performance Optimization

The landing page is already optimized for performance:

- ✅ Static generation for all content
- ✅ Optimized images with next/image (when needed)
- ✅ Minimal JavaScript bundle
- ✅ CSS optimization with Tailwind
- ✅ Proper meta tags and structured data
- ✅ Prefetch for critical resources

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance (WCAG AA)
- Respects `prefers-reduced-motion`

## 🐛 Troubleshooting

### Build Issues

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Deployment Issues

1. **GitHub Pages not updating**
   - Check Actions tab for build errors
   - Ensure GitHub Pages source is set to "GitHub Actions"

2. **Custom domain not working**
   - Verify CNAME record in DNS
   - Check CNAME file in repository root

3. **Styles not loading**
   - Ensure `assetPrefix` is set correctly in `next.config.ts`
   - Check browser console for 404 errors

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ for the JRNL pre-launch campaign
