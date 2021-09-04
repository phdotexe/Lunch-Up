let loginForm = document.querySelector('form');
let loginBtn = document.getElementById('loginBtn');

let login_fail = document.createElement('p');
login_fail.innerText = "Check login details";
login_fail.style.color='red';
login_fail.style.fontSize='12px';
login_fail.style.textAlign='left';
login_fail.style.fontSize='10px';
login_fail.style.width='80%';
login_fail.style.margin='0px 0px 16px 10%';

function loginInput(){
    let phone_ = document.getElementById('phone_');
    let password_ = document.getElementById('password_');

    let login_data = {};
    login_data.phone = phone_.value;
    login_data.password = password_.value;

    login_data = JSON.stringify(login_data);
    sessionStorage.setItem('user_login', login_data);
}

function login(e){
    e.preventDefault();
    let user_data = JSON.parse(localStorage.getItem('user'));
    let phone_ = document.getElementById('phone_');
    let password_ = document.getElementById('password_');

    if(phone_.value == user_data.phone && password_.value == user_data.password){
        loginInput();
        window.location.href = window.location.href.replace('login.html', 'food-stations.html');
    }else{
        if(password_.nextElementSibling.tagName == 'P'){
            password_.nextElementSibling.remove();
        }
        password_.outerHTML += login_fail.outerHTML;
    }

}

loginForm.addEventListener('submit', login)