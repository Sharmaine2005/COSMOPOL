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



document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Select the elements
    const track = document.getElementById('galleryTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // 2. Function to update button visibility
    function updateButtons() {
        // Hide Left Button if at the start (0px scrolled)
        if (track.scrollLeft <= 0) {
            prevBtn.classList.add('hidden');
        } else {
            prevBtn.classList.remove('hidden');
        }

        // Hide Right Button if at the end
        // (Scroll Amount + Visible Width) >= Total Content Width
        // We use -1 tolerance for calculation precision
        if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 1) {
            nextBtn.classList.add('hidden');
        } else {
            nextBtn.classList.remove('hidden');
        }
    }

    // 3. Click Events for Buttons
    prevBtn.addEventListener('click', () => {
        // Scroll Left by 320px (Width of card + gap)
        track.scrollBy({ left: -325, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        // Scroll Right by 320px
        track.scrollBy({ left: 325, behavior: 'smooth' });
    });

    // 4. Listen for scrolling (happens via buttons or swipe)
    track.addEventListener('scroll', updateButtons);

    // 5. Initial check on page load
    updateButtons();
});

