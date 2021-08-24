let btn = document.getElementById('btn');
let number = document.getElementsByClassName('number');
let food = document.getElementsByClassName('.food__container__food-name')

let counter = 3

// After clicking the button;
// The number should increase By one

// btn.addEventListener('click', function(event) { 
//     number = event.target;
   
//   });
function count(){
    counter++;
    food.TextNode = counter;
}
