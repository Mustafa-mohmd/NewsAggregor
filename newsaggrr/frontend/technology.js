// home1.js
document.addEventListener('DOMContentLoaded', function() {
    // Navigation links handler
    const navLinks = document.querySelectorAll('nav ul li a');
    const categoryButtons = document.querySelectorAll('.category-filter .category-btn');
    const footerLinks = document.querySelectorAll('.footer-column ul li a');

    // Unified navigation handler
    function handleNavigation(event) {
        const href = event.target.getAttribute('href');
        
        // Check if the link is to another page
        if (href && href !== '#' && !href.startsWith('#')) {
            event.preventDefault();
            window.location.href = href;
        }
    }

    // Add click event listeners to navigation elements
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    // Category buttons handler
    categoryButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');

            // Use existing onclick attribute if present (from HTML)
            const onclickAttr = this.getAttribute('onclick');
            if (onclickAttr) {
                // onclick handles navigation as specified in HTML
                return;
            }

            // Fallback to data-page attribute if present
            const pageLink = this.getAttribute('data-page');
            if (pageLink) {
                window.location.href = pageLink;
            }
        });
    });

    footerLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    // User profile dropdown toggle
    const userProfile = document.getElementById('userProfile');
    const userDropdown = document.getElementById('userDropdown');

    if (userProfile && userDropdown) {
        userProfile.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent immediate closure
            userDropdown.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!userProfile.contains(event.target)) {
                userDropdown.classList.remove('show');
            }
        });
    }

    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(event) {
            event.preventDefault();
            // Add logout logic here (e.g., clearing session, redirecting to login)
            console.log('User logged out');
            window.location.href = 'login.html';
        });
    }

    // Search functionality (added to match page features)
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');
    
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                console.log('Searching for:', searchTerm);
                // Add actual search implementation here
            }
        });

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }
});