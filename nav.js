let x = document.querySelector('#hamburger');
let navMenu = document.querySelector('.nav-bar__list');
let body = document.querySelector('body');
x.addEventListener("click", myFunction);
function myFunction(){
    if(navMenu.style.display=="none"){
        navMenu.style.display="flex";
        navMenu.style.animationName='slideIn';
        //body.style.overflow='hidden'
    }else{
        navMenu.style.display="none";
        //body.style.overflow='scroll'
    }
    
}

let profile_icon = document.getElementById('profile_icon');
let profile_dropdown = document.getElementById('profile_dropdown');
let user = document.querySelector('.user');

user.addEventListener('click', profile)

function profile(){
    if(profile_dropdown.style.display == "none"){
        profile_dropdown.style.display = "flex";
    }else{
        profile_dropdown.style.display='none';
    }
}