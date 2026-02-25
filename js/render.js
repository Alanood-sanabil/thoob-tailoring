/**
 * render.js
 * Reads the global CONTENT object (defined in content.js)
 * and populates every visible text node in the document.
 * Runs deferred, after the DOM is parsed and content.js has executed.
 */
(function () {
    // ── Helpers ────────────────────────────────────────────────────
    function $id(id) { return document.getElementById(id); }

    function setText(id, value) {
        const el = $id(id);
        if (el) el.textContent = value;
    }

    function setAttr(id, attr, value) {
        const el = $id(id);
        if (el) el.setAttribute(attr, value);
    }

    /**
     * For elements that contain a mix of text + a child SVG,
     * clears the element, appends the text, then re-appends the SVG.
     */
    function setTextBeforeSVG(id, value) {
        const el = $id(id);
        if (!el) return;
        const svg = el.querySelector('svg');
        el.textContent = '';
        el.appendChild(document.createTextNode(value));
        if (svg) el.appendChild(svg);
    }

    // ── Page title ─────────────────────────────────────────────────
    document.title = CONTENT.brand.nameAr + ' | ' + CONTENT.brand.nameEn;

    // ── Urgency Banner ─────────────────────────────────────────────
    setText('urgency-banner-text', CONTENT.urgencyBanner.text);

    // ── Navbar ─────────────────────────────────────────────────────
    setText('navbar-brand-name', CONTENT.brand.nameAr);

    const navLinksEl = $id('navbar-links');
    if (navLinksEl) {
        CONTENT.nav.links.forEach(function (link) {
            const a = document.createElement('a');
            a.href = link.href;
            a.textContent = link.label;
            if (link.highlight) a.classList.add('cta');
            navLinksEl.appendChild(a);
        });
    }

    // ── Hero ───────────────────────────────────────────────────────
    setText('hero-heading',  CONTENT.hero.heading);
    setText('hero-subtitle', CONTENT.hero.subheading);
    setText('hero-body',     CONTENT.hero.body);
    setTextBeforeSVG('hero-cta', CONTENT.hero.cta);

    // ── About ──────────────────────────────────────────────────────
    setText('about-label',   CONTENT.about.label);
    setText('about-heading', CONTENT.about.heading);
    setText('about-body',    CONTENT.about.body);

    const featuresEl = $id('about-features');
    if (featuresEl) {
        CONTENT.about.features.forEach(function (f) {
            const div = document.createElement('div');
            div.className = 'about__feature fade-in-up';
            div.innerHTML =
                '<div class="about__feature-accent"></div>' +
                '<div class="about__feature-text">' +
                    '<h3>' + f.title + '</h3>' +
                    '<p>'  + f.desc  + '</p>'  +
                '</div>';
            featuresEl.appendChild(div);
        });
    }

    // ── Order Form ─────────────────────────────────────────────────
    setText('form-label',   CONTENT.form.label);
    setText('form-heading', CONTENT.form.heading);
    setText('form-subtext', CONTENT.form.subtext);

    // Thoob type card labels
    CONTENT.form.thoobTypes.forEach(function (type) {
        setText('type-label-' + type.id, type.valueAr);
    });

    // Field labels and placeholders
    setText('label-name',  CONTENT.form.fields.name.label);
    setAttr('name',  'placeholder', CONTENT.form.fields.name.placeholder);

    setText('label-phone', CONTENT.form.fields.phone.label);
    setAttr('phone', 'placeholder', CONTENT.form.fields.phone.placeholder);

    setText('label-city',  CONTENT.form.fields.city.label);

    // Build city options
    const citySelect = $id('city');
    if (citySelect) {
        const defaultOpt = document.createElement('option');
        defaultOpt.value    = '';
        defaultOpt.disabled = true;
        defaultOpt.selected = true;
        defaultOpt.textContent = CONTENT.form.fields.city.placeholder;
        citySelect.appendChild(defaultOpt);

        CONTENT.form.cities.forEach(function (city) {
            const opt = document.createElement('option');
            opt.value       = city;
            opt.textContent = city;
            citySelect.appendChild(opt);
        });
    }

    // Notes label
    setText('label-notes', CONTENT.form.fields.notes.label);
    setAttr('notes', 'placeholder', CONTENT.form.fields.notes.placeholder);

    // Submit button
    setTextBeforeSVG('submit-btn', CONTENT.form.submitBtn);

    // Success state
    setText('success-title', CONTENT.form.successTitle);
    setText('success-msg',   CONTENT.form.successMsg);

    // ── Testimonials ───────────────────────────────────────────────
    setText('testimonials-label',   CONTENT.testimonials.label);
    setText('testimonials-heading', CONTENT.testimonials.heading);

    const grid = $id('testimonials-grid');
    if (grid) {
        CONTENT.testimonials.items.forEach(function (item) {
            const card = document.createElement('div');
            card.className = 'testimonials__card fade-in-up';
            card.innerHTML =
                '<p class="testimonials__quote">' + item.text + '</p>' +
                '<div class="testimonials__author">' +
                    '<div class="testimonials__author-line"></div>' +
                    '<div class="testimonials__author-info">' +
                        '<span class="testimonials__name">' + item.name + '</span>' +
                        '<span class="testimonials__city">'  + item.city  + '</span>' +
                    '</div>' +
                '</div>';
            grid.appendChild(card);
        });
    }

    // ── Footer ─────────────────────────────────────────────────────
    setText('footer-brand-name', CONTENT.brand.nameAr);
    setText('footer-tagline',    CONTENT.footer.tagline);
    setText('footer-sub',        CONTENT.footer.sub);
    setText('footer-hours',      CONTENT.footer.hours);
    setText('footer-whatsapp',   CONTENT.footer.whatsapp);
    setText('footer-copyright',  CONTENT.footer.copyright);

})();
