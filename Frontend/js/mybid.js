// Function to place a bid
function placeBid() {
    const bidAmount = document.getElementById('bid-amount').value;
    const currentBid = 50000; // Example current bid, can be dynamic

    if (bidAmount > currentBid) {
        alert("Congratulations! You've placed a bid of ₹" + bidAmount);
        // Update the current bid (this would ideally be done through an API in a real-world project)
        document.querySelector('.item-info h3').textContent = `Current Bid: ₹${bidAmount}`;
    } else {
        alert("Your bid must be higher than the current bid.");
    }

    // Reset bid input field
    document.getElementById('bid-amount').value = '';
}

// Function to update the time remaining (this would normally be dynamic)
setInterval(function() {
    const timeLeftElement = document.getElementById('time-left');
    let timeLeft = timeLeftElement.textContent;

    // Logic to decrease the time remaining (simplified)
    let [hours, minutes] = timeLeft.split('h').map(e => e.trim());
    minutes = parseInt(minutes.replace('m', '').trim());

    if (minutes === 0 && hours > 0) {
        hours -= 1;
        minutes = 59;
    } else if (minutes > 0) {
        minutes -= 1;
    }

    timeLeftElement.textContent = `${hours}h ${minutes}m`;

}, 60000); // Update every minute
