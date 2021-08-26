let x = document.querySelector('#hamburger');
let navMenu = document.querySelector('.nav-bar__list');
let body = document.querySelector('body');
x.addEventListener("click", myFunction);
function myFunction(){
    if(navMenu.style.display=="none"){
        navMenu.style.display="flex";
        navMenu.style.animationName='slideIn';
        body.style.overflow='hidden'
    }else{
        navMenu.style.display="none";
        body.style.overflow='scroll'
    }
    
}