document.addEventListener("DOMContentLoaded", function() {
  function toggleMenu() {
      var menu = document.getElementById("mobile-menu");
      menu.classList.toggle("active"); // Menggunakan kelas active
  }

  document.querySelector(".mobile-menu-button").addEventListener("click", toggleMenu);
});
