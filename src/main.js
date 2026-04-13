/* main.js */
import "flowbite";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 800,
  once: true,
  offset: 100,
  easing: "ease-in-out",
  disable: "phone",
});
document.addEventListener("click", (e) => {
  const menu = document.getElementById("navbar-cta");
  const button = document.querySelector("[data-collapse-toggle='navbar-cta']");

  const isOpen = !menu.classList.contains("hidden");

  if (!isOpen) return;

  // linke tıklandıysa veya dışarı tıklandıysa kapat
  if (
    e.target.closest("#navbar-cta a") ||
    (!e.target.closest("#navbar-cta") &&
      !e.target.closest("[data-collapse-toggle]"))
  ) {
    button.click();
  }
});
