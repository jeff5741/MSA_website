document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle the mobile menu on button click
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        // Add a class for styling if needed
        navMenu.classList.toggle('active');
    });

    // Hide the menu when a link is clicked (for a smooth single-page experience)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.style.display = 'none';
                navMenu.classList.remove('active');
            }
        });
    });

    // Optional: Close menu if the user resizes the window back to desktop view
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.style.display = 'flex';
        } else {
            navMenu.style.display = 'none';
        }
    });
});