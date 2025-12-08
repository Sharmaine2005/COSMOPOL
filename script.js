document.addEventListener('DOMContentLoaded', () => {

    // =========================================
    // 1. DYNAMIC HEADER & FOOTER LOADING
    // =========================================
    
    // Load Header
    // Uses '?v=2' to ensure the browser loads the latest version with the button
    fetch('header.html?v=2')
        .then(response => response.text())
        .then(data => {
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = data;
                // Initialize Navigation logic ONLY after header is loaded
                initializeNavigation();
                // Initialize Dark Mode Logic
                initializeTheme();
            }
        })
        .catch(error => console.error('Error loading header:', error));

    // Load Footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading footer:', error));


    // =========================================
    // NEW: THEME TOGGLE LOGIC
    // =========================================
    function initializeTheme() {
        const toggleBtn = document.getElementById('theme-toggle');
        const icon = toggleBtn ? toggleBtn.querySelector('i') : null;
        const body = document.body;

        // 1. Check LocalStorage on load
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            body.classList.add('dark-mode');
            if(icon) icon.classList.replace('fa-moon', 'fa-sun');
        }

        // 2. Event Listener
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                body.classList.toggle('dark-mode');
                const isDark = body.classList.contains('dark-mode');

                // Toggle Icon & Save Preference
                if (isDark) {
                    if(icon) icon.classList.replace('fa-moon', 'fa-sun');
                    localStorage.setItem('theme', 'dark');
                } else {
                    if(icon) icon.classList.replace('fa-sun', 'fa-moon');
                    localStorage.setItem('theme', 'light');
                }
            });
        }
    }


    // =========================================
    // 2. NAVIGATION LOGIC
    // =========================================
    function initializeNavigation() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        if(menuToggle && navLinks) {
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }

        const currentPath = window.location.pathname.split("/").pop();
        const navItems = document.querySelectorAll('.nav-links a');

        navItems.forEach(link => {
            const linkHref = link.getAttribute('href');
            if(linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    // =========================================
    // 3. FADE IN ANIMATIONS
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

    const fadeElements = document.querySelectorAll('.card, .section-title, .gallery-item, .step-item, .pricing-card, .about-content, .partner-logo');
    
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)';
        observer.observe(el);
    });

    const styleSheet = document.createElement("style");
    styleSheet.textContent = `.fade-in { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(styleSheet);


    // =========================================
    // 4. HERO SLIDER & PARALLAX (UPDATED: Auto Slide)
    // =========================================
    const slides = document.querySelectorAll('.slide-bg');
    if (slides.length > 0) {
        const nextSlideBtn = document.querySelector('.next-slide');
        const prevSlideBtn = document.querySelector('.prev-slide');
        let currentSlideIdx = 0;
        const totalSlides = slides.length;
        let slideInterval; // Variable to hold the timer

        // Function to change slides
        const changeSlide = (direction) => {
            slides[currentSlideIdx].classList.remove('active');
            slides[currentSlideIdx].style.transform = `translate(0px, 0px) scale(1.05)`; 

            if (direction === 'next') {
                currentSlideIdx = (currentSlideIdx + 1) % totalSlides;
            } else {
                currentSlideIdx = (currentSlideIdx - 1 + totalSlides) % totalSlides;
            }
            slides[currentSlideIdx].classList.add('active');
        };

        // Function to reset the 5-second timer
        const resetTimer = () => {
            clearInterval(slideInterval); // Stop current timer
            slideInterval = setInterval(() => changeSlide('next'), 5000); // Start new 5s timer
        };

        // Event Listeners for Buttons (Manual Control)
        if(nextSlideBtn) {
            nextSlideBtn.addEventListener('click', () => {
                changeSlide('next');
                resetTimer(); // Reset timer so it doesn't auto-slide immediately after click
            });
        }

        if(prevSlideBtn) {
            prevSlideBtn.addEventListener('click', () => {
                changeSlide('prev');
                resetTimer();
            });
        }

        // Start Auto Slide on Load
        slideInterval = setInterval(() => changeSlide('next'), 5000);

        // Parallax Effect
        const heroSection = document.querySelector('.hero-slider-section');
        if (heroSection) {
            heroSection.addEventListener('mousemove', (e) => {
                const activeSlide = document.querySelector('.slide-bg.active');
                if (!activeSlide) return;
                const moveX = ((e.clientX - window.innerWidth / 2) / 30) * -1;
                const moveY = ((e.clientY - window.innerHeight / 2) / 30) * -1;
                activeSlide.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
            });
            heroSection.addEventListener('mouseleave', () => {
                const activeSlide = document.querySelector('.slide-bg.active');
                if(activeSlide) activeSlide.style.transform = `translate(0px, 0px) scale(1.05)`;
            });
        }
    }

    // =========================================
    // 5. GALLERY HORIZONTAL SCROLL
    // =========================================
    const galleryTrack = document.getElementById('galleryTrack');
    const galleryPrevBtn = document.getElementById('prevBtn');
    const galleryNextBtn = document.getElementById('nextBtn');

    if (galleryTrack && galleryPrevBtn && galleryNextBtn) {
        const updateGalleryButtons = () => {
            galleryPrevBtn.classList.toggle('hidden', galleryTrack.scrollLeft <= 0);
            galleryNextBtn.classList.toggle('hidden', galleryTrack.scrollLeft + galleryTrack.clientWidth >= galleryTrack.scrollWidth - 1);
        };
        galleryPrevBtn.addEventListener('click', () => galleryTrack.scrollBy({ left: -320, behavior: 'smooth' }));
        galleryNextBtn.addEventListener('click', () => galleryTrack.scrollBy({ left: 320, behavior: 'smooth' }));
        galleryTrack.addEventListener('scroll', updateGalleryButtons);
        updateGalleryButtons(); 
    }
});

    // =========================================
    // 6. FEEDBACK MODAL LOGIC (New Section)
    // =========================================
    function initializeFeedbackModal() {
        const modal = document.getElementById('feedbackModal');
        const btn = document.getElementById('openFeedbackModal');
        const closeSpan = document.querySelector('#feedbackModal .close-btn');

        if (modal && btn && closeSpan) {
            //Open Form Modal when button is clicked
            btn.onclick = function() {
                modal.style.display = "block";
                document.body.style.overflow = "hidden"; //Prevent scrolling behind the modal
            }

            //Close the modal when the X/close button is clicked
            closeSpan.onclick = function() {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }

            //Close the modal when the user clicks anywhere outside of modal content
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                    document.body.style.overflow = "auto";
                }
            }
        }
    }
    initializeFeedbackModal(); 