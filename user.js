let dropdown_content = document.getElementById('dropdown-content');


function dropdown(){
    if(dropdown_content.style.display == 'none'){
        dropdown_content.style.display = 'block'
    }else{
        dropdown_content.style.display = 'none'
    }
}

let user_ = JSON.parse(localStorage.getItem('user'));
let user_login = JSON.parse(sessionStorage.getItem('user'));
let logout = document.getElementById('logout');

logout.addEventListener('click', logout_)
function logout_(e){
    e.preventDefault();
    sessionStorage.clear();
    let current = window.location.href
    window.location.href = window.location.href.replace(current, 'login.html');
}