(() => {
    // Thoob type radio cards
    const typeCards = document.querySelectorAll('.order__type-card');
    typeCards.forEach(card => {
        card.addEventListener('click', () => {
            typeCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            card.querySelector('input[type="radio"]').checked = true;
        });
    });

    // Quantity stepper
    const minusBtn = document.querySelector('.order__quantity-btn--minus');
    const plusBtn = document.querySelector('.order__quantity-btn--plus');
    const qtyDisplay = document.querySelector('.order__quantity-value');
    const qtyInput = document.querySelector('#quantity');

    let quantity = 1;

    function updateQuantity(val) {
        quantity = Math.max(1, Math.min(50, val));
        qtyDisplay.textContent = quantity;
        qtyInput.value = quantity;
    }

    if (minusBtn) minusBtn.addEventListener('click', () => updateQuantity(quantity - 1));
    if (plusBtn) plusBtn.addEventListener('click', () => updateQuantity(quantity + 1));

    // Form validation & submit
    const form = document.querySelector('#orderForm');
    const successEl = document.querySelector('.order__success');
    if (!form) return;

    function validateField(field) {
        const wrapper = field.closest('.order__field');
        if (!wrapper) return true;

        let valid = true;

        if (field.hasAttribute('required') && !field.value.trim()) {
            valid = false;
        }

        if (field.type === 'tel' && field.value.trim()) {
            valid = /^05\d{8}$/.test(field.value.trim());
        }

        if (valid) {
            wrapper.classList.remove('has-error');
        } else {
            wrapper.classList.add('has-error');
        }

        return valid;
    }

    // Live validation on blur
    form.querySelectorAll('input, select, textarea').forEach(field => {
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => {
            const wrapper = field.closest('.order__field');
            if (wrapper && wrapper.classList.contains('has-error')) {
                validateField(field);
            }
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const fields = form.querySelectorAll('input[required], select[required]');
        let allValid = true;

        fields.forEach(field => {
            if (!validateField(field)) {
                allValid = false;
            }
        });

        if (!allValid) return;

        // Collect data
        const formData = new FormData(form);
        formData.set('quantity', quantity);
        const data = Object.fromEntries(formData.entries());
        console.log('Order submitted:', data);

        // Show success
        form.style.display = 'none';
        successEl.classList.add('visible');
    });
})();
