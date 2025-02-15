const hamburgerMenuButton = document.getElementById("hamburger-menu");
const mobileMenuDisplay = document.getElementById("mobile-menu");
const mobileMenuClose = document.getElementById("mobile-menu-close");

hamburgerMenuButton.addEventListener("click", () => {
    hamburgerMenuButton.classList.toggle("hidden");
    mobileMenuDisplay.classList.toggle("active");
    mobileMenuClose.classList.toggle("visible");
});
mobileMenuClose.addEventListener("click", () => {
    location.reload();
});