let search = document.querySelector('.search-box__btn')
let user_location = document.getElementById('search')
let Form = document.getElementById('myForm')

Form.addEventListener('submit', ShowLocation)
user_location.focus()
function ShowLocation(e){
    e.preventDefault()
    let current_href = window.location.href;
    if (user_location.value.length > 0 ){
        localStorage.setItem('user_location', user_location.value)
        window.location.href = window.location.href.replace(current_href, 'signup.html');
    }
    let localServer = '127.0.0.1:5502';
    // let current_href = window.location.href;
    // let current_pathname = window.location.pathname;

    // if(window.location.href.includes(localServer) && user_location.value.length > 0 ) {
    //     localStorage.setItem('user_location', user_location.value)
    //     window.location.href = window.location.href.replace(current_pathname, '/signup.html');
    // }else{
    //     window.location.href = window.location.href.replace(current_pathname, `${current_pathname}signup.html`);
    // }    
}
