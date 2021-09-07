let sQuestion = document.getElementById('forgot_password_sQuestion');
let forgot_password_form =document.querySelector('form');
let password = document.getElementById('forgot_password_newPassword');
let cPassword = document.getElementById('forgot_password_cNewPassword');
let forgot_passwordBtn = document.getElementById('forgot_passwordBtn');


let wrongAnswer = document.createElement('p');
wrongAnswer.innerText = "Incorrect answer. Try again.";
wrongAnswer.style.color='red';
wrongAnswer.style.textAlign='left';
wrongAnswer.style.fontSize='10px';
wrongAnswer.style.width='80%';
wrongAnswer.style.margin='0px 0px 16px 10%';

let dontMatch = document.createElement('p');
dontMatch.innerText = "Passwords don't match";
dontMatch.style.color='red';
dontMatch.style.textAlign='left';
dontMatch.style.fontSize='10px';
dontMatch.style.width='80%';
dontMatch.style.margin='0px 0px 16px 10%';

let user_data = JSON.parse(localStorage.getItem('user'));
sQuestion.value = user_data.question;


function checkAnswer(e){
    e.preventDefault();
    let sAnswer = document.getElementById('forgot_password_sAnswer');

    if (sAnswer.value == user_data.answer){
        password.style.display='inline-block';
        cPassword.style.display='inline-block';
        forgot_password_form.removeEventListener('submit', checkAnswer);
        forgot_password_form.addEventListener('submit', matchPassword);
        if(sAnswer.nextElementSibling.tagName == 'P'){
            sAnswer.nextElementSibling.remove();
        }
    }else{
        if(sAnswer.nextElementSibling.tagName == 'P'){
            sAnswer.nextElementSibling.remove();
        }
        sAnswer.outerHTML += wrongAnswer.outerHTML;
    }
}
forgot_password_form.addEventListener('submit', checkAnswer);

function matchPassword(e){
    e.preventDefault();
    if (password.value == cPassword.value){
        user_data.password = cPassword.value;
        user_data = JSON.stringify(user_data);
        localStorage.setItem('user', user_data);
        if(cPassword.nextElementSibling.tagName == 'P'){
            cPassword.nextElementSibling.remove();
        }
        window.location.href = window.location.href.replace('forgot_password.html', 'login.html');
    }else{
        if(cPassword.nextElementSibling.tagName == 'P'){
            cPassword.nextElementSibling.remove();
        }
        cPassword.outerHTML += dontMatch.outerHTML;
    }
}

