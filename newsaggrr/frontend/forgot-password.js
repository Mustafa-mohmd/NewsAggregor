document.addEventListener('DOMContentLoaded', function() {
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    
    function showError(message) {
        const errorElement = document.getElementById('emailError');
        errorElement.textContent = message;
        errorElement.classList.add('visible');
    }
    
    function clearError() {
        const errorElement = document.getElementById('emailError');
        errorElement.textContent = '';
        errorElement.classList.remove('visible');
    }
    
    forgotPasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        clearError();
        
        const email = document.getElementById('email').value.trim();
        
        if (!email) {
            showError('Please enter your email address');
            return;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            showError('Please enter a valid email address');
            return;
        }
        
        // Here you would typically send a password reset request to your backend
        console.log('Password reset requested for:', email);
        
        // Show success message
        alert('If an account exists for ' + email + ', you will receive password reset instructions.');
        
        // Redirect to login page after a short delay
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    });
});