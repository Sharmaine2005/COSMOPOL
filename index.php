<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>COSMOPOL | Superior in Every Way</title>
    <link rel="icon" href="assets/COSMOPOL_icon.png" type="image/x-icon">

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
<body>

    <div id="header-placeholder"></div>

    <section id="home" class="hero-slider-section">
        <div class="slider-container">
            <div class="slide-bg active" style="background-image: url('assets/HeroImage1.png');"></div>
            <div class="slide-bg" style="background-image: url('assets/HeroImage2.png');"></div>
            <div class="slide-bg" style="background-image: url('assets/HeroImage3.png');"></div>
            <div class="slide-bg" style="background-image: url('assets/HeroImage4.png');"></div>
            <div class="slide-bg" style="background-image: url('assets/HeroImage5.png');"></div>
        </div>

        <div class="hero-overlay"></div>

        <div class="hero-content-overlay container">
            <h1>Superior in Every Way</h1>
            <p>Premium Automotive Solutions & Innovation</p>
            <a href="#discover" class="btn btn-hero">Discover More</a>
        </div>

        <button class="slider-arrow prev-slide"><i class="fas fa-chevron-left"></i></button>
        <button class="slider-arrow next-slide"><i class="fas fa-chevron-right"></i></button>
    </section>

    <section id="discover" class="section-padding">
        <div class="container">
            <h2 class="section-title" data-title="ABOUT">Who We Are</h2>
            <div class="grid-3">
                <div class="about-content" style="grid-column: 1 / -1; text-align: center; max-width: 800px; margin: 0 auto;">
                    <p style="font-size: 1.1rem; margin-bottom: 30px; color: var(--text-light);">
                        Founded in 2015, COSMOPOL is a Filipino-owned company dedicated to premium automotive solutions through our division, Cosmo Automotive. We blend R&D, innovation, and strong after-sales support.
                    </p>
                    <a href="about.html" class="btn">Read Our Story</a>
                </div>
            </div>
        </div>
    </section>

    <section class="section-padding" style="background-color: #f9f9f9;">
        <div class="container">
            <h2 class="section-title" data-title="PRODUCTS">Featured Products</h2>
            <div class="grid-3">
                <div class="card">
                    <h3>CosmoCoat</h3>
                    <p>Advanced ceramic coating technology for ultimate paint protection and gloss.</p>
                </div>
                <div class="card">
                    <h3>CosmoShade</h3>
                    <p>High-performance window films that block UV rays and reduce heat.</p>
                </div>
                <div class="card">
                    <h3>CosmoShield</h3>
                    <p>Durable Paint Protection Film (PPF) to defend against road debris.</p>
                </div>
            </div>
            <div class="text-center" style="margin-top: 50px;">
                <a href="products.html" class="btn">View All Products</a>
            </div>
        </div>
    </section>

    <section class="section-padding">
        <div class="container">
            <h2 class="section-title" data-title="SERVICES">Our Services</h2>
            <div class="grid-3">
                <div class="card">
                    <img src="assets/service-interior-detail.png" alt="Detailing">
                    <div class="card-body"><h3>Premium Detailing</h3></div>
                </div>
                <div class="card">
                    <img src="assets/service-vinyl-wrap.png" alt="Wrapping">
                    <div class="card-body"><h3>Vehicle Wraps</h3></div>
                </div>
                <div class="card">
                    <img src="assets/service-ceramic-tint.png" alt="Tinting">
                    <div class="card-body"><h3>Window Tinting</h3></div>
                </div>
            </div>

            <div class="process-steps">
                <div class="step-item">
                    <div class="step-icon"><i class="fas fa-comments"></i></div>
                    <h4>Consult</h4>
                </div>
                <div class="step-item">
                    <div class="step-icon"><i class="fas fa-tools"></i></div>
                    <h4>Prep</h4>
                </div>
                <div class="step-item">
                    <div class="step-icon"><i class="fas fa-spray-can"></i></div>
                    <h4>Apply</h4>
                </div>
                <div class="step-item">
                    <div class="step-icon"><i class="fas fa-check-circle"></i></div>
                    <h4>Check</h4>
                </div>
            </div>

            <div class="text-center" style="margin-top: 60px;">
                <a href="services.html" class="btn">See Full Services</a>
            </div>
        </div>
    </section>

    <section class="section-padding" style="background-color: #f9f9f9;">
        <div class="container-fluid" style="padding: 0;">
            <div class="container">
                <h2 class="section-title" data-title="GALLERY">Recent Work</h2>
            </div>
            
            <div class="marquee-container">
                <div class="marquee-track">
                    <div class="gallery-item"><img src="assets/gallery-supercar.jpg" alt="Work 1"></div>
                    <div class="gallery-item"><img src="assets/gallery-ceramic-detail.jpg" alt="Work 2"></div>
                    <div class="gallery-item"><img src="assets/gallery-window-tint.jpg" alt="Work 3"></div>
                    <div class="gallery-item"><img src="assets/gallery-luxury-interior.jpg" alt="Work 4"></div>

                    <div class="gallery-item"><img src="assets/gallery-supercar.jpg" alt="Work 1"></div>
                    <div class="gallery-item"><img src="assets/gallery-ceramic-detail.jpg" alt="Work 2"></div>
                    <div class="gallery-item"><img src="assets/gallery-window-tint.jpg" alt="Work 3"></div>
                    <div class="gallery-item"><img src="assets/gallery-luxury-interior.jpg" alt="Work 4"></div>
                </div>
            </div>

            <div class="text-center" style="margin-top: 50px;">
                <a href="gallery.html" class="btn">View Gallery</a>
            </div>
        </div>
    </section>

    <section class="section-padding">
        <div class="container text-center">
            <h2 class="section-title" data-title="PARTNERS">Partnered Branches</h2>
            <p style="color: var(--text-light); margin-bottom: 30px;">Trusted by leading automotive experts across the region.</p>
            <div class="partners-grid">
                <div class="partner-logo"><img src="assets/partner-logo-1.png" alt="Partner 1"></div>
                <div class="partner-logo"><img src="assets/partner-logo-2.png" alt="Partner 2"></div>
                <div class="partner-logo"><img src="assets/partner-logo-3.png" alt="Partner 3"></div>
                <div class="partner-logo"><img src="assets/partner-logo-4.png" alt="Partner 4"></div>
                <div class="partner-logo"><img src="assets/partner-logo-5.png" alt="Partner 5"></div>
            </div>
        </div>
    </section>
    
    <section class="section-padding" style="background-color: var(--bg-light); padding: 25px 0;">
        <div class="container">
            <h2 class="section-title" data-title="FEEDBACK" style="margin-bottom: 20px; font-size: 2rem;">Client Experiences</h2>
            <div class="grid-3" style="gap: 20px; margin-top: 20px;">
        <!--PHP included into index.html -> index.php for Client Experience [esp Viewing from DB]-->
                <?php include 'viewClientExp.php'; ?>
            </div>
        <!--Share Review-->
            <center>
                <h3 style="margin-top: 20px;">Want To Share Your Experience?</h3>
                <button id="openFeedbackModal" class="btn btn-secondary">Share Feedback</button>               
            </center>
        </div>
        <!--Feedback Form-->
        <div id="feedbackModal" class="modal">
            <div class="feedback-form">
                <span class="close-btn">&times;</span>
                <h3 style="margin-bottom: 20px;" class="text-highlight">Share Your Experience!</h3>

                <form action="submitExp.php" method="POST">
                    <div class="form-group">
                        <label for="f_name">Name</label>
                        <input type="text" id="f_name" name="name" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="f_rating">Rating (1 to 5)</label>
                        <input type="number" id="f_rating" name="rating" min="1" max="5" required>
                    </div>

                    <div class="form-group">
                        <label for="f_review">Your Review</label>
                        <textarea id="f_review" name="feedback" rows="4" required></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit Feedback</button>
                </form>
            </div>
        </div>

    </section>

    <section class="section-padding text-center cta-section">
        <div class="container">
            <h2 style="margin-bottom: 20px;">Get In Touch</h2>
            <p style="margin-bottom: 30px; opacity: 0.9;">Ready to upgrade your ride? Visit us or send an inquiry today.</p>
            <a href="contact.html" class="btn btn-cta">Contact Us</a>
        </div>
    </section>

    <div id="footer-placeholder"></div>
    <script src="script.js"></script>
</body>
</html>