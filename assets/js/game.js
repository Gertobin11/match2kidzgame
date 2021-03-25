//I will be using a mix of both javascript and jQuery for this as I feel more competent doing certain things in each

let matchGame = $("#match-game");

let cards = document.getElementsByClassName("match-card");

//declaring variables and an array to put values on the selected cards and push them into an array
let turnedCard = false;
let firstCard;
let secondCard;
let selectedCards = [];
//creating an array for pushing the selected pairs to if they match so if matched pairs length === cards length game won
let matchedPairs = [];
//adding a function to turn the cards over
function turnCard() {
    this.classList.toggle("flip");
    
    if(!turnedCard) {
        turnedCard = true;
        firstCard = this;
        selectedCards.push(this);
    }
    else {
        turnedCard = false;
        secondCard = this;
        selectedCards.push(this);
    }
    console.log(selectedCards);
}


//adding an event listen for when the cards are chosen
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', turnCard);
}