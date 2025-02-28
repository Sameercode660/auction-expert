// Sample Live Bids Data
const liveBids = [
    { item: "Rolex Watch", bidder: "User123", amount: "₹55,000", time: "2m ago", status: "Active" },
    { item: "iPhone 14 Pro", bidder: "BidderX", amount: "₹80,000", time: "5m ago", status: "Active" },
    { item: "MacBook Air", bidder: "TechGuru", amount: "₹90,000", time: "10m ago", status: "Closed" }
];

// Function to load live bids
function loadLiveBids() {
    const bidList = document.getElementById("bidList");
    bidList.innerHTML = ""; // Clear existing data

    liveBids.forEach(bid => {
        const row = `
            <tr>
                <td>${bid.item}</td>
                <td>${bid.bidder}</td>
                <td>${bid.amount}</td>
                <td>${bid.time}</td>
                <td>${bid.status}</td>
            </tr>
        `;
        bidList.innerHTML += row;
    });
}

// Function to filter bids
function filterBids() {
    const searchText = document.getElementById("searchBid").value.toLowerCase();
    const filteredBids = liveBids.filter(bid => bid.item.toLowerCase().includes(searchText) || bid.bidder.toLowerCase().includes(searchText));

    const bidList = document.getElementById("bidList");
    bidList.innerHTML = ""; // Clear previous list

    filteredBids.forEach(bid => {
        const row = `
            <tr>
                <td>${bid.item}</td>
                <td>${bid.bidder}</td>
                <td>${bid.amount}</td>
                <td>${bid.time}</td>
                <td>${bid.status}</td>
            </tr>
        `;
        bidList.innerHTML += row;
    });
}

// Load bids on page load
window.onload = loadLiveBids;
