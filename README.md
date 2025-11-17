# EPIOW - The Future of Intelligent Systems

<div align="center">

![EPIOW](https://img.shields.io/badge/EPIOW-The%20Future%20of%20AI-a855f7?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnoiIGZpbGw9IiNhODU1ZjciLz48L3N2Zz4=)
![Build Status](https://img.shields.io/badge/build-passing-06b6d4?style=for-the-badge)
![License](https://img.shields.io/badge/license-proprietary-ec4899?style=for-the-badge)

**Next-generation AI solutions for enterprise**

[Website](https://eipox.com) • [GitHub](https://github.com/EpiowAI) • [Contact](mailto:contact@eipox.com)

</div>

---

## 🧠 About

**Epiow Limited** architects next-generation AI solutions that transform businesses into autonomous, intelligent enterprises. Based in the United Kingdom, we specialize in cutting-edge AI application development with a focus on neural systems, edge computing, and enterprise-grade infrastructure.

### 🎯 Our Vision

We're building the future of intelligent systems - where AI isn't just a tool, but a fundamental transformation of how businesses operate, adapt, and evolve.

---

## 🌟 Core Capabilities

| Capability | Description |
|------------|-------------|
| **🚀 Autonomous Intelligence** | Self-learning systems that adapt, evolve, and optimize without human intervention |
| **🔮 Neural Architecture** | Advanced deep learning models built on transformer architectures |
| **💡 Cognitive Computing** | AI systems that understand context, reasoning, and complex decision-making |
| **🌐 Distributed AI** | Edge-to-cloud AI infrastructure for global-scale deployments |

---

## 🛠️ Enterprise Solutions

- **Neural AI Systems** - Deep learning architectures with transformer models and reinforcement learning
- **Edge AI Computing** - Ultra-low latency processing with on-device ML and distributed intelligence
- **Conversational AI** - Next-gen NLP with multi-modal chat and sentiment analysis
- **Computer Vision** - Advanced visual AI for object detection and scene understanding
- **Predictive Analytics** - AI-powered forecasting with anomaly detection
- **AI Infrastructure** - Scalable MLOps pipelines and auto-scaling model serving

---

## 💻 Website Tech Stack

<div align="center">

| Category | Technology |
|----------|-----------|
| **Framework** | ![SolidJS](https://img.shields.io/badge/SolidJS-2C4F7C?style=flat-square&logo=solid&logoColor=white) |
| **Runtime** | ![Bun](https://img.shields.io/badge/Bun-000000?style=flat-square&logo=bun&logoColor=white) |
| **Styling** | ![PandaCSS](https://img.shields.io/badge/PandaCSS-FCD34D?style=flat-square) |
| **Code Quality** | ![Biome](https://img.shields.io/badge/Biome-60A5FA?style=flat-square) |
| **Deployment** | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) |
| **Language** | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) |

</div>

### 🎨 Design System

- **Cyber Purple** (#a855f7) - Primary brand color
- **Electric Cyan** (#06b6d4) - Accent color
- **Neon Pink** (#ec4899) - Highlight color
- **Deep Space** (#050507, #0a0a0f) - Dark backgrounds
- **Glass-morphism** - Backdrop blur effects throughout
- **Custom Animations** - Glow, float, and pulse effects

---

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh) >= 1.0

### Installation

```bash
# Clone the repository
git clone https://github.com/EpiowAI/website.git
cd website

# Install dependencies
bun install

# Start development server
bun run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 📋 Available Commands

```bash
# Development
bun run dev          # Start dev server with hot reload
bun run preview      # Preview production build locally

# Build & Production
bun run build        # Build for production
bun run prepare      # Generate PandaCSS styled-system

# Code Quality
bun run format       # Format code with Biome
bun run lint         # Lint and auto-fix with Biome
bun run check        # Check code without fixing
```

---

## 🎯 SEO & Performance

✅ **Perfect SEO Implementation**
- Meta tags (title, description, keywords)
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Schema.org structured data (Organization)
- Sitemap.xml with all pages
- Robots.txt configuration
- Canonical URLs
- Semantic HTML5

✅ **Performance Optimized**
- 99.9% uptime guarantee
- <100ms response time
- 24/7 AI monitoring
- Edge deployment via Vercel
- Optimized asset loading
- Responsive images

---

## 📁 Project Structure

```
epiow/
├── src/
│   ├── components/          # React-like components
│   │   ├── Hero.tsx        # Landing section with animations
│   │   ├── Vision.tsx      # Core capabilities showcase
│   │   ├── Services.tsx    # Enterprise solutions grid
│   │   ├── Technology.tsx  # Tech stack display
│   │   ├── Contact.tsx     # Contact section
│   │   └── Footer.tsx      # Site footer
│   ├── App.tsx             # Main app component
│   └── index.tsx           # Entry point
├── public/
│   ├── favicon.svg         # Cyber-themed brand icon
│   ├── og-image.svg        # Social media preview
│   ├── sitemap.xml         # SEO sitemap
│   └── robots.txt          # Crawler configuration
├── styled-system/          # Generated PandaCSS (gitignored)
├── panda.config.ts         # PandaCSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite bundler config
```

---

## 🌐 Deployment

This site automatically deploys to Vercel on every push to `main`.

### Manual Deployment

```bash
# Deploy to production
bunx vercel --prod

# Preview deployment
bunx vercel
```

### Environment Setup

No environment variables required for basic deployment. The site is fully static.

---

## 🎨 Customization

### Update Brand Colors

Edit `panda.config.ts`:

```typescript
colors: {
  brand: {
    primary: { value: "#a855f7" },  // Your primary color
    cyan: { value: "#06b6d4" },     // Your accent color
    pink: { value: "#ec4899" },     // Your highlight color
  }
}
```

### Update Content

- **Hero Section**: Edit `src/components/Hero.tsx`
- **Capabilities**: Edit `src/components/Vision.tsx`
- **Solutions**: Edit `src/components/Services.tsx`
- **Technology Stack**: Edit `src/components/Technology.tsx`
- **Contact Info**: Edit `src/components/Contact.tsx`

---

## 📊 Analytics & Monitoring

The site includes:
- Schema.org structured data for rich search results
- Open Graph tags for social media previews
- Twitter Card support
- Semantic HTML for accessibility
- SEO-optimized metadata

---

## 🤝 Contributing

This is a private repository for Epiow Limited. Internal contributions follow our standard git workflow:

1. Create feature branch: `git checkout -b feat/your-feature`
2. Commit changes: `git commit -m "feat: add feature"`
3. Push to branch: `git push origin feat/your-feature`
4. Open pull request for review

---

## 📄 License

**Copyright © 2025 Epiow Limited. All rights reserved.**

This is proprietary software. Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited.

---

## 🔗 Connect With Us

<div align="center">

[![Website](https://img.shields.io/badge/Website-eipox.com-a855f7?style=for-the-badge&logo=google-chrome&logoColor=white)](https://eipox.com)
[![GitHub](https://img.shields.io/badge/GitHub-EpiowAI-06b6d4?style=for-the-badge&logo=github&logoColor=white)](https://github.com/EpiowAI)
[![Email](https://img.shields.io/badge/Email-contact@eipox.com-ec4899?style=for-the-badge&logo=gmail&logoColor=white)](mailto:contact@eipox.com)

**Building the Future of Intelligent Systems** 🚀

</div>

---

<div align="center">
  <sub>Built with ❤️ by the Epiow team in the United Kingdom</sub>
</div>
