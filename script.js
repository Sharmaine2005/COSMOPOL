document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================
    // 1. MOBILE NAVIGATION
    // =========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Active Link Highlighting ---
    const currentPath = window.location.pathname.split("/").pop();
    const navItems = document.querySelectorAll('.nav-links a');

    navItems.forEach(link => {
        if(link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });


    // =========================================
    // 2. SCROLL ANIMATIONS (FADE IN)
    // =========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.card, .section-title, .about-content, .gallery-item, .partner-logo, .step-item');
    
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)';
        observer.observe(el);
    });

    // Inject CSS for fade-in
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleSheet);


    // =========================================
    // 3. HERO SECTION (SLIDER + CURSOR)
    // =========================================
    
    // --- Hero Slider Logic (Next/Prev Buttons) ---
    const slides = document.querySelectorAll('.slide-bg');
    const nextSlideBtn = document.querySelector('.next-slide');
    const prevSlideBtn = document.querySelector('.prev-slide');
    let currentSlideIdx = 0;

    if (slides.length > 0) {
        const totalSlides = slides.length;

        const changeSlide = (direction) => {
            // Remove active class from current
            slides[currentSlideIdx].classList.remove('active');
            // Reset transform so it doesn't get stuck in "parallax" position
            slides[currentSlideIdx].style.transform = `translate(0px, 0px) scale(1.05)`;

            if (direction === 'next') {
                currentSlideIdx = (currentSlideIdx + 1) % totalSlides;
            } else {
                currentSlideIdx = (currentSlideIdx - 1 + totalSlides) % totalSlides;
            }

            // Add active class to new
            slides[currentSlideIdx].classList.add('active');
        };

        if(nextSlideBtn && prevSlideBtn) {
            nextSlideBtn.addEventListener('click', () => changeSlide('next'));
            prevSlideBtn.addEventListener('click', () => changeSlide('prev'));
        }

        // --- Cursor Tracking (Parallax) ---
        const heroSection = document.querySelector('.hero-slider-section');
        
        if (heroSection) {
            heroSection.addEventListener('mousemove', (e) => {
                const activeSlide = document.querySelector('.slide-bg.active');
                if (!activeSlide) return;

                const windowWidth = window.innerWidth;
                const windowHeight = window.innerHeight;
                
                // Calculate position relative to center
                const mouseX = (e.clientX - (windowWidth / 2));
                const mouseY = (e.clientY - (windowHeight / 2));
                
                // Higher number = Slower movement
                const dampen = 30; 

                // Invert movement
                const moveX = (mouseX / dampen) * -1;
                const moveY = (mouseY / dampen) * -1;

                activeSlide.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
            });

            // Reset when mouse leaves
            heroSection.addEventListener('mouseleave', () => {
                const activeSlide = document.querySelector('.slide-bg.active');
                if(activeSlide) {
                    activeSlide.style.transform = `translate(0px, 0px) scale(1.05)`;
                }
            });
        }
    }

    // =========================================
    // 4. CONTACT FORM
    // =========================================
    const contactForm = document.querySelector('form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Use e.preventDefault() if you want to stop page reload,
            // but remove it if you want the form to actually submit.
            // e.preventDefault(); 
            alert("Message Sent! Thank you.");
        });
    }

    // =========================================
    // 5. HORIZONTAL GALLERY SCROLL (ADDED)
    // =========================================
    const galleryTrack = document.getElementById('galleryTrack');
    const galleryPrevBtn = document.getElementById('prevBtn');
    const galleryNextBtn = document.getElementById('nextBtn');

    if (galleryTrack && galleryPrevBtn && galleryNextBtn) {
        
        const updateGalleryButtons = () => {
            // Hide Left Button if at start
            if (galleryTrack.scrollLeft <= 0) {
                galleryPrevBtn.classList.add('hidden');
            } else {
                galleryPrevBtn.classList.remove('hidden');
            }

            // Hide Right Button if at end
            // Tolerance -1 for float calculation differences
            if (galleryTrack.scrollLeft + galleryTrack.clientWidth >= galleryTrack.scrollWidth - 1) {
                galleryNextBtn.classList.add('hidden');
            } else {
                galleryNextBtn.classList.remove('hidden');
            }
        };

        galleryPrevBtn.addEventListener('click', () => {
            galleryTrack.scrollBy({ left: -320, behavior: 'smooth' });
        });

        galleryNextBtn.addEventListener('click', () => {
            galleryTrack.scrollBy({ left: 320, behavior: 'smooth' });
        });

        galleryTrack.addEventListener('scroll', updateGalleryButtons);
        
        // Initial check
        updateGalleryButtons();
    }
    //Contact
   //Form Submission
    function newMessage(event){
        event.preventDefault();

        const nameInput = document.getElementById('senderName');    
        const emailInput = document.getElementById('senderEmail');
        const serviceInput = document.getElementById('serviceInterest');
        const messageInput = document.getElementById('message');

        alert("Your message has been sent. Thank you!");
        console.log("New Inquiry Message has been received.");
        window.location.reload();
    }

});