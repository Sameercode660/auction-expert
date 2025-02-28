document.addEventListener("DOMContentLoaded", function() {
    
    // Save Profile Settings
    document.querySelectorAll(".save-btn").forEach(button => {
        button.addEventListener("click", function() {
            alert("Settings updated successfully!");
        });
    });

    // Dark Mode Toggle
    document.getElementById("dark-mode-toggle").addEventListener("change", function() {
        document.body.classList.toggle("dark-mode");
    });

});

// Dark Mode CSS Toggle
const darkModeCSS = document.createElement("style");
darkModeCSS.innerHTML = `
    .dark-mode {
        background: #111 !important;
        color: #ffcc00 !important;
    }
`;
document.head.appendChild(darkModeCSS);
