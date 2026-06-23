# Blockforge - Dark SaaS Blockchain Site

A modern web platform built with Astro and React, showcasing blockchain capabilities. Dark palette with fuchsia accents creates a futuristic, tech-forward aesthetic.

## Tech Stack

- **Framework**: [Astro 7.0.2](https://astro.build/)
- **Frontend**: [React 19.2.0](https://reactjs.org/)
- **Styling**: [Tailwind CSS 4.1.14](https://tailwindcss.com/)
- **Animations**: [Framer Motion 11.18.2](https://www.framer.com/motion/)
- **Language**: [TypeScript 5.9.3](https://www.typescriptlang.org/)
- **Deployment**: [Netlify](https://www.netlify.com/)

## Features

- Responsive dark theme interface
- Interactive animations with Framer Motion
- Integrated blog with 10+ articles on blockchain and tech
- Careers portal with 4+ job positions
- Feature carousel with auto-rotation
- Testimonials section
- Optimized CTAs

## Installation

```bash
git clone https://github.com/Lostovayne/Dark-SaaS-Blockchain-Site.git
cd dark-saas-blockchain-site
npm install
npm run dev
```

Open browser at `http://localhost:4321`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run preview` - Preview production build
- `npm run check` - Run Astro Check

## Project Structure

```
src/
├── components/      # Reusable UI components
├── content/         # Markdown content (blog, positions)
├── layouts/         # Astro layouts
├── pages/           # Route pages
├── sections/        # Page sections (Hero, Features, etc.)
└── utils/           # Utility functions
```

## Performance

- **Lazy Loading**: React components use `client:visible` for deferred hydration
- **Code Splitting**: Framer-motion and React in separate chunks
- **Image Optimization**: WebP/AVIF formats (85-94% size reduction)
- **CDN Caching**: Netlify edge cache

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with Astro + React + Tailwind CSS
