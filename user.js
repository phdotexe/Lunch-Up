let username = document.getElementById('user');
let user_data = JSON.parse(localStorage.getItem('user'));
username.innerText = user_data.name;