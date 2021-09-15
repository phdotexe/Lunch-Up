let amount = document.getElementById('amount')
let user_data = JSON.parse(localStorage.getItem('order'));
amount.value = user_data.amount.replace('₦','')
amount.setAttribute('readonly', true)

let user = JSON.parse(localStorage.getItem('user'))
let fname = document.getElementById('first-name')
let lname = document.getElementById('last-name')


if(user.name.split(' ').length == 2){
    fname.value = user.name.split(' ')[0]
    lname.value = user.name.split(' ')[1] 
}else{
    fname.value= user.name
}
