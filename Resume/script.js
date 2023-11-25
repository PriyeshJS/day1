function toggleDetails() {
    var details = document.getElementById("details");

    // Toggle the display property between "block" and "none"
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block"; // If hidden, make it visible
    } else {
        details.style.display = "none"; // If visible, hide it
    }
}
