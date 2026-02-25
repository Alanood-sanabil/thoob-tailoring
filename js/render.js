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
     * this clears the element, re-inserts the SVG, and prepends the text.
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
    setText('hero-badge',    CONTENT.hero.badge);
    setText('hero-heading',  CONTENT.hero.heading);
    setText('hero-subtitle', CONTENT.hero.subheading);
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
                '<div class="about__feature-icon">' + f.icon + '</div>' +
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

    // Field: name
    setText('label-name',   CONTENT.form.fields.name.label);
    setText('error-name',   CONTENT.form.fields.name.error);
    setAttr('name', 'placeholder', CONTENT.form.fields.name.placeholder);

    // Field: phone
    setText('label-phone',  CONTENT.form.fields.phone.label);
    setText('error-phone',  CONTENT.form.fields.phone.error);
    setAttr('phone', 'placeholder', CONTENT.form.fields.phone.placeholder);

    // Field: city label + default option + city list
    setText('label-city',   CONTENT.form.fields.city.label);
    setText('error-city',   CONTENT.form.fields.city.error);

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

    // Field: notes (label has an optional badge)
    const notesLabel = $id('label-notes');
    if (notesLabel) {
        notesLabel.innerHTML =
            CONTENT.form.fields.notes.label +
            ' <span style="font-weight:400;color:var(--gray-mid)">' +
            CONTENT.form.fields.notes.optionalLabel +
            '</span>';
    }
    setAttr('notes', 'placeholder', CONTENT.form.fields.notes.placeholder);

    // Submit button
    setTextBeforeSVG('submit-btn', CONTENT.form.submitBtn);

    // Success state
    setText('success-title', CONTENT.form.successTitle);
    setText('success-msg',   CONTENT.form.successMsg);

    // ── Footer ─────────────────────────────────────────────────────
    setText('footer-brand-name', CONTENT.brand.nameAr);
    setText('footer-tagline',    CONTENT.brand.tagline);
    setText('footer-copyright',  CONTENT.footer.copyright);

})();
