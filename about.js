let hamburger = document.querySelector(".header__hamburger-holder");
let menu = document.querySelector(".header__menu--modal");

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("show");

});