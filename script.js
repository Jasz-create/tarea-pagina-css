// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Actualizar contador del carrito
    const cartButtons = document.querySelectorAll('.cta-button');
    const cartCounter = document.querySelector('.cart-counter');
    
    cartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            let count = parseInt(cartCounter.textContent);
            cartCounter.textContent = count + 1;
            button.classList.add('added');
            setTimeout(() => button.classList.remove('added'), 2000);
        });
    });
});