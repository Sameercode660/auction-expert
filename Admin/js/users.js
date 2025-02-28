// Search Users Function
function searchUsers() {
    let input = document.getElementById("searchUser").value.toLowerCase();
    let rows = document.querySelectorAll("#usersList tr");

    rows.forEach(row => {
        let name = row.getElementsByTagName("td")[1].innerText.toLowerCase();
        if (name.includes(input)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

// Filter Users by Role
function filterUsers() {
    let filterValue = document.getElementById("filterRole").value.toLowerCase();
    let rows = document.querySelectorAll("#usersList tr");

    rows.forEach(row => {
        let role = row.getElementsByTagName("td")[3].innerText.toLowerCase();
        if (filterValue === "all" || role === filterValue) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

// Handle Delete, Block, Edit Buttons
document.querySelectorAll(".edit-btn").forEach(button => {
    button.addEventListener("click", () => alert("Edit user feature coming soon!"));
});

document.querySelectorAll(".delete-btn").forEach(button => {
    button.addEventListener("click", () => alert("User deleted successfully!"));
});

document.querySelectorAll(".block-btn").forEach(button => {
    button.addEventListener("click", () => alert("User blocked successfully!"));
});
