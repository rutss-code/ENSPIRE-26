document.addEventListener('DOMContentLoaded', () => {
    // Existing sponsor card hover effect
    document.querySelectorAll('.sponsor-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 0 20px rgba(255,255,255,0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = 'none';
        });
    });

    // 3D Carousel Logic
    const carouselContainer = document.querySelector('.carousel-container');

    // Only proceed if carousel exists
    if (carouselContainer) {
        const cards = Array.from(carouselContainer.querySelectorAll('.speaker-card'));
        const totalCards = cards.length;

        // We need at least 3 cards for this specific animation logic
        if (totalCards >= 3) {
            let currentIndex = 1; // Start with the middle card (index 1 for 3 cards)

            function updateCarousel() {
                // Remove all special classes
                cards.forEach(card => {
                    card.classList.remove('c-active', 'c-prev', 'c-next');
                });

                // Calculate indices
                const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
                const nextIndex = (currentIndex + 1) % totalCards;

                // Add classes
                cards[currentIndex].classList.add('c-active');
                cards[prevIndex].classList.add('c-prev');
                cards[nextIndex].classList.add('c-next');

                // Move to next card for next loop
                currentIndex = (currentIndex + 1) % totalCards;
            }

            // Initial call
            updateCarousel();

            // Auto rotation every 3 seconds
            setInterval(updateCarousel, 3000);
        }
    }
});
