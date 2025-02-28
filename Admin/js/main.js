// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
let darkMode = localStorage.getItem("darkMode") === "enabled";

function enableDarkMode() {
    document.body.style.backgroundColor = "#222";
    localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
    document.body.style.backgroundColor = "#fff";
    localStorage.setItem("darkMode", "disabled");
}

darkModeToggle.addEventListener("click", () => {
    darkMode = !darkMode;
    darkMode ? enableDarkMode() : disableDarkMode();
});

// Notifications Click Event
document.querySelector(".notifications").addEventListener("click", () => {
    alert("You have 3 new notifications!");
});


// Dynamic Welcome Message Based on Time
function updateWelcomeMessage() {
    const welcomeText = document.querySelector(".hero-content h1");
    let currentTime = new Date().getHours();
    
    if (currentTime < 12) {
        welcomeText.innerHTML = `<i class="fas fa-user-shield"></i> Good Morning, Admin!`;
    } else if (currentTime < 18) {
        welcomeText.innerHTML = `<i class="fas fa-user-shield"></i> Good Afternoon, Admin!`;
    } else {
        welcomeText.innerHTML = `<i class="fas fa-user-shield"></i> Good Evening, Admin!`;
    }
}

// Update stats dynamically (Example: Fetch from backend)
function updateStats() {
    document.querySelector(".stat-box:nth-child(1) h2").innerText = Math.floor(Math.random() * 30);
    document.querySelector(".stat-box:nth-child(2) h2").innerText = Math.floor(Math.random() * 2000);
    document.querySelector(".stat-box:nth-child(3) h2").innerText = "₹" + (Math.random() * 5).toFixed(2) + "M";
    document.querySelector(".stat-box:nth-child(4) h2").innerText = Math.floor(Math.random() * 1000);
}

// Run functions on load
window.onload = function () {
    updateWelcomeMessage();
    updateStats();
};



document.addEventListener("DOMContentLoaded", function () {
    const auctionData = [
        { item: "Rolex Watch", bid: "₹1,50,000", bidder: "JohnDoe_92", status: "active", time: "10m 30s" },
        { item: "Tesla Model X", bid: "₹80,00,000", bidder: "EliteBidder", status: "ending-soon", time: "2m 15s" },
        { item: "Antique Painting", bid: "₹12,50,000", bidder: "ArtLover", status: "closed", time: "Ended" },
        { item: "iPhone 15 Pro Max", bid: "₹1,10,000", bidder: "TechGuru", status: "active", time: "25m 45s" }
    ];

    const auctionList = document.getElementById("auction-list");

    auctionData.forEach(auction => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${auction.item}</td>
            <td>${auction.bid}</td>
            <td>${auction.bidder}</td>
            <td><span class="status ${auction.status}">${auction.status.replace("-", " ")}</span></td>
            <td>${auction.time}</td>
            <td>
                <a href="#" class="action-btn view-btn"><i class="fas fa-eye"></i> View</a>
                ${auction.status === "active" ? '<a href="#" class="action-btn stop-btn"><i class="fas fa-stop-circle"></i> Stop</a>' : ""}
            </td>
        `;
        auctionList.appendChild(row);
    });

    // Live Timer Simulation (Updating every second)
    setInterval(() => {
        let timeCells = document.querySelectorAll("td:nth-child(5)");
        timeCells.forEach(cell => {
            if (cell.innerText.includes("m") && cell.innerText !== "Ended") {
                let [minutes, seconds] = cell.innerText.split("m ");
                seconds = parseInt(seconds.replace("s", ""));
                minutes = parseInt(minutes);

                if (seconds === 0) {
                    if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                    } else {
                        cell.innerText = "Ended";
                        cell.parentElement.querySelector(".status").classList.remove("active", "ending-soon");
                        cell.parentElement.querySelector(".status").classList.add("closed");
                        cell.parentElement.querySelector(".status").innerText = "Closed";
                    }
                } else {
                    seconds--;
                }
                cell.innerText = `${minutes}m ${seconds}s`;
            }
        });
    }, 1000);
});



document.addEventListener("DOMContentLoaded", function () {
    const usersData = [
        { username: "john_doe", email: "john@example.com", role: "Bidder", status: "active" },
        { username: "elite_auctioneer", email: "elite@example.com", role: "Seller", status: "suspended" },
        { username: "admin_master", email: "admin@example.com", role: "Admin", status: "active" },
        { username: "banned_user", email: "banned@example.com", role: "Bidder", status: "banned" }
    ];

    const userList = document.getElementById("user-list");

    function renderUsers() {
        userList.innerHTML = "";
        usersData.forEach(user => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td><span class="status ${user.status}">${user.status.charAt(0).toUpperCase() + user.status.slice(1)}</span></td>
                <td>
                    ${user.status === "active" ? 
                        '<a href="#" class="action-btn block-btn" onclick="changeStatus(\'' + user.username + '\', \'suspended\')"><i class="fas fa-user-slash"></i> Block</a>' : 
                        '<a href="#" class="action-btn unblock-btn" onclick="changeStatus(\'' + user.username + '\', \'active\')"><i class="fas fa-user-check"></i> Unblock</a>'}
                </td>
            `;
            userList.appendChild(row);
        });
    }

    window.changeStatus = function(username, newStatus) {
        let user = usersData.find(u => u.username === username);
        if (user) {
            user.status = newStatus;
            renderUsers();
        }
    };

    renderUsers();
});

// Search Users
function searchUsers() {
    let input = document.getElementById("searchUser").value.toLowerCase();
    let rows = document.querySelectorAll("#user-list tr");
    rows.forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(input) ? "" : "none";
    });
}



document.addEventListener("DOMContentLoaded", function () {
    const auctions = [
        { item: "Rolex Watch", price: "₹50,000", status: "live" },
        { item: "Vintage Car", price: "₹5,00,000", status: "upcoming" },
        { item: "Luxury Handbag", price: "₹30,000", status: "ended" }
    ];

    const auctionList = document.getElementById("auction-list");

    function renderAuctions() {
        auctionList.innerHTML = "";
        auctions.forEach((auction, index) => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${auction.item}</td>
                <td>${auction.price}</td>
                <td>${auction.status.charAt(0).toUpperCase() + auction.status.slice(1)}</td>
                <td>
                    <button onclick="deleteAuction(${index})" class="delete-btn"><i class="fas fa-trash"></i></button>
                </td>
            `;
            auctionList.appendChild(row);
        });
    }

    window.deleteAuction = function (index) {
        auctions.splice(index, 1);
        renderAuctions();
    };

    renderAuctions();
});

// Modal Functions
function openModal() {
    document.getElementById("auctionModal").style.display = "block";
}

function closeModal() {
    document.getElementById("auctionModal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const history = [
        { item: "Luxury Watch", bid: "₹75,000", status: "Won", date: "2025-02-15" },
        { item: "Vintage Car", bid: "₹5,50,000", status: "Lost", date: "2025-02-12" },
        { item: "Rare Painting", bid: "₹1,20,000", status: "Won", date: "2025-02-10" }
    ];

    const historyList = document.getElementById("history-list");

    function renderHistory() {
        historyList.innerHTML = "";
        history.forEach((record) => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${record.item}</td>
                <td>${record.bid}</td>
                <td>${record.status}</td>
                <td>${record.date}</td>
            `;
            historyList.appendChild(row);
        });
    }

    function searchHistory() {
        let input = document.getElementById("searchHistory").value.toLowerCase();
        let rows = historyList.getElementsByTagName("tr");

        for (let i = 0; i < rows.length; i++) {
            let item = rows[i].getElementsByTagName("td")[0].textContent.toLowerCase();
            let bid = rows[i].getElementsByTagName("td")[1].textContent.toLowerCase();

            if (item.includes(input) || bid.includes(input)) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }

    renderHistory();
});



document.addEventListener("DOMContentLoaded", function () {
    // Dummy Data for Reports
    const totalAuctions = 120;
    const totalBidders = 300;
    const totalRevenue = "₹12,50,000";

    // Update Summary Cards
    document.getElementById("total-auctions").textContent = totalAuctions;
    document.getElementById("total-bidders").textContent = totalBidders;
    document.getElementById("total-revenue").textContent = totalRevenue;

    // Chart.js - Bidding Activity
    const bidsCtx = document.getElementById("bidsChart").getContext("2d");
    new Chart(bidsCtx, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "Bids Placed",
                data: [20, 50, 80, 150, 200, 250],
                borderColor: "#ffcc00",
                backgroundColor: "rgba(255, 204, 0, 0.2)",
                fill: true,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Chart.js - Revenue Growth
    const revenueCtx = document.getElementById("revenueChart").getContext("2d");
    new Chart(revenueCtx, {
        type: "bar",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "Revenue (₹)",
                data: [100, 200, 3500, 500, 750, 1000],
                backgroundColor: "#ffcc00",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Mock Data
    const reportData = [
        { item: "Luxury Watch", bids: 15, highestBid: "₹80,000", winner: "John Doe", date: "2025-02-15" },
        { item: "Vintage Car", bids: 25, highestBid: "₹5,75,000", winner: "Emily Smith", date: "2025-02-10" },
        { item: "Antique Painting", bids: 10, highestBid: "₹1,30,000", winner: "Robert Brown", date: "2025-02-08" }
    ];

    // Statistics
    const totalAuctions = reportData.length;
    const totalBids = reportData.reduce((acc, bid) => acc + bid.bids, 0);
    const totalRevenue = reportData.reduce((acc, bid) => acc + parseInt(bid.highestBid.replace("₹", "").replace(",", "")), 0);
    const activeUsers = 120; // Mock Active Users Count

    // Update Statistics
    document.getElementById("total-auctions").innerText = totalAuctions;
    document.getElementById("total-bids").innerText = totalBids;
    document.getElementById("total-revenue").innerText = `₹${totalRevenue.toLocaleString()}`;
    document.getElementById("active-users").innerText = activeUsers;

    // Populate Table
    const reportList = document.getElementById("report-list");
    reportData.forEach((report) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${report.item}</td>
            <td>${report.bids}</td>
            <td>${report.highestBid}</td>
            <td>${report.winner}</td>
            <td>${report.date}</td>
        `;
        reportList.appendChild(row);
    });
});

// Search Filter
function filterReports() {
    let input = document.getElementById("searchReports").value.toLowerCase();
    let rows = document.querySelectorAll("#report-list tr");

    rows.forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(input) ? "" : "none";
    });
}




// Event Listeners for CTA Buttons
document.getElementById('manage-auctions-btn').addEventListener('click', function() {
    window.location.href = 'manage-auctions.html'; // Redirect to Manage Auctions page
});

document.getElementById('view-reports-btn').addEventListener('click', function() {
    window.location.href = 'view-reports.html'; // Redirect to View Reports page
});

document.getElementById('user-management-btn').addEventListener('click', function() {
    window.location.href = 'user-management.html'; // Redirect to User Management page
});



// Scroll to Top Functionality
document.addEventListener("DOMContentLoaded", function () {
    let scrollTopBtn = document.createElement("button");
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.classList.add("scroll-top-btn");
    document.body.appendChild(scrollTopBtn);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
