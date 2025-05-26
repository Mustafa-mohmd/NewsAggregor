<script>
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const signupLink = document.getElementById('signupLink');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');

    if (loginForm) {
        loginForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const email = document.getElementById('email')?.value.trim();
            const password = document.getElementById('password')?.value;

            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }

            try {
                const response = await fetch('http://localhost:5000/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    localStorage.setItem('user', JSON.stringify(result));
                    alert('Login successful!');
                    window.location.href = './home1.html';
                } else {
                    alert(result.message || 'Invalid email or password');
                }
            } catch (err) {
                console.error('Login error:', err);
                alert('Something went wrong. Please try again later.');
            }
        });
    }

    if (signupLink) {
        signupLink.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = './signup.html';
        });
    }

    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Password recovery functionality will be added soon.');
        });
    }
});
</script>
