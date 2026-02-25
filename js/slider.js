(() => {
    const slides = document.querySelectorAll('.hero__slide');
    const dots = document.querySelectorAll('.hero__dot');
    const prevBtn = document.querySelector('.hero__arrow--prev');
    const nextBtn = document.querySelector('.hero__arrow--next');
    const hero = document.querySelector('.hero');

    let current = 0;
    let interval = null;
    const DELAY = 5000;

    function goTo(index) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');

        current = (index + slides.length) % slides.length;

        slides[current].classList.add('active');
        dots[current].classList.add('active');
    }

    function next() {
        goTo(current + 1);
    }

    function prev() {
        goTo(current - 1);
    }

    function startAutoPlay() {
        stopAutoPlay();
        interval = setInterval(next, DELAY);
    }

    function stopAutoPlay() {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
    }

    // Arrow buttons
    if (nextBtn) nextBtn.addEventListener('click', () => { next(); startAutoPlay(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); startAutoPlay(); });

    // Dot buttons
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            goTo(i);
            startAutoPlay();
        });
    });

    // Pause on hover
    if (hero) {
        hero.addEventListener('mouseenter', stopAutoPlay);
        hero.addEventListener('mouseleave', startAutoPlay);
    }

    // Initialize
    startAutoPlay();
})();
