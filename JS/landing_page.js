document.addEventListener('DOMContentLoaded', () => {
    // --- INTRO VIDEO LOGIC ---
    const introOverlay = document.getElementById('intro-overlay');
    const introVideo = document.getElementById('intro-video');
    const snapAnimation = document.getElementById('snap-animation');
    const mainContent = document.getElementById('main-content');
    const body = document.body;

    if (introVideo && introOverlay) {
        body.classList.add('intro-active');

        // Attempt to play
        introVideo.play().catch(() => {
            introVideo.muted = true;
            introVideo.play();
        });

        introVideo.onended = () => {
            introVideo.classList.add('dust-effect');

            // --- FALLING INTO GALAXY EFFECT ---
            const particleContainer = document.getElementById('dust-particles');

            // Create dense starfield - you're falling INTO the galaxy
            const totalStars = 800;

            for (let i = 0; i < totalStars; i++) {
                const star = document.createElement('div');
                star.className = 'galaxy-star';

                // Calculate random angle for positioning
                const angle = Math.random() * Math.PI * 2;
                const distance = 80 + Math.random() * 60; // Start far from center

                // Start position (edge of screen)
                const startX = 50 + Math.cos(angle) * distance;
                const startY = 50 + Math.sin(angle) * distance;

                star.style.left = startX + 'vw';
                star.style.top = startY + 'vh';

                // Calculate path to center (falling inward)
                star.style.setProperty('--target-x', (50 - startX) + 'vw');
                star.style.setProperty('--target-y', (50 - startY) + 'vh');

                // Star size - visible but realistic
                const size = 1 + Math.random() * 1.5;
                star.style.width = size + 'px';
                star.style.height = size + 'px';

                // Color variation (realistic star colors)
                const colors = ['#ffffff', '#f8f8ff', '#e6f2ff', '#dae8f5', '#c8d8e8'];
                const color = colors[Math.floor(Math.random() * colors.length)];
                star.style.background = color;
                star.style.boxShadow = `0 0 ${size * 2}px ${color}`;

                // Speed variation (creates depth - closer stars move faster)
                const speed = 2 + Math.random() * 2;
                star.style.animationDuration = speed + 's';

                // Stagger start times
                star.style.animationDelay = (Math.random() * 1) + 's';

                particleContainer.appendChild(star);
            }

            // Trigger website reveal as you "arrive" at galaxy center
            setTimeout(() => {
                // Add gentle glow effect at arrival
                introOverlay.classList.add('galaxy-arrival');

                setTimeout(() => {
                    introOverlay.style.opacity = '0';
                    mainContent.classList.add('main-content-visible');
                    body.classList.remove('intro-active');

                    setTimeout(() => {
                        introOverlay.style.display = 'none';
                        particleContainer.innerHTML = '';
                    }, 1500);
                }, 300);
            }, 2200); // Arrival moment
        };
    }
    // --- END INTRO VIDEO LOGIC ---

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
// --- MOBILE NAV TOGGLE ---
function toggleMenu() {
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav) {
        mobileNav.classList.toggle('active');
    }
}
// --- END MOBILE NAV TOGGLE ---
