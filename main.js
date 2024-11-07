const hamMenu = document.querySelector(".header_hamMenu");
const mobileMenuCont = document.querySelector(".header_mobileMenuContainer");
const mobileMenu = document.querySelector(".header_mobileMenu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    mobileMenuCont.classList.toggle("active");
    mobileMenu.classList.toggle("active");    
});