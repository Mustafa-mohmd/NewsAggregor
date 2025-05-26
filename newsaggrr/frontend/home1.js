document.addEventListener('DOMContentLoaded', function () {
    // Dynamic Auth Links
    const authContainer = document.getElementById('authLinks');
    const user = JSON.parse(localStorage.getItem('user'));

    if (authContainer) {
        if (user) {
            authContainer.innerHTML = `
                <span>Welcome, Admin</span>
                <button id="logoutBtn" class="logout-btn">Logout</button>
            `;
        } else {
            authContainer.innerHTML = `
                <div class="auth-links">
                        <a href="login.html" class="login-btn">Login</a>
                        <a href="signup.html" class="signup-btn">Signup</a>
                </div>
            `;
        }
    }

    // Handle Logout Button
    document.addEventListener('click', function (e) {
        if (e.target && e.target.id === 'logoutBtn') {
            localStorage.removeItem('user');
            window.location.href = 'login.html';
        }
    });

    // Navigation links handler
    const navLinks = document.querySelectorAll('nav ul li a');
    const categoryButtons = document.querySelectorAll('.category-filter .category-btn');
    const footerLinks = document.querySelectorAll('.footer-column ul li a');

    function handleNavigation(event) {
        const href = event.target.getAttribute('href');

        if (href && href !== '#' && !href.startsWith('#')) {
            event.preventDefault();
            window.location.href = href;
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    footerLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const pageLink = this.getAttribute('data-page');
            if (pageLink) {
                window.location.href = pageLink;
            }
        });
    });

    // User profile dropdown toggle
    const userProfile = document.getElementById('userProfile');
    const userDropdown = document.getElementById('userDropdown');

    if (userProfile && userDropdown) {
        userProfile.addEventListener('click', function () {
            userDropdown.classList.toggle('show');
        });

        document.addEventListener('click', function (event) {
            if (!userProfile.contains(event.target)) {
                userDropdown.classList.remove('show');
            }
        });
    }
});
