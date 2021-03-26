//I will be using a mix of both javascript and jQuery for this as I feel more competent doing certain things in each
document.getElementById("easy").addEventListener("click", shuffle)

let cards = document.getElementsByClassName("match-card");

//declaring variables and an array to put values on the selected cards and push them into an array
let turnedCard = false;
let firstCard;
let secondCard;
let selectedCards = [];

//creating an array for pushing the selected pairs to if they match so if matched pairs length === cards length game won
let matchedPairs = [];

//adding a variable for locking the board as turning multiple cards was causing a bug got the technique from https://www.youtube.com/watch?v=ZniVgo8U7ek
let lockBoard = false;

//adding a function to turn the cards over
function turnCard() {
    if (this === firstCard) return;
    if (lockBoard) return;
    this.classList.toggle("flip");

    if (!turnedCard) {
        turnedCard = true;
        firstCard = this;
        selectedCards.push(this);
    }
    else {
        lockBoard = true;
        turnedCard = false;
        secondCard = this;
        selectedCards.push(this);
    }

    if (selectedCards.length === 2) {
        checkForMatch(selectedCards[0], selectedCards[1])
    }

}

// had to modify the shuffle from online tutorial , but the online tutorial wouldnt work so I added a for of loop which did the trick!!! video is here around the 32minute mark https://www.youtube.com/watch?v=ZniVgo8U7ek
function shuffle() {
    let randomPos = Math.floor(Math.random() * 16)
    for(card of cards) {
        let randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos;
    };
    console.log(randomPos);
};


//adding an event listen for when the cards are chosen
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", turnCard);
}

//going to write a function to check for a match
function checkForMatch() {
    if (selectedCards[0].dataset.card === selectedCards[1].dataset.card) {
        matchedPairs.push(selectedCards[0], selectedCards[1]);
        firstCard.removeEventListener("click", turnCard)
        secondCard.removeEventListener("click", turnCard)
        console.log(matchedPairs)
        selectedCards.length = 0;
        lockBoard = false;


    }
    //added code for if it doesnt match it will return the cards and empty the selectedCars array, also had to ser a timeout fuction to make it work properly
    else {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.toggle("flip");
            secondCard.classList.toggle("flip");
            selectedCards.length = 0;
            lockBoard = false;
        }, 1100);
    }
}


    










