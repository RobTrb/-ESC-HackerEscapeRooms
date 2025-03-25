const hamMenu = document.querySelector(".header_hamMenu");
const mobileMenuCont = document.querySelector(".header_mobileMenuContainer");
const mobileMenu = document.querySelector(".header_mobileMenu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    mobileMenuCont.classList.toggle("active");
    mobileMenu.classList.toggle("active");    
});

challengesLocal = [];

async function fetchChallenges() {

const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
const data = await res.json();

data.challenges.forEach(challenge => {
  console.log(challenge);
});



}


