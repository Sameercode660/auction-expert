document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    alert("Password reset link has been sent to your email!");
});

// Email Validation Function
function validateEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
