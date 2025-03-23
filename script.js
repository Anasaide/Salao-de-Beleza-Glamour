

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector(".main-nav ul");
  
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("show");
    });
  });
  