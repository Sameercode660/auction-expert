document.getElementById("transactionFilter").addEventListener("change", function() {
    let filterValue = this.value;
    let rows = document.querySelectorAll("#transactionData tr");

    rows.forEach(row => {
        let status = row.children[3].innerText.toLowerCase();
        row.style.display = (filterValue === "all" || status === filterValue) ? "" : "none";
    });
});

document.getElementById("transactionSearch").addEventListener("input", function() {
    let searchQuery = this.value.toLowerCase();
    let rows = document.querySelectorAll("#transactionData tr");

    rows.forEach(row => {
        let textContent = row.innerText.toLowerCase();
        row.style.display = textContent.includes(searchQuery) ? "" : "none";
    });
});
