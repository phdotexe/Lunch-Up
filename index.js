let search = document.querySelector('.search-box__btn')
let user_location = document.getElementById('search')
let Form = document.getElementById('myForm')

Form.addEventListener('submit', ShowLocation)

function ShowLocation(e){
    e.preventDefault()
    if (user_location.value.length > 0 ){
        localStorage.setItem('user_location', user_location.value)
        window.location.href = window.location.href.replace('index.html', 'signup.html');
    }
}
