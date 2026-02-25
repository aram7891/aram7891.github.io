import "./styles.css";
import { initLab } from "./lab.js";

function initMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const closeBtn = document.getElementById("mobileMenuClose");
  const links = document.querySelectorAll(".mobile-menu-link");

  const toggle = () => menu.classList.toggle("hidden");

  toggleBtn.addEventListener("click", toggle);
  closeBtn.addEventListener("click", toggle);
  links.forEach((link) => link.addEventListener("click", toggle));
}

document.addEventListener("DOMContentLoaded", () => {
  initLab();
  initMobileMenu();
});
