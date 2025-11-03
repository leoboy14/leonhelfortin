# Portfolio - Next.js with shadcn/ui

A modern, professional portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui** components. Inspired by professional developer portfolios with a clean, responsive design.

## Features

✨ **Modern Stack**
- Next.js 14 (App Router)
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui component library
- Lucide icons

🎨 **Professional Design**
- Clean, modern UI with smooth animations
- Fully responsive (mobile, tablet, desktop)
- Auto-rotating recommendations carousel
- Hover effects and transitions
- Optimized for performance

📦 **Component-Based Architecture**
- Reusable UI components from shadcn/ui
- Custom sections (Hero, About, Experience, etc.)
- Easy to customize and extend

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd portfolio-nextjs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization Guide

### 1. Personal Information

#### Hero Section (`components/Hero.tsx`)

Update your profile image, name, location, and call-to-action buttons:

```tsx
<Avatar className="h-32 w-32 border-4 border-border">
  <AvatarImage src="/your-image.jpg" alt="Your Name" />
  <AvatarFallback>YN</AvatarFallback>
</Avatar>

<Badge className="...">
  🏆 Your Achievement Here
</Badge>

<h1>Your Name</h1>
<p>Your Location</p>
```

#### Metadata (`app/layout.tsx`)

Update SEO metadata:

```tsx
export const metadata: Metadata = {
  title: "Your Name - Software Engineer",
  description: "Your custom description",
  // ...
}
```

### 2. About Section (`components/About.tsx`)

Edit the content to describe yourself:

```tsx
<p>
  I'm a passionate full-stack developer...
</p>
```

### 3. Experience Timeline (`components/Experience.tsx`)

Add/edit your work experience and education:

```tsx
const experiences = [
  {
    year: "2025 - Present",
    title: "Your Job Title",
    company: "Company Name",
    description: "What you do here...",
  },
  // Add more experiences
]
```

### 4. Tech Stack (`components/TechStack.tsx`)

Update your technologies:

```tsx
const techStack = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", ...],
  },
  // Add more categories
]
```

### 5. Projects (`components/Projects.tsx`)

Showcase your projects:

```tsx
const projects = [
  {
    title: "Project Name",
    description: "Project description...",
    technologies: ["React", "Node.js", ...],
  },
  // Add more projects
]
```

### 6. Certifications (`components/Certifications.tsx`)

List your certifications:

```tsx
const certifications = [
  {
    name: "Certification Name",
    issuer: "Issuing Organization",
  },
  // Add more certifications
]
```

### 7. Recommendations (`components/Recommendations.tsx`)

Add testimonials:

```tsx
const recommendations = [
  {
    text: "Testimonial text...",
    name: "Person Name",
    title: "Their Title",
  },
  // Add more recommendations
]
```

### 8. Footer/Social Links (`components/Footer.tsx`)

Update your social media links:

```tsx
<a href="https://linkedin.com/in/yourprofile">
  <Linkedin className="h-6 w-6" />
</a>
```

## Adding Your Images

1. Place your images in the `public` folder
2. Reference them in your components:
   ```tsx
   <AvatarImage src="/profile.jpg" alt="Your Name" />
   ```

## Customizing Colors

The color scheme uses Tailwind CSS with shadcn/ui's theming system. To customize colors, edit `app/globals.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;  /* Blue */
  --secondary: 210 40% 96.1%;     /* Light gray */
  /* Add more custom colors */
}
```

Or use shadcn's theme generator: [ui.shadcn.com/themes](https://ui.shadcn.com/themes)

## Adding More shadcn/ui Components

If you need additional shadcn/ui components:

```bash
npx shadcn-ui@latest add [component-name]
```

For example:
```bash
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add accordion
```

View all available components: [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)

## Building for Production

```bash
npm run build
npm run start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

## Project Structure

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── separator.tsx
│   ├── About.tsx           # About section
│   ├── Certifications.tsx  # Certifications section
│   ├── Experience.tsx      # Experience timeline
│   ├── Footer.tsx          # Footer with social links
│   ├── Hero.tsx            # Hero/header section
│   ├── Projects.tsx        # Projects showcase
│   ├── Recommendations.tsx # Recommendations carousel
│   └── TechStack.tsx       # Tech stack grid
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── components.json         # shadcn/ui configuration
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## Tech Stack Details

- **Framework:** Next.js 14 (App Router, React Server Components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Icons:** Lucide React
- **Fonts:** Inter (Google Fonts)

## Performance Optimizations

✅ Server-side rendering (SSR)
✅ Automatic code splitting
✅ Optimized images with Next.js Image
✅ CSS-in-JS with zero runtime overhead
✅ Tree-shakeable icon library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tips for Best Results

1. **Images**: Use WebP format for better performance
2. **Content**: Keep descriptions concise and impactful
3. **SEO**: Update metadata in `app/layout.tsx`
4. **Analytics**: Add Google Analytics or Vercel Analytics
5. **Performance**: Run Lighthouse audits regularly

## Troubleshooting

### Port already in use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Build errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Type errors
```bash
# Check TypeScript errors
npx tsc --noEmit
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

This template is free to use for personal and commercial projects.

---

**Built with ❤️ using Next.js and shadcn/ui**
