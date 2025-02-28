// Toggle Password Visibility
function togglePassword() {
    let passwordInput = document.getElementById("password");
    let toggleIcon = document.querySelector(".toggle-password");

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

// Form Validation & Login
document.getElementById("adminLoginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let username = document.getElementById("username");
    let password = document.getElementById("password");

    // Check if fields are empty
    if (username.value.trim() === "") {
        username.classList.add("error");
        return;
    } else {
        username.classList.remove("error");
    }

    if (password.value.trim() === "") {
        password.classList.add("error");
        return;
    } else {
        password.classList.remove("error");
    }

    // Simple Login Validation
    if (username.value === "admin" && password.value === "admin123") {
        alert("Login Successful! Redirecting to dashboard...");
        window.location.href = "admin_dashboard.html"; // Redirect
    } else {
        alert("Invalid Credentials. Please try again!");
    }
});
