function toggleEmail() {
    const emailElement = document.getElementById("email-address");
    if (emailElement.style.display === "none") {
        emailElement.style.display = "block";
    } else {
        emailElement.style.display = "none";
    }
}