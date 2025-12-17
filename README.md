# COSMOPOL Automotive Website

## Project Overview
This website was developed by Superior Team as part of the Web Development course. It serves as the digital storefront for COSMOPOL, a premium automotive detailing and protection shop.

## Team Members & Roles
- **[Sharmaine Hannah Valenzuela]** – Project Manager/Backend
- **[Charles Justin Vizcarra]** – UI Designer/CSS
- **[Via Ysabelle Almario]** – Content/Tester

## Key Features
- **Advanced Theme Toggle**: A custom-animated Sun/Moon "pill switch" for seamless Dark/Light mode transitions with persistent storage.
- **Unique UI Animations**:
    - **Crystal Ripple & Shake**: Custom CSS animations on Hero CTA buttons.
    - **Hover-Reveal**: Tooltips for partner logos in the marquee.
    - **Slanted Headers**: Consistent geometric "cut" (`clip-path`) on all page headers for a sharp, modern look.
- **Minimalist Service Catalog**: Service cards feature a clean layout that creates an overlay **Modal (Pop-up)** upon clicking "Know More," keeping the interface uncluttered.
- **Dynamic Headers**: Each page features a unique background image specific to its context (About, Services, Contact) while maintaining consistent layout geometry.
- **Interactive Gallery**: Features a parallax hero slider and a touch-friendly horizontal scroll for project showcases.
- **Backend Integration**: 
    - Functional Contact Form connected to a MySQL database.
    - Client Experience submission and viewing system (`submitClientExp.php`).

## Technologies Used
- **Frontend**: 
    - HTML5
    - CSS3 (Variables, Flexbox, Grid, Keyframe Animations, Clip-paths)
    - JavaScript (ES6, DOM Manipulation, LocalStorage)
- **Backend**: 
    - PHP (Form handling & Data processing)
    - MySQL (Database)
- **Design Assets**: 
    - Font Awesome Icons
    - Google Fonts (Poppins & Roboto)

## Installation & Setup
1. **Live Static Version**: Visit https://sharmaine2005.github.io/COSMOPOL/.
   *Note: PHP forms and Database features are disabled on the static GitHub Pages demo.*
2. **Local Full Version**:
   - Clone the repository to `htdocs` in XAMPP.
   - Import `db.php` settings to your local MySQL server.
   - Run via `localhost`.

## Site Structure
* **`index.html`** – Home page with Hero Slider, Marquee Partners, and Testimonials.
* **`about.html`** – Company history and timeline.
* **`services.html`** – Catalog of services using the Modal interaction system.
* **`products.html`** – Showcase of specific product lines (CosmoShield, CosmoCoat).
* **`gallery.html`** – Visual portfolio with horizontal scrolling layout.
* **`contact.html`** – Appointment booking form.
* **`thankYou.html`** – Success redirection page after form submission.
* **`header.html` / `footer.html`** – Reusable components injected via JavaScript.
* **`style.css`** – Main stylesheet handling variables, dark mode, and animations.
* **`script.js`** – Handles dynamic header injection, theme toggling, and modal logic.
* **`db.php`** – Database connection configuration.
* **`submitForm.php`** – Backend script for processing contact inquiries.
* **`assets/`** – Contains all images, logos, and icons.

## Credits
- **Brand Identity**: COSMOPOL / Cosmo Automotive (Est. 2015).
- **Assets**: Images and logos used are for educational and demonstration purposes representing the Cosmo Automotive brand.