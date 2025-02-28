document.addEventListener("DOMContentLoaded", () => {
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const passwordStrengthMeter = document.getElementById("password-strength");

    // Toggle password visibility
    togglePassword.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            passwordInput.type = "password";
            togglePassword.classList.replace("fa-eye-slash", "fa-eye");
        }
    });

    // Password strength meter
    passwordInput.addEventListener("input", () => {
        const passwordValue = passwordInput.value;
        const strength = getPasswordStrength(passwordValue);

        if (strength === "weak") {
            passwordStrengthMeter.classList.add("strength-weak");
            passwordStrengthMeter.classList.remove("strength-medium", "strength-strong");
        } else if (strength === "medium") {
            passwordStrengthMeter.classList.add("strength-medium");
            passwordStrengthMeter.classList.remove("strength-weak", "strength-strong");
        } else if (strength === "strong") {
            passwordStrengthMeter.classList.add("strength-strong");
            passwordStrengthMeter.classList.remove("strength-weak", "strength-medium");
        }
    });

    // Form validation on submit
    document.getElementById("signupForm").addEventListener("submit", (event) => {
        const email = document.getElementById("email").value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (!email.includes("@") || password.length < 6 || password !== confirmPassword) {
            event.preventDefault();
            alert("Please check your details. Ensure passwords match and are at least 6 characters long.");
        }
    });
});

// Password strength check function
function getPasswordStrength(password) {
    if (password.length < 6) return "weak";
    if (password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/)) return "strong";
    return "medium";
}
