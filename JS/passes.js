document.querySelectorAll('.buy-now-trigger').forEach(button => {
    button.addEventListener('click', (e) => {
        // Find the title within the same card
        const passName = button.closest('.pass-card').querySelector('.pass-title').innerText;
        alert(`Redirecting to payment for ${passName}...`);
    });
});
// --- MOBILE NAV TOGGLE ---
function toggleMenu() {
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav) {
        mobileNav.classList.toggle('active');
    }
}
// --- END MOBILE NAV TOGGLE ---