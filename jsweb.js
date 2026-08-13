document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const badge = document.querySelector('.badge');
    const btn = document.querySelector('.btn');

    if (badge) {
        badge.addEventListener('mouseenter', () => {
            badge.style.transform = 'scale(1.05)';
            badge.style.transition = 'transform 0.15s ease';
        });

        badge.addEventListener('mouseleave', () => {
            badge.style.transform = 'scale(1)';
        });
    }

    if (btn) {
        btn.addEventListener('click', (e) => {
            console.log('Navigating to repository...');
        });
    }

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});