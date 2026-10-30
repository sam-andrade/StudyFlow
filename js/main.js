const menuButton = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuButton.addEventListener("click", () => {

    const isOpen = navbar.classList.toggle("menu-open");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
    );

});

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navbar.classList.remove("menu-open");

        menuButton.textContent = "☰";

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.setAttribute("aria-label", "Abrir menu");

    });

});