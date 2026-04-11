# High-Performance Scrollytelling Portfolio

A visually immersive, high-performance professional portfolio built with **Next.js 14**, **Framer Motion**, and **HTML5 Canvas**. This project features a seamless scroll-linked image sequence (scrollytelling) engine, cinematic glassmorphism UI, and a unified **Neon Blue** technical aesthetic.

## 🚀 Key Features

- **Custom Scrollytelling Engine**: Optimized HTML5 Canvas renderer that scrubs through a sequence of 120+ high-resolution frames with zero scroll lag.
- **Dynamic UI Overlays**: Parallax text stacks and glassmorphism project cards that respond to the scroll position.
- **Neon Blue Theme**: A consistent, premium technical aesthetic applied across all components, from buttons to ambient background "glows."
- **Interactive Experience**: 
  - **Spring-Loaded Cursor**: A custom glowing light-trail that follows the mouse with organic, inertia-based movement.
  - **Social Sidebar**: A "stealth" vertical bar that transforms into a glowing solid pill on hover.
  - **Adaptive Navbar**: A glassmorphism header that transitions from transparency to a frosted blur effect upon scrolling.
- **Unified Components**: Dedicated sections for Career Experience, Supply Chain Projects, Technical Skills (Marquee), and Industry Certifications.

## 🛠️ Technology Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Graphics**: HTML5 Canvas & [Three.js](https://threejs.org/) (for physics-based clusters)
- **Styling**: Tailwind CSS
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) & [Lucide React](https://lucide.dev/)
- **Components**: [React Fast Marquee](https://www.react-fast-marquee.com/)

## 📂 Project Structure

```bash
/src
  /app
    page.tsx            # Main assembly (Navbar, Socials, Canvas)
    layout.tsx          # Font loading & global SEO
  /components
    ScrollyCanvas.tsx   # Core image sequence engine
    Navbar.tsx          # Global adaptive navigation
    SocialSidebar.tsx   # Floating interactive socials
    CustomCursor.tsx    # Spring-based cursor trail
    Overlay.tsx         # hero text & scroll parallax
    Experience.tsx      # Interactive career timeline
    Projects.tsx        # Glassmorphism project grid
    Skills.tsx          # Infinite logo marquee
    Certifications.tsx  # Animated carousel with status badges
/public
  /sequence             # PNG sequence for scrollytelling
```

## ⚙️ Getting Started

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Assets Configuration
Place your image sequence inside `public/sequence/`. The `ScrollyCanvas` component expects files named sequentially (e.g., `0001.webp`, `0002.webp`, etc.).
Update the `FRAME_COUNT` in `src/components/ScrollyCanvas.tsx` to match your sequence length.

### 3. Run Development Server
```bash
npm run dev
```

## 💡 GitHub Strategy: Why this project?

This repository serves as more than just a portfolio—it is a showcase of **frontend engineering excellence**. 

**Why you should feature this as a primary project:**
1. **Performance Mastery**: Shows you understand how to handle heavy asset sequences using Canvas instead of DOM elements, maintaining 60FPS.
2. **Design Sophistication**: Demonstrates an eye for high-end "Awwwards-style" aesthetics, including custom cursors and glassmorphism.
3. **Architecture**: Clean, componentized React logic with advanced state management for scroll progress.

---
Developed by **Aaradhya Gole**
