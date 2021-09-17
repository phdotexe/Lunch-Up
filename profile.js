let span = document.getElementById('name');
let username = document.getElementById('username')
let phone = document.getElementById('Phone')
let main_name = document.querySelector('#main_name')
let user_data = JSON.parse(localStorage.getItem('user'));
let answer = document.getElementById('answer')
let initials = document.getElementById('initials');
let sQuestion = document.getElementById('sQuestion');


span.innerHTML = user_data.name;
main_name.innerHTML = user_data.name;
initials.innerHTML = user_data.name[0];
// username.innerHTML = user_data.
phone.innerText = user_data.phone;

let orderDetails =  JSON.parse(localStorage.getItem('orderDetails'));
let orderName_ = Object.keys(orderDetails);
let orderPrice_ = Object.values(orderDetails);
let orderName = document.querySelector('.orders--name');
let orderPrice = document.querySelector('.orders--prices');

orderName_.forEach(((e,i )=> {
    orderName.innerHTML += `<h5>${orderName_[i]}</h5>` ;
    orderPrice.innerHTML += `<h5>${orderPrice_[i]}</h5>`
}))