document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Form validation
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Simulate form submission
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    document.getElementById("contactForm").reset();
});
