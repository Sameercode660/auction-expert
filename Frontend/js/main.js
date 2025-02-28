document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero-content h1");
    const heroDesc = document.querySelector(".hero-content p");

    // Add fade-in effect
    setTimeout(() => {
        heroText.style.opacity = "1";
        heroDesc.style.opacity = "1";
    }, 500);
});

document.addEventListener("DOMContentLoaded", () => {
    const bidButtons = document.querySelectorAll(".bid-btn");

    // Add real-time price updates for auction items
    setInterval(() => {
        const auctionItems = document.querySelectorAll(".auction-item");
        auctionItems.forEach((item) => {
            let bidPrice = item.querySelector(".current-bid");
            let currentPrice = parseFloat(bidPrice.textContent.replace('₹', '').replace(',', ''));
            bidPrice.textContent = `₹${(currentPrice + Math.random() * 100).toFixed(2)}`;
        });
    }, 3000); // Update every 3 seconds

    // Auction bid button interaction
    bidButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Bid placed! Good luck!');
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");

    // Adding interactive hover effect for steps
    steps.forEach((step, index) => {
        step.addEventListener('mouseenter', () => {
            step.style.transform = 'scale(1.1)';
            step.style.transition = 'transform 0.3s ease';
        });

        step.addEventListener('mouseleave', () => {
            step.style.transform = 'scale(1)';
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const features = document.querySelectorAll(".feature");

    // Adding interactive hover effect for features
    features.forEach((feature) => {
        feature.addEventListener('mouseenter', () => {
            feature.style.transform = 'scale(1.05)';
            feature.style.transition = 'transform 0.3s ease';
        });

        feature.addEventListener('mouseleave', () => {
            feature.style.transform = 'scale(1)';
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelectorAll(".testimonial");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove("active");
            if (i === index) {
                testimonial.classList.add("active");
            }
        });
    }

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }, 5000);

    // Show the first testimonial on load
    showTestimonial(currentIndex);
});

document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.querySelector(".cta-btn");

    ctaButton.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Redirecting to Auction Page...");
        window.location.href = "/Frontend/nav/Start-Bidding.html";
    });
});



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
