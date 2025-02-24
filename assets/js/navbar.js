document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menuItems = document.querySelector(".menu_items");

  hamburger.addEventListener("click", function () {
    // Toggle active classes
    hamburger.classList.toggle("active");
    menuItems.classList.toggle("active");
    contactUs.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !menuItems.contains(event.target) &&
      !hamburger.contains(event.target) &&
      menuItems.classList.contains("active")
    ) {
      hamburger.classList.remove("active");
      menuItems.classList.remove("active");
      contactUs.classList.remove("active");
    }
  });
});
