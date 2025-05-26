<script>
document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');

    if (!signupForm) {
        console.error('Signup form not found.');
        return;
    }

    // Helper to show error
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('visible');
        }
    }

    // Helper to clear error
    function clearError(elementId) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.classList.remove('visible');
        }
    }

    // Password validator
    function validatePassword(password) {
        const minLength = 8;
        const hasNumber = /\d/.test(password);
        const hasLetter = /[a-zA-Z]/.test(password);
        return password.length >= minLength && hasNumber && hasLetter;
    }

    signupForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        let isValid = true;

        // Clear all error fields
        ['nameError', 'emailError', 'passwordError', 'confirmPasswordError'].forEach(clearError);

        // Grab values
        const fullName = document.getElementById('fullName')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const password = document.getElementById('password')?.value;
        const confirmPassword = document.getElementById('confirmPassword')?.value;
        const termsAccept = document.getElementById('termsAccept')?.checked;

        // Validate full name
        if (!fullName || fullName.length < 2) {
            showError('nameError', 'Please enter your full name');
            isValid = false;
        }

        // Validate email
        if (!email || !email.includes('@') || !email.includes('.')) {
            showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }

        // Validate password
        if (!validatePassword(password)) {
            showError('passwordError', 'Password must be at least 8 characters long and include letters and numbers');
            isValid = false;
        }

        // Password match check
        if (password !== confirmPassword) {
            showError('confirmPasswordError', 'Passwords do not match');
            isValid = false;
        }

        // Check terms acceptance
        if (!termsAccept) {
            alert('Please accept the Terms of Service and Privacy Policy');
            isValid = false;
        }

        // If not valid, stop
        if (!isValid) return;

        // Submit to backend
        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ full_name: fullName, email, password })
            });

            const result = await response.json();

            if (result.success) {
                localStorage.setItem('user', JSON.stringify(result.user));
                alert('Signup successful!');
                window.location.href = './home1.html';
            } else {
                alert(result.message || 'Signup failed. Please try again.');
            }
        } catch (err) {
            console.error('Signup error:', err);
            alert('Server error. Please try again later.');
        }
    });
});
</script>
