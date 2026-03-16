document.addEventListener('DOMContentLoaded', () => {
    const clickSound = document.getElementById('clickSound');

    document.querySelectorAll('.toggle-bio').forEach(button => {
        button.addEventListener('click', () => {
            // Play the click sound
            clickSound.currentTime = 0; // restart sound if already playing
            clickSound.play();

            // Toggle bio
            const bio = document.getElementById(button.getAttribute('aria-controls'));
            const isHidden = bio.hasAttribute('hidden');

            bio.hidden = !isHidden;
            button.textContent = isHidden ? 'Hide Bio' : 'Show Bio';
            button.setAttribute('aria-expanded', isHidden);
        });
    });
});

const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    const expanded = nav.classList.contains('active');
    navToggle.setAttribute('aria-expanded', expanded);
});