function search(container, cardss, searchtext ) {
    var input, filter, cards, cardContainer, title, filtertext, i;
    input = document.getElementById("search");
    filter = input.value;
    filtertext = filter.toUpperCase();
    cardContainer = document.getElementById(container)
    console.log(cardContainer)
    cards = cardContainer.getElementsByClassName(cardss);
    console.log(cards)
    for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(
        searchtext
      );
      if (
        title.innerText.toUpperCase().indexOf(filtertext) > -1 ) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
}


// This takes a param the card holding all the containers, the parent element of the searchable text, and the input value
// let MySearchinput = document.getElementById('search');
// MySearchinput.focus()

// MySearchinput.addEventListener('keyup', function(){
//     search('food-stations__menu', "food-stations__menu__item", ".food-stations__menu__item__text p" )
// }
// )