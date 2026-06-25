document.addEventListener("DOMContentLoaded", () => {
    
    // Intersection Observer for scroll reveal animations
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Once revealed, stop observing
            }
        });
    }, revealOptions);
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // Simple Parallax Effect for Images
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        parallaxElements.forEach(el => {
            const parentRect = el.parentElement.getBoundingClientRect();
            
            // Only apply parallax if element is visible in the viewport
            if (parentRect.top < window.innerHeight && parentRect.bottom > 0) {
                const speed = 0.15;
                // Calculate how far the center of the image is from the center of the viewport
                const centerOffset = (window.innerHeight / 2) - (parentRect.top + parentRect.height / 2);
                const yPos = centerOffset * speed;
                el.style.transform = `translateY(${yPos}px) scale(1.15)`;
            }
        });
        
        // Change navbar appearance on scroll
        const navbar = document.querySelector('.navbar');
        if (scrolled > 50) {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
        } else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.backdropFilter = 'none';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        }
    });
});
