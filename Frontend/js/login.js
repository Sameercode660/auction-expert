document.addEventListener("DOMContentLoaded", () => {
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");

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

    // Form Validation
    document.getElementById("loginForm").addEventListener("submit", (event) => {
        const email = document.getElementById("email").value;
        const password = passwordInput.value;

        if (!email.includes("@") || password.length < 6) {
            event.preventDefault();
            alert("Invalid email or password must be at least 6 characters!");
        }
    });
});
