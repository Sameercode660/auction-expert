document.addEventListener("DOMContentLoaded", () => {
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");

    forgotPasswordForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;

        // Basic email validation
        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        // Display success message (this can be replaced with an actual backend call)
        alert("Password reset link sent to " + email);

        // Optionally clear the form after submission
        forgotPasswordForm.reset();
    });
});
