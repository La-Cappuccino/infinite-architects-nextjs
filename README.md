# Infinite Architects — Website Rebuild Package

Next.js clone of [infinitedesigners.com](https://infinitedesigners.com), ready for WordPress conversion.

---

## 📁 What's Included

```
infinite-architects/
│
├── 📄 DESIGN-SYSTEM.md        # Colors, typography, spacing, components
├── 📄 WORDPRESS-CONVERSION.md # Full WordPress conversion guide
├── 📄 README.md               # This file
│
├── 📁 assets/
│   └── css/
│       └── infinite-architects.css  # WordPress-ready CSS (copy to theme)
│
├── 📁 content/
│   └── site-data.json         # All site content as structured JSON
│
├── 📁 public/images/          # All images from original site
│   ├── infinite-logo.png      # Main logo
│   ├── portfolio/             # 12 project images
│   ├── team/                  # 5 team photos
│   └── awards/                # 2 award images
│
└── 📁 src/                    # Next.js source (reference only)
    ├── app/                   # Page components
    ├── components/            # Header, Footer, Preloader
    └── lib/                   # Content data
```

---

## 🎨 Design System Summary

| Element | Value |
|---------|-------|
| **Primary Color** | `#80AE50` (green) |
| **Background** | `#000000` (black) |
| **Text** | `rgba(255,255,255,0.7)` |
| **Font** | Neue Haas Grotesk Display |
| **Font Weights** | 200 (light), 300 (book), 400 (regular) |

Full details in `DESIGN-SYSTEM.md`.

---

## 🔄 WordPress Conversion

Three options documented in `WORDPRESS-CONVERSION.md`:

1. **Custom Theme** — Full control, 2-3 weeks
2. **Page Builder** (Elementor/Bricks) — Faster, 1-2 weeks
3. **Headless** — Keep Next.js frontend, WP as CMS

### Quick Start (Custom Theme):

1. Create theme folder in `wp-content/themes/infinite-theme/`
2. Copy `assets/css/infinite-architects.css` to theme
3. Create Custom Post Types: Portfolio, Team
4. Build templates using code examples in conversion guide
5. Import content from `content/site-data.json`
6. Upload images from `public/images/`

---

## 🖼️ Images Included

### Logo
- `public/images/infinite-logo.png` (240×80px, white on transparent)

### Portfolio (12 projects)
- villa-emirates-hills.jpg
- modular-hotel-saudi.jpg
- villa-emirates-hills-2.jpg
- urban-hotel-dubai.jpg
- villa-district-one.jpg
- villa-nad-al-sheba.jpg
- villa-dubai-hills.jpg
- tamoka-restaurant.jpg
- villa-jumeirah-golf.jpg
- al-bahya-resort.jpg
- villa-refurbishment.jpg
- creek-park-hotel.jpg

### Team (5 members)
- russell.jpg (Founder)
- helen.jpg (Founder)
- joshua.jpg
- anoop.jpg
- farha.jpg

### Awards (2)
- hotel-property-award-2022.png
- sleep-competition.jpg

---

## 🚀 Run Locally (Next.js)

```bash
cd infinite-architects
npm install
npm run dev
# Opens at http://localhost:3000
```

---

## 📝 Content Data

All text content is in `content/site-data.json`:

- Site info (name, tagline, copyright)
- Contact details (phone, emails, address, socials)
- Navigation structure
- Homepage sections
- About page (values, founder bios)
- Portfolio projects (12 items)
- Team members (5 people)
- Awards (2 items)

Copy/paste directly into WordPress or use for import script.

---

## 🔧 Required WordPress Plugins

- **Custom Post Type UI** — Create Portfolio & Team post types
- **Advanced Custom Fields Pro** — Custom fields for projects/team
- **Yoast SEO** — Meta tags and SEO
- **WP Super Cache** — Performance

Optional:
- **Elementor Pro** — If using page builder approach
- **Contact Form 7** — Contact form (if needed)

---

## 📞 Support

Files prepared by Echo. Questions? Reach out.

---

*Last updated: February 2026*
