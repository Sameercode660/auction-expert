// Toggle Mobile Menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Profile Dropdown
const profileBtn = document.getElementById('profileBtn');
const dropdownContent = document.getElementById('dropdownContent');

profileBtn.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
});

// Close Dropdown When Clicking Outside
window.addEventListener('click', (event) => {
    if (!profileBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.classList.remove('show');
    }
});


// Example script if you want to add animations or interactive features
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        alert('Redirecting you to Browse Auctions...');
    });
});

// JavaScript for the search and filter functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-btn');
    const searchBar = document.getElementById('search-bar');
    const categoryFilter = document.getElementById('category');
    const priceRangeFilter = document.getElementById('price-range');
    const auctionTypeFilter = document.getElementById('auction-type');

    // Search Button Click Event
    searchButton.addEventListener('click', () => {
        const query = searchBar.value;
        const category = categoryFilter.value;
        const priceRange = priceRangeFilter.value;
        const auctionType = auctionTypeFilter.value;

        // Log selected filters and search query (You can use this to make API calls)
        console.log(`Searching for: ${query}`);
        console.log(`Category: ${category}`);
        console.log(`Price Range: ${priceRange}`);
        console.log(`Auction Type: ${auctionType}`);

        // You can replace the console.log() above with your filter logic
    });

    // Optionally, handle pressing "Enter" on the search bar
    searchBar.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();  // Trigger search when Enter key is pressed
        }
    });
});


// JavaScript to handle "Place Your Bid" button click
document.querySelectorAll('.bid-btn').forEach(button => {
    button.addEventListener('click', function () {
        alert('You are now bidding on this item!');
        // You can add more functionality like redirecting to a bidding page
    });
});


// Get modal element
const modal = document.getElementById('bidModal');

// Get open modal button
const bidBtn = document.getElementById('placeBidBtn');

// Get close button
const closeBtn = document.getElementById('closeBtn');

// Get confirmation message element
const confirmationMessage = document.getElementById('confirmationMessage');

// Open modal when "Place Your Bid" button is clicked
bidBtn.addEventListener('click', function () {
    modal.style.display = 'block';
});

// Close modal when "X" (close) button is clicked
closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    confirmationMessage.textContent = '';
});

// Close modal if the user clicks outside of the modal
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        confirmationMessage.textContent = '';
    }
});

// Handle the bid form submission
document.getElementById('bidForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const bidAmount = document.getElementById('bidAmount').value;
    if (bidAmount) {
        confirmationMessage.textContent = `Your bid of ₹${bidAmount} has been placed successfully!`;
        document.getElementById('bidAmount').value = ''; // Clear input field
    } else {
        confirmationMessage.textContent = 'Please enter a valid bid amount!';
    }
});


// Simulate bid history data
const bidHistoryData = [
    { bidder: "Ram Lal", amount: 35000, time: "2025-02-01 10:30:00" },
    { bidder: "Ashok Tata", amount: 36000, time: "2025-02-01 11:00:00" },
    { bidder: "Nitin Ambani", amount: 37000, time: "2025-02-01 11:30:00" },
    { bidder: "Omkar Kadam", amount: 38000, time: "2025-02-01 12:00:00" },
    { bidder: "Raj Singh", amount: 39000, time: "2025-02-01 12:30:00" },
];

// Function to populate bid history table dynamically
function populateBidHistory() {
    const bidHistoryContainer = document.getElementById('bidHistory');

    bidHistoryData.forEach(bid => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${bid.bidder}</td>
            <td>₹${bid.amount}</td>
            <td>${bid.time}</td>
        `;
        bidHistoryContainer.appendChild(row);
    });
}

// Call the function to populate the bid history table on page load
window.onload = populateBidHistory;
