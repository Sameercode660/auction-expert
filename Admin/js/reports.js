document.getElementById("reportFilter").addEventListener("change", function() {
    let filterValue = this.value;
    let rows = document.querySelectorAll("#reportData tr");

    rows.forEach(row => {
        let category = row.children[1].innerText.toLowerCase();
        row.style.display = (filterValue === "all" || category === filterValue) ? "" : "none";
    });
});

document.getElementById("reportSearch").addEventListener("input", function() {
    let searchQuery = this.value.toLowerCase();
    let rows = document.querySelectorAll("#reportData tr");

    rows.forEach(row => {
        let textContent = row.innerText.toLowerCase();
        row.style.display = textContent.includes(searchQuery) ? "" : "none";
    });
});
