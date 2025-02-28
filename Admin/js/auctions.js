// Sample Auctions Data
let auctions = [
    { id: 1, item: "Rolex Watch", startPrice: "₹50000", currentBid: "₹70000", status: "Live" },
    { id: 2, item: "iPhone 15 Pro", startPrice: "₹120000", currentBid: "₹140000", status: "Live" },
    { id: 3, item: "Luxury Car", startPrice: "₹500000", currentBid: "₹700000", status: "Upcoming" }
];

// Load Auctions into Table
function loadAuctions() {
    let tbody = document.getElementById("auctionTableBody");
    tbody.innerHTML = "";

    auctions.forEach((auction, index) => {
        let row = `<tr>
            <td>${auction.id}</td>
            <td>${auction.item}</td>
            <td>${auction.startPrice}</td>
            <td>${auction.currentBid}</td>
            <td>${auction.status}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editAuction(${index})"><i class="fas fa-edit"></i></button>
                <button class="action-btn delete-btn" onclick="deleteAuction(${index})"><i class="fas fa-trash"></i></button>
            </td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

// Open Modal
function openModal() {
    document.getElementById("auctionModal").style.display = "flex";
}

// Close Modal
function closeModal() {
    document.getElementById("auctionModal").style.display = "none";
}

// Delete Auction
function deleteAuction(index) {
    auctions.splice(index, 1);
    loadAuctions();
}

// Initial Load
window.onload = loadAuctions;
