const menu = document.getElementById("menu");
const btn = document.getElementById("menu-button");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});