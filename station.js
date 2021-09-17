let spantext = document.querySelectorAll('span')
let user__location = localStorage.getItem('user_location')
console.log(user__location)
spantext.forEach(e => {
    e.textContent  = user__location
})

