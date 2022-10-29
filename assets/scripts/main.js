
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navItem1 = document.querySelector(".item1");
const navItem2 = document.querySelector(".item2");
const navItem3 = document.querySelector(".item3");
const navItem4 = document.querySelector(".item4");


navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

});


navItem1.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu_visible");
});

navItem2.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu_visible");
});


navItem3.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu_visible");
});


navItem4.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu_visible");
});