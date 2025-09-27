function toggleMenu() {
    const navList = document.getElementById('navList');
    const isActive = navList.classList.contains('active');
    navList.classList.toggle('active');

    // Update ARIA attributes for accessibility
    const toggle = document.querySelector('.mobile-toggle');
    toggle.setAttribute('aria-expanded', !isActive);
}

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navList').classList.remove('active');
        document.querySelector('.mobile-toggle').setAttribute('aria-expanded', 'false');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navList = document.getElementById('navList');
    const toggle = document.querySelector('.mobile-toggle');

    if (!navList.contains(e.target) && !toggle.contains(e.target)) {
        navList.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
    }
});