function toggleMenu(el) {
  el.classList.toggle("active");
  document.getElementById("mobileMenu").classList.toggle("open");
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 700) {
    document.getElementById("mobileMenu").classList.remove("open");
    document.querySelector(".burger").classList.remove("active");
  }
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("mobileMenu").classList.remove("open");
    document.querySelector(".burger").classList.remove("active");
  });
});