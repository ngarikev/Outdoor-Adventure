document.addEventListener("DOMContentLoaded", function() {
    const currentYearEl = document.getElementById("current-year");
    const closeNavEl = document.getElementById("close-nav");
    const openNavEl = document.getElementById("open-nav");
    const navBarEl = document.querySelector('.nav-links ul');

    function showCurrentYear() {
        currentYearEl.textContent = new Date().getFullYear();
    }

    function showMenu() {
        navBarEl.style.right = "0";
    }

    function hideMenu() {
        navBarEl.style.right = "-250px";
    }

    showCurrentYear();

    openNavEl.addEventListener("click", showMenu);
    closeNavEl.addEventListener("click", hideMenu);

    // Fixed navbar on scroll
    window.addEventListener("scroll", function() {
        const nav = document.querySelector('.nav');
        if (window.scrollY > 100) {
            nav.classList.add('fixed-navbar');
        } else {
            nav.classList.remove('fixed-navbar');
        }
    });
});


// const closeNavEl = document.getElementById("close-nav");
// const openNavEl = document.getElementById("open-nav");
// const navBarEl = document.querySelector('.nav-links ul');
// // const currentYearEl = document.getElementById("current-year")



// openNavEl.addEventListener("click", showMenu)

// function showMenu(){
//     navBarEl.style.right = "0"
//     console.log(clicked)
// }

// closeNavEl.addEventListener("click", hideMenu)
//  function hideMenu(){
//     navBarEl.style.right = "-250px"
//  }

//  function showCurrentYear() {
//     currentYearEl.textContent = new Date().getFullYear()
// }

// showCurrentYear()

//for a fixed navbar on scroll




