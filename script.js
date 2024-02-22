const closeNavEl = document.getElementById("close-nav");
const openNavEl = document.getElementById("open-nav");
const navBarEl = document.querySelector('.nav-links ul');



openNavEl.addEventListener("click", showMenu)

function showMenu(){
    navBarEl.style.right = "0"
    console.log(clicked);
}

closeNavEl.addEventListener("click", hideMenu)
 function hideMenu(){
    navBarEl.style.right = "-250px"
 }


//for a fixed navbar on scroll




