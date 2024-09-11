const closeNavEl = document.getElementById("close-nav");
const openNavEl = document.getElementById("open-nav");
const navBarEl = document.querySelector('.nav-links ul');
const currentYearEl = document.getElementById("current-year")



openNavEl.addEventListener("click", showMenu)

function showMenu(){
    navBarEl.style.right = "0"
}

closeNavEl.addEventListener("click", hideMenu)
 function hideMenu(){
    navBarEl.style.right = "-250px"
 }
 
 function showCurrentYear() {
    currentYearEl.textContent = new Date().getFullYear()
}

showCurrentYear()

//for a fixed navbar on scroll




