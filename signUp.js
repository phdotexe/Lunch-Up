let signUpForm = document.querySelector('form');
let fname = document.getElementById('fname');
let phone = document.getElementById('phone');
let backupPhone = document.getElementById('backupPhone');
let sQuestion = document.getElementById('sQuestion');
let sAnswer = document.getElementById('sAnswer');
let password = document.getElementById('password');
let signUpBtn = document.getElementById('signUpBtn');

function getInput(){
    let user_data = {};
    user_data.name = fname.value;
    user_data.phone = phone.value;
    user_data.password = password.value;
    user_data.backupPhone = backupPhone.value;
    user_data.question = sQuestion.options[sQuestion.selectedIndex].value;
    user_data.answer = sAnswer.value;

    user_data = JSON.stringify(user_data);
    localStorage.setItem('user', user_data);
}

signUpForm.addEventListener('submit', processForm);

function processForm(e){
    e.preventDefault();
    getInput();
    window.location.href = window.location.href.replace('signup.html', 'login.html');
}
