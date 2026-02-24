# WordPress Conversion Guide — Infinite Architects

This guide shows how to convert this Next.js site to WordPress.

---

## Original Site Stack (from wpdev export)

| Component | Value |
|-----------|-------|
| **Theme** | Hello Elementor Child |
| **Page Builder** | Elementor Pro |
| **Preloader** | Preloader Plus plugin |
| **Cache** | SiteGround Optimizer |
| **SEO** | Yoast SEO |
| **Fonts** | Adobe Typekit (`diu1zgo`) |

### Original Assets
- **Logo:** `infinite-Logo-NEW-WHITE-Transparent-500px-min.png`
- **Animated Logo:** `Infinite-Logo-Animate-2-min-loop1.gif` (preloader)
- **Social:** Facebook (@InfiniteDXB), Instagram (@infinitedubai), LinkedIn

---

## Option 1: Custom Theme (Recommended)

Build a custom WordPress theme that matches the design exactly.

### Step 1: Create Theme Structure

```
infinite-theme/
├── style.css           # Theme info + main styles
├── functions.php       # Theme setup, enqueues
├── index.php           # Fallback template
├── front-page.php      # Homepage
├── page-about.php      # About page template
├── page-portfolio.php  # Portfolio archive
├── page-team.php       # Team page template
├── page-media-room.php # Media room template
├── page-contact.php    # Contact page template
├── single-portfolio.php # Single project (optional)
├── header.php          # Site header
├── footer.php          # Site footer
├── assets/
│   ├── css/
│   │   └── main.css    # Compiled styles
│   ├── js/
│   │   └── main.js     # Scripts
│   └── images/         # Theme images (logo, etc.)
└── inc/
    ├── customizer.php  # Theme customizer options
    └── post-types.php  # Custom post types
```

### Step 2: style.css (Theme Header)

```css
/*
Theme Name: Infinite Architects
Theme URI: https://infinitedesigners.com
Description: Custom theme for Infinite Architects
Version: 1.0.0
Author: Your Name
Text Domain: infinite
*/

/* Import design system styles */
@import url('assets/css/main.css');
```

### Step 3: functions.php

```php
<?php
/**
 * Infinite Architects Theme Functions
 */

// Theme setup
function infinite_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo', array(
        'height'      => 70,
        'width'       => 240,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    
    // Navigation menu
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'infinite'),
    ));
}
add_action('after_setup_theme', 'infinite_setup');

// Enqueue styles and scripts
function infinite_scripts() {
    // Adobe Fonts (Neue Haas Grotesk) — Kit ID from original site
    wp_enqueue_style('adobe-fonts', 'https://use.typekit.net/diu1zgo.css');
    
    // Main stylesheet
    wp_enqueue_style('infinite-style', get_stylesheet_uri());
    wp_enqueue_style('infinite-main', get_template_directory_uri() . '/assets/css/main.css');
    
    // Scripts
    wp_enqueue_script('infinite-main', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'infinite_scripts');

// Register Portfolio Custom Post Type
function infinite_register_portfolio() {
    register_post_type('portfolio', array(
        'labels' => array(
            'name'          => 'Portfolio',
            'singular_name' => 'Project',
            'add_new_item'  => 'Add New Project',
            'edit_item'     => 'Edit Project',
        ),
        'public'       => true,
        'has_archive'  => true,
        'rewrite'      => array('slug' => 'portfolio'),
        'supports'     => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon'    => 'dashicons-portfolio',
        'show_in_rest' => true,
    ));
    
    // Portfolio Categories
    register_taxonomy('project_category', 'portfolio', array(
        'labels' => array(
            'name' => 'Project Categories',
            'singular_name' => 'Category',
        ),
        'hierarchical' => true,
        'rewrite' => array('slug' => 'project-type'),
        'show_in_rest' => true,
    ));
}
add_action('init', 'infinite_register_portfolio');

// Register Team Custom Post Type
function infinite_register_team() {
    register_post_type('team', array(
        'labels' => array(
            'name'          => 'Team',
            'singular_name' => 'Team Member',
        ),
        'public'       => true,
        'has_archive'  => false,
        'supports'     => array('title', 'editor', 'thumbnail'),
        'menu_icon'    => 'dashicons-groups',
        'show_in_rest' => true,
    ));
}
add_action('init', 'infinite_register_team');

// Add ACF fields (if using Advanced Custom Fields)
// Team: position, is_founder
// Portfolio: project_location, project_date, client
// Awards: award_year, project_name, links
```

### Step 4: header.php

```php
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="header-inner">
        <?php if (has_custom_logo()): ?>
            <?php the_custom_logo(); ?>
        <?php else: ?>
            <a href="<?php echo home_url(); ?>" class="logo">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/infinite-logo.png" alt="Infinite Architects">
            </a>
        <?php endif; ?>
        
        <nav class="main-nav">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container'      => false,
                'menu_class'     => 'nav-menu',
            ));
            ?>
        </nav>
    </div>
</header>
```

### Step 5: footer.php

```php
<footer class="site-footer">
    <div class="footer-inner">
        <p>&copy; INFINITE ARCHITECTS <?php echo date('Y'); ?>. ALL RIGHTS RESERVED.</p>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
```

### Step 6: front-page.php (Homepage)

```php
<?php get_header(); ?>

<!-- Preloader -->
<div id="preloader">
    <div class="preloader-inner">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/infinite-logo.png" alt="">
        <div class="progress-bar"><div class="progress-fill"></div></div>
    </div>
</div>

<!-- Hero Section -->
<section class="hero">
    <video autoplay muted loop playsinline class="hero-video">
        <source src="<?php echo get_template_directory_uri(); ?>/assets/video/hero.mp4" type="video/mp4">
    </video>
    <div class="hero-overlay">
        <h1 class="hero-title">Infinite</h1>
        <p class="hero-subtitle">Architecture | Interior Design | Urban Planning</p>
    </div>
</section>

<!-- Values Section -->
<section class="values-section">
    <div class="values-grid">
        <?php
        // Use ACF Repeater or hard-code
        $values = array(
            array('title' => 'we are', 'text' => '...'),
            array('title' => 'we believe', 'text' => '...'),
            array('title' => 'we work', 'text' => '...'),
        );
        foreach ($values as $value): ?>
            <div class="value-card">
                <h3><?php echo esc_html($value['title']); ?></h3>
                <p><?php echo esc_html($value['text']); ?></p>
            </div>
        <?php endforeach; ?>
    </div>
</section>

<?php get_footer(); ?>
```

### Step 7: page-portfolio.php

```php
<?php
/* Template Name: Portfolio */
get_header();
?>

<section class="portfolio-page">
    <div class="portfolio-grid">
        <?php
        $projects = new WP_Query(array(
            'post_type'      => 'portfolio',
            'posts_per_page' => -1,
            'orderby'        => 'menu_order',
            'order'          => 'ASC',
        ));
        
        while ($projects->have_posts()): $projects->the_post();
            $category = get_the_terms(get_the_ID(), 'project_category');
            $cat_name = $category ? $category[0]->name : '';
        ?>
            <article class="portfolio-item">
                <a href="<?php the_permalink(); ?>">
                    <?php if (has_post_thumbnail()): ?>
                        <?php the_post_thumbnail('large'); ?>
                    <?php endif; ?>
                    <div class="portfolio-overlay">
                        <h3><?php the_title(); ?></h3>
                        <span class="category"><?php echo esc_html($cat_name); ?></span>
                    </div>
                </a>
            </article>
        <?php endwhile; wp_reset_postdata(); ?>
    </div>
</section>

<?php get_footer(); ?>
```

---

## Option 2: Page Builder (Faster)

Use **Elementor Pro** or **Bricks Builder** with custom CSS.

### Recommended Plugins:
1. **Elementor Pro** — visual builder
2. **Advanced Custom Fields Pro** — custom fields for portfolio/team
3. **Custom Post Type UI** — create portfolio/team post types
4. **WP Migrate DB Pro** — for staging/production sync

### Steps:
1. Install starter theme (Hello Elementor or Bricks)
2. Create custom post types (Portfolio, Team)
3. Build each page in Elementor using sections/columns
4. Add custom CSS from DESIGN-SYSTEM.md
5. Create templates for portfolio archive and single

### Custom CSS to Add (Appearance > Customize > Additional CSS):

```css
/* Paste contents of assets/css/main.css */

/* Or key overrides: */
body {
    background: #000;
    font-family: "neue-haas-grotesk-display", sans-serif;
    color: rgba(255,255,255,0.7);
}

.elementor-heading-title {
    color: #80AE50;
}

/* Portfolio grid */
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
}

.portfolio-grid img {
    filter: grayscale(100%);
    transition: filter 0.3s ease;
}

.portfolio-grid a:hover img {
    filter: grayscale(0%);
}
```

---

## Option 3: Headless WordPress + Next.js

Keep Next.js frontend, use WordPress as CMS only.

### Setup:
1. Install WordPress with **WPGraphQL** plugin
2. Create custom post types (Portfolio, Team)
3. Update Next.js to fetch from WordPress API
4. Deploy Next.js to Vercel, WordPress to hosting

### Example fetch in Next.js:

```typescript
// lib/wordpress.ts
const WP_URL = 'https://your-wp-site.com/graphql';

export async function getProjects() {
    const res = await fetch(WP_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                query {
                    portfolios(first: 100) {
                        nodes {
                            title
                            slug
                            featuredImage { node { sourceUrl } }
                            projectCategories { nodes { name } }
                        }
                    }
                }
            `
        })
    });
    const { data } = await res.json();
    return data.portfolios.nodes;
}
```

---

## Data Import Checklist

### Content to Import:
- [ ] 12 Portfolio projects (title, image, category, description)
- [ ] 5 Team members (name, photo, bio, founder status)
- [ ] 2 Awards (title, image, details)
- [ ] Site settings (logo, contact info, social links)

### Images to Upload:
```
/images/
├── infinite-logo.png
├── portfolio/
│   ├── villa-emirates-hills.jpg
│   ├── modular-hotel-saudi.jpg
│   └── ... (12 total)
├── team/
│   ├── russell.jpg
│   ├── helen.jpg
│   ├── joshua.jpg
│   ├── anoop.jpg
│   └── farha.jpg
└── awards/
    ├── hotel-property-award-2022.png
    └── sleep-competition.jpg
```

### Required Plugins:
- **Classic Editor** (optional, if not using Gutenberg)
- **Advanced Custom Fields Pro** (for custom fields)
- **Custom Post Type UI** (or code in theme)
- **Yoast SEO** (for meta tags)
- **WP Super Cache** or **W3 Total Cache** (performance)
- **UpdraftPlus** (backups)

---

## Hosting Recommendations

| Provider | Best For | Price |
|----------|----------|-------|
| **Kinsta** | Premium managed WP | $35+/mo |
| **SiteGround** | Good balance | $15+/mo |
| **Cloudways** | Scalable | $14+/mo |
| **WP Engine** | Enterprise | $25+/mo |

---

## Timeline Estimate

| Approach | Time | Cost |
|----------|------|------|
| Custom Theme | 2-3 weeks | Developer rate |
| Page Builder | 1-2 weeks | Elementor Pro $59/yr |
| Headless | 3-4 weeks | Developer rate + WP hosting |

---

## Files Provided

```
infinite-architects/
├── DESIGN-SYSTEM.md      # All styles, colors, typography
├── WORDPRESS-CONVERSION.md  # This guide
├── content/
│   └── site-data.json    # All content structured as JSON
├── public/
│   └── images/           # All images ready to use
└── src/                  # Next.js source (reference)
```

Use `site-data.json` to copy/paste content into WordPress.
Use `DESIGN-SYSTEM.md` for exact CSS values.
Use `/public/images/` for all media assets.
