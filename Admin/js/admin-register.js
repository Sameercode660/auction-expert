// Toggle Password Visibility
function togglePassword() {
    let passwordInput = document.getElementById("password");
    let toggleIcon = passwordInput.nextElementSibling;

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    }
}

// Toggle Confirm Password Visibility
function toggleConfirmPassword() {
    let confirmPasswordInput = document.getElementById("confirmPassword");
    let toggleIcon = confirmPasswordInput.nextElementSibling;

    if (confirmPasswordInput.type === "password") {
        confirmPasswordInput.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    } else {
        confirmPasswordInput.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    }
}

// Form Validation & Registration
document.getElementById("adminRegisterForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let fullName = document.getElementById("fullName");
    let email = document.getElementById("email");
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");

    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match!");
        confirmPassword.classList.add("error");
        return;
    }

    alert("Registration Successful! Redirecting to login page...");
    window.location.href = "admin_login.html";
});
