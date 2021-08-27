let btn = document.getElementById('btn');
let number = document.getElementsByClassName('number');
let food = document.getElementsByClassName('.food__container__food-name')

let counter = 3

function count(){
    counter++;
    food.TextNode = counter;
}
