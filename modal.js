
var y = document.querySelector('#hamburger');
var nav__Menu = document.querySelector('.nav-bar__list');
var _body = document.querySelector('body');
let btn = document.querySelectorAll('#btn');
let number = document.getElementById('number');
let food = document.getElementsByClassName('.food__container__food-name');
let item = document.querySelectorAll('.items');
let clr = document.querySelector('.clear');
let div = document.querySelector('.cds');
let num = document.querySelectorAll('.num');
let arr = [];
let arr2 = [];
let myForm = document.getElementById('myForm');

//
//
let subTotal = document.getElementById('subtotal');
let deliveryPrice = document.getElementById('delivery').innerText;
let totalFee = document.getElementById('totalFee');

let food_img = document.querySelectorAll('.food-bg');

if(sessionStorage.length <= 1){
    number.innerText = 0;
}else{
    number.innerText = sessionStorage.length-1;
}
// a fucntion that does a lot :)
function doALot(){
    arr = [];
    let prices_ = document.querySelectorAll('.price');
    prices_.forEach((e => {
        arr.push(Number(e.children[1].innerText.replace('₦', '')));
        subTotal.innerText = `₦${arr.reduce((a, b) => a + b, 0)}`;
    }))
    totalFee.innerText = `₦${Number(subTotal.innerText.replace('₦', '')) + Number(deliveryPrice.replace('₦', ''))}`
    if(arr.length == 0){
        subTotal.innerText = `₦${0}`;
        totalFee.innerText = `₦${0}`;
    }
    if(cartBox.innerHTML != ''){
        // orderBtn.setAttribute("onclick","pay_()")
        myForm.addEventListener('submit', pay_)
    }
    
}


//Saving the clicked items to session storage
btn.forEach((e => {
    e.setAttribute('onclick', 'addtoCart(this)');
}))
function addtoCart(e) {
    //number.innerText++;
    let foods = {};
    let food_name = e.previousElementSibling.children[0].innerText;
    let food_price = e.previousElementSibling.children[1].innerText.replace('₦', '');
    let imageURL = getComputedStyle(e.previousElementSibling.previousElementSibling).backgroundImage.split('"')[1];
    foods.name = food_name;
    foods.price = food_price;
    foods.img = imageURL;
    sessionStorage.setItem(food_name, JSON.stringify(foods))
    number.innerText = sessionStorage.length-1;
}

// getting the items from session storage to the cart on click
let cart = document.querySelector('.cart-number');
let cartBox = document.querySelector('.cds');
cart.setAttribute('onclick', 'showCart()');

function showCart() {
    cartBox.innerHTML = '';
    let cartList = Object.values(sessionStorage);
    cartList.forEach((e => {
        let food = JSON.parse(e);
        let cartItem = `
        <div class="items chicken-pot">
        <div class="img-txt d-flex">
          <img class="img-fluid" src=${food.img}>
          <div class="price">
            <h5>${food.name}</h5>
            <p class="price_">₦${food.price}</p>
          </div>
        </div>
        <div class="count d-flex">
          <div class="icon minus">
            <i class="bx bx-minus"></i>
          </div>
          <div class="num">1</div>
          <div class="icon plus">
            <i class="bx bx-plus"></i>
          </div>
        </div>
        <div class="trash">
          <i class="bx bx-trash"></i>
        </div>
      </div>
        `
        if (food.name != undefined) {
            cartBox.innerHTML += cartItem;
        }
    }))
    //for the add button
    let add = document.querySelectorAll('.plus');
    add.forEach((e => {
        e.setAttribute('onclick', 'add_(this)');

    }))

    // for the subtract button
    let subtract = document.querySelectorAll('.minus');
    subtract.forEach((e => {
        e.setAttribute('onclick', 'subtract_(this)');
    }));

    //for trash button
    let trash = document.querySelectorAll('.trash');
    trash.forEach((e => {
        e.setAttribute('onclick', 'trash_(this)');
    }))
    doALot()
}


// increasing the number on click of plus
function add_(e) {
    arr = []
    e.previousElementSibling.innerText++;
    let num = e.previousElementSibling.innerText
    let price = e.parentElement.parentElement.children[0].children[1].children[1].innerText.replace('₦', '');
    price = num * (price / ((num > 1) ? num - 1 : 1))
    e.parentElement.parentElement.children[0].children[1].children[1].innerText = `₦${price}`;
    doALot()
}

// decreasing the number on click of minus
function subtract_(e) {
    if (e.nextElementSibling.innerText != 1) {
        e.nextElementSibling.innerText--;
        let num = e.nextElementSibling.innerText;
        let price = e.parentElement.parentElement.children[0].children[1].children[1].innerText.replace('₦', '');
        price = num * (price / (Number(num) + 1))
        e.parentElement.parentElement.children[0].children[1].children[1].innerText = `₦${price}`
        doALot()
    }
}

//deleting a cart item
function trash_(e) {
    e.parentElement.remove(e);
    sessionStorage.removeItem(e.parentElement.children[0].children[1].children[0].innerText);
    number.innerText = sessionStorage.length;
    doALot()
   
}

//clearing the cart
clr.setAttribute('onclick', 'clear_()')
function clear_(){
    cartBox.innerHTML = ''
    let user_data = JSON.parse(localStorage.getItem('user'));
    let login_data = {};
    login_data.phone = user_data.phone;
    login_data.password = user_data.password;
    sessionStorage.clear()
    sessionStorage.setItem('user_login', JSON.stringify(login_data));
    number.innerText = 0;
    doALot()
    orderBtn.removeAttribute('onclick')
}

//making payment
let orderBtn = document.getElementById('orderBtn')

function pay_(e){
    e.preventDefault();
    let orderDeets ={}
    let user_data = JSON.parse(localStorage.getItem('user'));
    orderDeets.phone = user_data.phone;
    orderDeets.amount = totalFee.innerText;
    localStorage.setItem('order', JSON.stringify(orderDeets))
    let current = window.location.href;
    window.location.href = window.location.href.replace(current, 'Payment.html');
    cartBox.innerHTML = ''
    let login_data = {};
    login_data.phone = user_data.phone;
    login_data.password = user_data.password;
    sessionStorage.clear()
    sessionStorage.setItem('user_login', JSON.stringify(login_data));
    // let localServer = '127.0.0.1:5502';
    // let current_href = window.location.href;
    // let current_pathname = window.location.pathname;

    // if(window.location.href.includes(localServer)) {
    //     window.location.href = window.location.href.replace(current_pathname, '/Payment.html');
    // }else{
    //     window.location.href = window.location.href.replace(current_pathname, `${current_pathname}Payment.html`);
    // }    
}