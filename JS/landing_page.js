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

//NAVBAR
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // This triggers the X animation
    navMenu.classList.toggle('active');    // This slides the menu in
});

// Close menu when a link is clicked
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
let lastScrollY = window.scrollY;
let ticking = false;
const header = document.querySelector("header");

function updateNavbar() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Fast hide on scroll down
        header.classList.add("nav-hidden");
    } else {
        // Fast show on scroll up
        header.classList.remove("nav-hidden");
    }

    lastScrollY = currentScrollY;
    ticking = false;
}

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("nav-hidden");
    } else {
        header.classList.remove("nav-hidden");
    }
});
    if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
    }

    