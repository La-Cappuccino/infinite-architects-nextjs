# Infinite Architects — Design System

## Brand Colors

```css
/* Primary */
--color-green: #80AE50;          /* Primary accent - headings, links, borders */
--color-green-rgb: 128, 174, 80; /* For rgba() usage */

/* Backgrounds */
--color-black: #000000;          /* Main background */
--color-dark: #111111;           /* Cards, sections */

/* Text */
--color-white: #FFFFFF;          /* Primary text */
--color-white-70: rgba(255,255,255,0.7);  /* Body text */
--color-white-50: rgba(255,255,255,0.5);  /* Muted text */
--color-white-30: rgba(255,255,255,0.3);  /* Borders, subtle */

/* Borders */
--border-green: 1px solid rgba(128, 174, 80, 0.3);
--border-white: 1px solid rgba(255,255,255,0.2);
```

## Typography

### Font Family
```css
font-family: "neue-haas-grotesk-display", sans-serif;
```

**Adobe Fonts (Typekit) URL:** 
```html
<link rel="stylesheet" href="https://use.typekit.net/diu1zgo.css">
```
*(Kit ID: `diu1zgo` — from original site)*

### Font Weights
- **200** — Light (headings, large text)
- **300** — Book (subheadings, medium text)
- **400** — Regular (body text)

### Type Scale

| Element | Size | Weight | Letter-spacing | Color |
|---------|------|--------|----------------|-------|
| Hero Title | 6vw | 200 | 0.05em | White |
| Page Title | 3vw | 200 | 0.05em | White |
| Section Title | 28px | 300 | 0.02em | Green |
| Card Title | 18px | 300 | normal | White |
| Body Text | 14px | 300 | normal | White 70% |
| Small Text | 12-13px | 300 | normal | White 70% |
| Nav Links | 13px | 400 | 1.5px | White |
| Buttons | 13px | 400 | 2px | Green |

## Layout

### Container
```css
max-width: 90%;
margin: 0 auto;
```

### Grid Patterns
```css
/* 3-column (Portfolio, Team members) */
grid-template-columns: repeat(3, 1fr);
gap: 0; /* Portfolio - edge to edge */
gap: 20px; /* Team - with spacing */

/* 2-column (Founders, About) */
grid-template-columns: 1fr 1fr;
gap: 20px;
```

### Spacing
- **Section padding:** 80px vertical
- **Card padding:** 25-30px
- **Element margins:** 15-25px

## Components

### Cards (Value Cards)
```css
.value-card {
  border: 1px solid rgba(255,255,255,0.2);
  padding: 25px;
  background: transparent;
}

.value-card h3 {
  color: #80AE50;
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 15px;
}
```

### Buttons
```css
.btn-outline {
  padding: 15px 40px;
  border: 1px solid #80AE50;
  color: #80AE50;
  background: transparent;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.btn-outline:hover {
  background: #80AE50;
  color: #000;
}
```

### Portfolio Item
```css
.portfolio-item {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.portfolio-item img {
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.portfolio-item:hover img {
  filter: grayscale(0%);
}

.portfolio-item .overlay {
  position: absolute;
  top: 0; left: 0;
  padding: 15px;
}

.portfolio-item h3 {
  color: #fff;
  font-size: 15px;
  font-weight: 300;
}

.portfolio-item .category {
  color: #80AE50;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
```

### Team Member
```css
.team-member img {
  filter: grayscale(100%);
  aspect-ratio: 3/4;
  object-fit: cover;
  border: 1px solid rgba(128, 174, 80, 0.3);
}

.team-member h3 {
  color: #80AE50;
  font-size: 20px;
  font-weight: 300;
  margin: 20px 0 12px;
}
```

## Header
```css
.header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px 40px;
  background: #000;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  height: 70px;
}

.nav a {
  color: #fff;
  font-size: 13px;
  letter-spacing: 1.5px;
  margin-left: 35px;
}

.nav a.active,
.nav a:hover {
  color: #80AE50;
}
```

## Footer
```css
.footer {
  border-top: 2px solid #80AE50;
  padding: 20px 0;
  text-align: center;
}

.footer p {
  color: rgba(255,255,255,0.5);
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
}
```

## Effects

### Image Treatments
- **Grayscale:** `filter: grayscale(100%)`
- **Hover reveal:** `filter: grayscale(0%)` on hover
- **Transition:** `transition: filter 0.3s ease`

### Dividers
```css
/* Green accent line */
.divider {
  height: 5px;
  background: #80AE50;
  margin: 40px 0;
}
```

## Responsive Breakpoints

```css
/* Tablet */
@media (max-width: 1024px) {
  /* 3-col → 2-col */
  grid-template-columns: repeat(2, 1fr);
}

/* Mobile */
@media (max-width: 767px) {
  /* All grids → 1-col */
  grid-template-columns: 1fr;
  
  /* Reduce title sizes */
  font-size: 2rem; /* hero/page titles */
}
```

## Assets

### Logo
- **File:** `/images/infinite-logo.png`
- **Dimensions:** ~240px wide
- **Format:** PNG with transparency
- **Colors:** White text/lines on transparent

### Images
- **Portfolio:** 12 project images, various sizes
- **Team:** 5 photos (russell, helen, joshua, anoop, farha)
- **Awards:** 2 images (hotel-property-award-2022.png, sleep-competition.jpg)

All images stored in `/public/images/`
