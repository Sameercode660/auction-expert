// Mobile menu toggle functionality
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
}


// Countdown Timer for Auction
function startCountdown(durationInSeconds) {
    let timer = durationInSeconds;

    function updateTimerDisplay() {
        const days = Math.floor(timer / (60 * 60 * 24));
        const hours = Math.floor((timer % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((timer % (60 * 60)) / 60);
        const seconds = timer % 60;

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

        if (timer > 0) {
            timer--;
            setTimeout(updateTimerDisplay, 1000);
        }
    }

    updateTimerDisplay();
}

// Start the countdown with a 3-day duration
startCountdown(3 * 24 * 60 * 60);


// Live Search & Filter Function
function filterAuctions() {
    let searchQuery = document.getElementById("search-input").value.toLowerCase();
    let selectedCategory = document.getElementById("category").value;
    let maxPrice = document.getElementById("price-range").value;

    console.log("Filtering with:", { searchQuery, selectedCategory, maxPrice });

    // Simulating filtering - replace this with actual auction items filtering
    document.querySelectorAll(".auction-item").forEach(item => {
        let itemName = item.getAttribute("data-name").toLowerCase();
        let itemCategory = item.getAttribute("data-category");
        let itemPrice = parseInt(item.getAttribute("data-price"));

        if ((searchQuery === "" || itemName.includes(searchQuery)) &&
            (selectedCategory === "all" || itemCategory === selectedCategory) &&
            (itemPrice <= maxPrice)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// Update Price Display
function updatePriceValue(value) {
    document.getElementById("price-value").textContent = `₹${parseInt(value).toLocaleString()}`;
}


// Countdown Timer Function
function startAuctionCountdown() {
    document.querySelectorAll(".time-remaining").forEach(item => {
        let timeLeft = parseInt(item.getAttribute("data-time"));
        let timerElement = item.querySelector(".timer");

        let interval = setInterval(() => {
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;
            timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

            if (timeLeft <= 0) {
                clearInterval(interval);
                timerElement.textContent = "Auction Ended";
                item.style.color = "red";
            }

            timeLeft--;
        }, 1000);
    });
}

// Simulate Bid Update (Random Increment)
function simulateBidUpdates() {
    setInterval(() => {
        document.querySelectorAll(".auction-item").forEach(item => {
            let bidElement = item.querySelector(".bid-amount");
            let currentBid = parseInt(bidElement.textContent.replace(/₹|,/g, ""));
            let newBid = currentBid + Math.floor(Math.random() * 50000 + 10000); // Increase bid randomly
            bidElement.textContent = `₹${newBid.toLocaleString()}`;
        });
    }, 5000); // Update every 5 seconds
}

// Initialize Functions
document.addEventListener("DOMContentLoaded", () => {
    startAuctionCountdown();
    simulateBidUpdates();
});


// Countdown Timer Function
function startAuctionCountdown() {
    document.querySelectorAll(".time-remaining").forEach(item => {
        let timeLeft = parseInt(item.getAttribute("data-time"));
        let timerElement = item.querySelector(".timer");

        let interval = setInterval(() => {
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;
            timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

            if (timeLeft <= 0) {
                clearInterval(interval);
                timerElement.textContent = "Auction Ended";
                item.style.color = "red";
            }

            timeLeft--;
        }, 1000);
    });
}

// Simulate Bid Updates (Random Increment)
function simulateBidUpdates() {
    setInterval(() => {
        document.querySelectorAll(".auction-item").forEach(item => {
            let bidElement = item.querySelector(".bid-amount");
            let currentBid = parseInt(bidElement.textContent.replace(/₹|,/g, ""));
            let newBid = currentBid + Math.floor(Math.random() * 50000 + 10000);
            bidElement.textContent = `₹${newBid.toLocaleString()}`;
        });
    }, 5000);
}

// Carousel Functionality
const container = document.querySelector(".auction-container");
const prevBtn = docu


// Countdown Timer Function for Upcoming Auctions
function startUpcomingAuctionCountdown() {
    document.querySelectorAll(".auction-card").forEach(card => {
        let timeLeft = parseInt(card.getAttribute("data-time"));
        let countdownElement = card.querySelector(".countdown");

        let interval = setInterval(() => {
            let hours = Math.floor(timeLeft / 3600);
            let minutes = Math.floor((timeLeft % 3600) / 60);
            let seconds = timeLeft % 60;

            countdownElement.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

            if (timeLeft <= 0) {
                clearInterval(interval);
                countdownElement.textContent = "Auction Started!";
                card.style.border = "2px solid red";
            }

            timeLeft--;
        }, 1000);
    });
}

// Notify Button Click Event
document.addEventListener("DOMContentLoaded", () => {
    startUpcomingAuctionCountdown();

    document.querySelectorAll(".notify-button").forEach(button => {
        button.addEventListener("click", () => {
            alert("You will be notified when the auction starts!");
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    console.log("CTA Section Loaded!");
});

// JavaScript for Footer (if needed)
document.addEventListener("DOMContentLoaded", () => {
    console.log("Footer Section Loaded!");
});
