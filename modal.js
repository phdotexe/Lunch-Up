var y = document.querySelector('#hamburger');
var nav__Menu = document.querySelector('.nav-bar__list');
var _body = document.querySelector('body');
let btn = document.querySelectorAll('#btn');
let number = document.getElementById('number');
let food = document.getElementsByClassName('.food__container__food-name');
let item = document.querySelectorAll('.items');
let clr = document.querySelector('.clear');
let div = document.querySelector('.cds');
let trash = document.querySelectorAll('.trash');
let add = document.querySelectorAll('.plus')
let subtract = document.querySelectorAll('.minus')
let num = document.querySelectorAll('.num');
let counter = 0;
let count1 = 1;




add[0].onclick = function(){
    count1++;
    num[0].innerHTML = count1;
}

add[1].onclick = function(){
    count1++;
    num[1].innerHTML = count1;
}

add[2].onclick = function(){
    count1++;
    num[2].innerHTML = count1;
}

add[3].onclick = function(){
    count1++;
    num[3].innerHTML = count1;
}

add[4].onclick = function(){
    count1++;
    num[4].innerHTML = count1;
}

add[5].onclick = function(){
    count1++;
    num[5].innerHTML = count1;
}

add[6].onclick = function(){
    count1++;
    num[6].innerHTML = count1;
}

add[7].onclick = function(){
    count1++;
    num[7].innerHTML = count1;
}

add[8].onclick = function(){
    count1++;
    num[8].innerHTML = count1;
}

subtract[0].onclick = function(){
    count1--;
    num[0].innerHTML = count1;
}

subtract[1].onclick = function(){
    count1--;
    num[1].innerHTML = count1;
}

subtract[2].onclick = function(){
    count1--;
    num[2].innerHTML = count1;
}

subtract[3].onclick = function(){
    count1--;
    num[3].innerHTML = count1;
}

subtract[4].onclick = function(){
    count1--;
    num[4].innerHTML = count1;
}

subtract[5].onclick = function(){
    count1--;
    num[5].innerHTML = count1;
}

subtract[6].onclick = function(){
    count1--;
    num[6].innerHTML = count1;
}

subtract[7].onclick = function(){
    count1--;
    num[7].innerHTML = count1;
}

subtract[8].onclick = function(){
    count1--;
    num[8].innerHTML = count1;
}

trash[0].onclick = function(){
    item[0].style.display = 'none'
    counter--; 
    number.innerHTML = counter;
}

trash[1].onclick = function(){
    item[1].style.display = 'none'
    counter--; 
    number.innerHTML = counter;
}

trash[2].onclick = function(){
    item[2].style.display = 'none'
    counter--; 
    number.innerHTML = counter;
}

trash[3].onclick = function(){
    item[3].style.display = 'none'
    counter--; 
    number.innerHTML = counter;
}

trash[4].onclick = function(){
    item[4].style.display = 'none'
    counter--; 
    number.innerHTML = counter;
}

trash[5].onclick = function(){
    item[5].style.display = 'none'
    counter--; 
    number.innerHTML = counter;
}

trash[6].onclick = function(){
    item[6].style.display = 'none'
    counter--; 
    number.innerHTML = counter;
}

trash[7].onclick = function(){
    item[7].style.display = 'none'
    counter--; 
    number.innerHTML = counter;
}

trash[8].onclick = function(){
    item[8].style.display = 'none'
    counter--; 
    number.innerHTML = counter;
}



function count(){
    counter++; 
    number.innerHTML = counter;
}

clr.onclick = function(){
    item[0].style.display = 'none'
    item[1].style.display = 'none'
    item[2].style.display = 'none'
    item[3].style.display = 'none'
    item[4].style.display = 'none'
    item[5].style.display = 'none'
    item[6].style.display = 'none'
    item[7].style.display = 'none'
    item[8].style.display = 'none'
    counter = 0
    number.innerHTML = counter;
}




btn[0].onclick = function (){
    count();
    item[0].style.display = 'flex';
}

btn[1].onclick = function (){
    count();
    item[1].style.display = 'flex'
}

btn[2].onclick = function (){
    count();
    item[2].style.display = 'flex'
}

btn[3].onclick = function (){
    count();
    item[3].style.display = 'flex'
}

btn[4].onclick = function (){
    count();
    item[4].style.display = 'flex'
}

btn[5].onclick = function (){
    count();
    item[5].style.display = 'flex'
}

btn[6].onclick = function (){
    count();
    item[6].style.display = 'flex'
}

btn[7].onclick = function (){
    count();
    item[7].style.display = 'flex'
}

btn[8].onclick = function (){
    count();
    item[8].style.display = 'flex'
}