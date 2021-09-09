let span = document.getElementById('name');
let username = document.getElementById('username')
let phone = document.getElementById('phone')
let main_name = document.querySelector('#main_name')
let user_data = JSON.parse(localStorage.getItem('user'));
let answer = document.getElementById('answer')
let initials = document.getElementById('initials');


console.log(user_data)

span.innerHTML = user_data.name;
main_name.innerHTML = user_data.name;
answer.innerHTML = user_data.answer;
initials.innerHTML = user_data.name[0];
// username.innerHTML = user_data.
phone.innerHTML = user_data.phone