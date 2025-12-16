document.addEventListener('DOMContentLoaded', () => {

    // =========================================
    // 1. DYNAMIC HEADER & FOOTER LOADING
    // =========================================
    
    // Load Header
    fetch('header.html?v=2')
        .then(response => response.text())
        .then(data => {
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = data;
                initializeNavigation();
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

        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            body.classList.add('dark-mode');
            if(icon) icon.classList.replace('fa-moon', 'fa-sun');
        }

        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                body.classList.toggle('dark-mode');
                const isDark = body.classList.contains('dark-mode');

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
    // 4. HERO SLIDER & PARALLAX
    // =========================================
    const slides = document.querySelectorAll('.slide-bg');
    if (slides.length > 0) {
        const nextSlideBtn = document.querySelector('.next-slide');
        const prevSlideBtn = document.querySelector('.prev-slide');
        let currentSlideIdx = 0;
        const totalSlides = slides.length;
        let slideInterval;

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

        const resetTimer = () => {
            clearInterval(slideInterval);
            slideInterval = setInterval(() => changeSlide('next'), 5000);
        };

        if(nextSlideBtn) {
            nextSlideBtn.addEventListener('click', () => {
                changeSlide('next');
                resetTimer();
            });
        }

        if(prevSlideBtn) {
            prevSlideBtn.addEventListener('click', () => {
                changeSlide('prev');
                resetTimer();
            });
        }

        slideInterval = setInterval(() => changeSlide('next'), 5000);

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

    // =========================================
    // 6. SERVICE MODAL LOGIC
    // =========================================
    const modalOverlay = document.getElementById('service-modal');
    
    if (modalOverlay) {
        const modalImg = document.getElementById('modal-img');
        const modalTitle = document.getElementById('modal-title');
        const modalDesc = document.getElementById('modal-desc');
        const modalBtn = document.getElementById('modal-cta');
        const closeModal = document.querySelector('.close-modal');
        const viewBtns = document.querySelectorAll('.view-details-btn');

        viewBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                
                const title = btn.getAttribute('data-title');
                const desc = btn.getAttribute('data-desc');
                const img = btn.getAttribute('data-img');
                const link = btn.getAttribute('data-link');

                modalTitle.textContent = title;
                modalDesc.textContent = desc;
                modalImg.src = img;
                modalBtn.href = link;

                modalOverlay.classList.add('active');
            });
        });

        const hideModal = () => {
            modalOverlay.classList.remove('active');
        };

        if(closeModal) closeModal.addEventListener('click', hideModal);

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                hideModal();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                hideModal();
            }
        });
    }

    // =========================================
    // 7. DYNAMIC REVIEWS LOADING (FIXED FOR LOCAL)
    // =========================================
    function loadClientExperiences() {
        const reviewsPlaceholder = document.getElementById('client-experiences-placeholder');
        
        // Check if we are on the homepage
        if (reviewsPlaceholder) {
            // Instead of fetching PHP, we inject HTML directly using JavaScript
            const mockReviewsHTML = `
                <div class="card">
                    <div class="card-body text-center" style="padding: 15px;">
                        <div style="color: #ffc107; margin-bottom: 5px; font-size: 0.9rem;">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        </div>
                        <p style="font-style: italic; margin-bottom: 10px; font-size: 0.85rem; line-height: 1.4;">"Exceptional service! My car looks brand new. The ceramic coating is a game changer."</p>
                        <h4 style="margin-bottom: 0; color: var(--primary); font-size: 1rem;">John Doe</h4>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body text-center" style="padding: 15px;">
                        <div style="color: #ffc107; margin-bottom: 5px; font-size: 0.9rem;">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        </div>
                        <p style="font-style: italic; margin-bottom: 10px; font-size: 0.85rem; line-height: 1.4;">"Very professional team. They handled my SUV with great care. Highly recommended!"</p>
                        <h4 style="margin-bottom: 0; color: var(--primary); font-size: 1rem;">Maria Santos</h4>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body text-center" style="padding: 15px;">
                        <div style="color: #ffc107; margin-bottom: 5px; font-size: 0.9rem;">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>
                        </div>
                        <p style="font-style: italic; margin-bottom: 10px; font-size: 0.85rem; line-height: 1.4;">"Great tint installation. The lounge was comfortable while I waited. Good job."</p>
                        <h4 style="margin-bottom: 0; color: var(--primary); font-size: 1rem;">Rico Tan</h4>
                    </div>
                </div>
            `;
            
            reviewsPlaceholder.innerHTML = mockReviewsHTML;
        }
    }
    loadClientExperiences();

    // =========================================
    // 8. FEEDBACK MODAL LOGIC (NEW)
    // =========================================
    function initializeFeedbackModal() {
        const modal = document.getElementById('feedbackModal');
        const btn = document.getElementById('openFeedbackModal');
        const closeSpan = document.querySelector('#feedbackModal .close-btn');

        if (modal && btn && closeSpan) {
            btn.onclick = function() {
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            }

            closeSpan.onclick = function() {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                    document.body.style.overflow = "auto";
                }
            }
        }
    }
    initializeFeedbackModal(); 

}); 