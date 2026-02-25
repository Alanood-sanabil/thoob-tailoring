(() => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');

    function updateNavbar() {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();

    // Fade-in-up on scroll with IntersectionObserver
    const fadeElements = document.querySelectorAll('.fade-in-up');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        fadeElements.forEach(el => observer.observe(el));
    } else {
        // Fallback: show all immediately
        fadeElements.forEach(el => el.classList.add('is-visible'));
    }
})();
