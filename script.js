document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Navigation Toggle ---
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

    // --- HERO SLIDER FUNCTIONALITY ---
    const slides = document.querySelectorAll('.slide-bg');
    const nextBtn = document.querySelector('.next-slide');
    const prevBtn = document.querySelector('.prev-slide');
    let currentSlideIdx = 0;
    const totalSlides = slides.length;

    // Function to change slide
    const changeSlide = (direction) => {
        // Remove active class from current slide
        slides[currentSlideIdx].classList.remove('active');
        // Reset transform on the slide leaving so it doesn't look weird next time it loads
        slides[currentSlideIdx].style.transform = `translate(0px, 0px) scale(1.05)`;

        // Calculate new index depending on direction
        if (direction === 'next') {
            currentSlideIdx = (currentSlideIdx + 1) % totalSlides; // Loop back to 0 after last slide
        } else {
            currentSlideIdx = (currentSlideIdx - 1 + totalSlides) % totalSlides; // Loop to last slide if going back from 0
        }

        // Add active class to new slide
        slides[currentSlideIdx].classList.add('active');
    };

    // Event Listeners for Arrows
    if(nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => changeSlide('next'));
        prevBtn.addEventListener('click', () => changeSlide('prev'));
    }

    // --- CURSOR INTERACTION (Parallax Effect) ---
    const heroSection = document.querySelector('.hero-slider-section');

    if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const activeSlide = document.querySelector('.slide-bg.active');
            if (!activeSlide) return;

            // Get window dimensions
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            // Calculate mouse position relative to the center of the screen
            // (e.clientX is mouse X coordinate, windowWidth / 2 is center X)
            const mouseX = (e.clientX - (windowWidth / 2));
            const mouseY = (e.clientY - (windowHeight / 2));

            // Dampening factor - higher number = subtler movement
            // We divide the mouse distance by this number so the image doesn't move too much
            const dampen = 30; 

            // Calculate movement values (invert signs to move opposite to mouse)
            const moveX = (mouseX / dampen) * -1;
            const moveY = (mouseY / dampen) * -1;

            // Apply transform. We also add a slight scale (1.05) to prevent white borders showing during movement
            activeSlide.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
        });

        // Reset position when mouse leaves hero area
        heroSection.addEventListener('mouseleave', () => {
             const activeSlide = document.querySelector('.slide-bg.active');
             if(activeSlide) {
                 activeSlide.style.transform = `translate(0px, 0px) scale(1.05)`;
             }
        });
    }

    // --- Scroll Animations (Smooth Upward Fade) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is fully in view
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.card, .section-title, .about-content, .gallery-item, .partner-logo');
    
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)'; // Start lower
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)';
        observer.observe(el);
    });

    // Add fade-in class style dynamically
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleSheet);
    
});