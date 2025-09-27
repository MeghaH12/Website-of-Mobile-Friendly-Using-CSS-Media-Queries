# 🌐 Mobile-Friendly Website Using CSS Media Queries

> 📱 A practical and attractive starter project for building **responsive websites** using **CSS media queries** that look great on mobile, tablet, and desktop.

## 📑 Table of Contents
1. [✨ Project Overview](#-project-overview)
2. [🎯 Features](#-features)
3. [📸 Demo / Screenshots](#-demo--screenshots)
4. [⚡ Getting Started](#-getting-started)

   * Prerequisites
   * Installation
   * Running locally
5. [📂 Project Structure](#-project-structure)
6. [🧩 How It Works — Key Concepts](#-how-it-works---key-concepts)

   * Viewport meta tag
   * Flexible layouts
   * Responsive images
   * CSS Media Queries
   * Mobile-first approach
7. [💻 Example Media Queries](#-example-media-queries)
8. [♿ Accessibility & Performance](#-accessibility--performance)
9. [🛠️ Testing & Debugging](#-testing--debugging)
10. [🎨 Customization](#-customization)
11. [⚠️ Common Pitfalls & Tips](#️-common-pitfalls--tips)
12. [🤝 Contributing](#-contributing)
13. [📜 License](#-license)
14. [🙏 Acknowledgements](#-acknowledgements)

## ✨ Project Overview
This project shows how to build a **modern mobile-friendly website** using **CSS media queries**. It adapts smoothly to different screen sizes, ensuring an optimized experience whether you’re on a phone, tablet, or desktop.

We use a **mobile-first** design philosophy with clean, reusable CSS and simple layouts powered by **Flexbox** and **CSS Grid**.

## 🎯 Features

* 📱 **Mobile-first design** with progressive enhancements
* 📐 **Responsive breakpoints** for common devices
* 🎨 **Fluid layouts** with Grid & Flexbox
* 🔤 **Responsive typography** with `clamp()`
* 🖼️ **Responsive images** using `srcset`, `sizes`, and `object-fit`
* ♿ **Accessible navigation** & semantic HTML
* ⚡ **Fast performance** with lazy loading & minified assets
* 🌈 **Clean UI components**: header, hero, features, cards, footer

## 📸 Demo / Screenshots
Add screenshots of different devices in `assets/screenshots/`:

* Mobile → `assets/screenshots/mobile.png`
* Tablet → `assets/screenshots/tablet.png`
* Desktop → `assets/screenshots/desktop.png`

👉 If deployed, share your **Live Demo link here**.

---

## ⚡ Getting Started

### Prerequisites
* Modern browser (Chrome, Firefox, Safari, Edge)
* Node.js + npm (optional, for dev server)

### Installation
```bash
git clone https://github.com/<your-username>/mobile-friendly-css-media-queries.git
cd mobile-friendly-css-media-queries
```

Install dependencies (optional):

```bash
npm install
```

### Running locally
```bash
npx http-server .
# or
npx live-server
```

Then open 👉 `http://localhost:8080`

## 📂 Project Structure
/ (project root)
├─ index.html            # Landing page
├─ css/
│  ├─ base.css           # Resets, variables, typography
│  ├─ layout.css         # Layout utilities
│  ├─ components.css     # UI components
│  └─ responsive.css     # Media queries
├─ js/
│  └─ main.js            # Basic interactivity
├─ assets/
│  ├─ images/            # Demo images
│  └─ screenshots/       # Screenshots
└─ README.md             # This file
```

---

## 🧩 How It Works — Key Concepts

### 📏 Viewport meta tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### 📐 Flexible layouts
Use **Grid** & **Flexbox** for responsive containers:

```css
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
```

### 🖼️ Responsive images
```css
img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
```

### 🎛️ Media Queries
* `@media (min-width: 600px)` → tablets
* `@media (min-width: 900px)` → small laptops
* `@media (min-width: 1200px)` → desktops

### 📱 Mobile-first approach
Base styles = mobile → then enhance with `min-width` queries.

## 💻 Example Media Queries
```css
/* Base (mobile) */
body { font-size: 16px; }

/* Tablet */
@media (min-width: 600px) {
  body { font-size: 17px; }
  .nav { display: flex; }
}

/* Laptop */
@media (min-width: 900px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop */
@media (min-width: 1200px) {
  body { font-size: 18px; }
  .grid { grid-template-columns: repeat(3, 1fr); }
}

## ♿ Accessibility & Performance
* ✅ Semantic HTML (`<nav>`, `<main>`, `<footer>`)
* 🎯 Focus styles & skip links
* 🌗 Color contrast compliance (WCAG)
* 🖼️ Lazy-load images with `loading="lazy"`
* ⚡ Minify CSS/JS & enable gzip/Brotli compression

## 🛠️ Testing & Debugging
* 🧪 Test in Chrome DevTools responsive mode
* 📊 Run **Lighthouse** audits (Performance, Accessibility)
* 🔄 Test orientation changes (portrait ↔ landscape)
* 🖥️ Validate HTML & CSS

## 🎨 Customization
* Change breakpoints as needed
* Use CSS variables for spacing/colors
* Add custom themes or dark mode

## ⚠️ Common Pitfalls & Tips
* ❌ Don’t design for a single device → design for **content**
* ⚠️ Avoid fixed pixel widths
* 🖼️ Optimize background images for mobile
* 🔤 Use `rem` for scalable typography

## 🤝 Contributing
1. Fork repo
2. Create feature branch
3. Commit changes
4. Push & open PR
 
## 📜 License
Licensed under **MIT** — free to use and modify.

## Acknowledgements

Thanks to the CSS community & modern browser devtools that make responsive design easier. 🚀
