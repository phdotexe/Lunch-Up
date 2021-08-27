var y = document.querySelector('#hamburger');
var nav__Menu = document.querySelector('.nav-bar__list');
var _body = document.querySelector('body');
y.addEventListener("click", myFunction);
function myFunction(){
    if(nav__Menu.style.display=="none"){
        nav__Menu.style.display="flex";
        nav__Menu.style.animationName='slideIn';
        _body.style.overflow='hidden'
    }else{
        nav__Menu.style.display="none";
        _body.style.overflow='scroll'
    }
    
}