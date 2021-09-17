function search(container, cardss, searchtext ) {
    console.log(container, cardss, searchtext )
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
let input = document.getElementById('search');
input.focus()

input.addEventListener('keyup', function(){
    search("food_list", "food__container", ".food__container__label p.food__container__food-name" )

}

)
