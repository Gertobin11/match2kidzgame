//I will be using a mix of both javascript and jQuery for this as I feel more competent doing certain things in each

// declaring a variable to the cards
let cards = document.getElementsByClassName("match-card");

var counter;
let count;
let easy = 90;
let medium = 60;
let hard = 30;


//declaring variables and an array to put values on the selected cards and push them into an array
let turnedCard = false;
let firstCard;
let secondCard;
let selectedCards = [];

//  an array for pushing the selected pairs to if they match so if matched pairs length === cards length game won
let matchedPairs = [];

// this will lock the board as turning multiple cards was causing a bug got the technique from https://www.youtube.com/watch?v=ZniVgo8U7ek
let lockBoard = false;

// adding event listeners to the buttons to trigger the selected games

// easy game buttons
document.getElementById("easy").addEventListener("click", function() {
    gameStart(easy);}
);
    
document.getElementById("modal-easy").addEventListener("click", function() {
    $("#game-won").modal("hide");
    gameStart(easy);
}
);
document.getElementById("modal-easy-lose").addEventListener("click", function() {
    $("#game-lost").modal("hide");
    gameStart(easy);
}
);

// medium game buttons
document.getElementById("medium").addEventListener("click", function() {
    gameStart(medium);}
);
document.getElementById("modal-medium").addEventListener("click", function() {
    $("#game-won").modal("hide");
    gameStart(medium);
}
);
document.getElementById("modal-medium-lose").addEventListener("click", function() {
    $("#game-lost").modal("hide");
    gameStart(medium);
}
);

// hardGame buttons
document.getElementById("hard").addEventListener("click", function() {
    gameStart(hard);}
);
document.getElementById("modal-hard").addEventListener("click", function() {
    $("#game-won").modal("hide");
    gameStart(hard);
}
);
document.getElementById("modal-hard-lose").addEventListener("click", function() {
    $("#game-lost").modal("hide");
    gameStart(hard);
}
);

//  event listen for when the cards are chosen
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", turnCard);
}

// function to  hide the memory game until called for
$(document).ready(function () {
    $("#match-game").hide();
    $("#title").show();
});


// starts the game
function gameStart(difficulty) {
    resetBoard();
    shuffle();
    $("#match-game").show();
    selectedCards = [];
    matchedPairs = [];
    lockBoard = false;
    $("#title").hide();
    if(difficulty === easy){
        gameTimer(easy);
    }
    else if(difficulty === medium) {
        gameTimer(medium);
    }
    else if(difficulty === hard) {
        gameTimer(hard);
    }
}


// a function to turn the cards over
function turnCard() {
    if (this === firstCard) return;
    if (lockBoard) return;
    this.classList.add("flip");

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
        checkForMatch(selectedCards[0], selectedCards[1]);
    }

}

// had to modify the shuffle from online tutorial , but the online tutorial wouldnt work so I added a for of loop which did the trick!!! video is here around the 32minute mark https://www.youtube.com/watch?v=ZniVgo8U7ek
function shuffle() {
    for (let card of cards) {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    }
}


//  event listen for when the cards are chosen
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", turnCard);
}

//  a function to check for a match
function checkForMatch() {
    if (selectedCards[0].dataset.card === selectedCards[1].dataset.card) {
        matchedPairs.push(selectedCards[0], selectedCards[1]);
        firstCard.removeEventListener("click", turnCard);
        secondCard.removeEventListener("click", turnCard);
        console.log(matchedPairs);
        selectedCards.length = 0;
        lockBoard = false;
        checkGameWon();
    }
    //added code for if it doesnt match it will return the cards and empty the selectedCars array, also had to ser a timeout fuction to make it work properly
    else {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            selectedCards.length = 0;
            lockBoard = false;
        }, 1100);
    }
}

// a function to see if the player has won the game
function checkGameWon() {
    if(matchedPairs.length === 12) {
        setTimeout(() => {
            $("#game-won").modal("show");
            window.clearInterval(counter);
        }, 700);
    }
}

    // I got the outline of the timer code from here https://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer and added it to a function
    function gameTimer(time) {
      if(time == easy) {
          count = easy;
      }
      else if(time == medium) {
          count = medium;
      }
      else  if(time == hard) {
          count = hard;
      }

     counter = setInterval(timer, 1000);
        function timer() {
            count = count - 1;
            
             if (count <= 0) {
                $("#game-lost").modal("show");
                window.clearInterval(counter);
                resetBoard();
            }
            document.getElementById("time-span").innerHTML = count + " secs";
        }
    }

// resetBoard function to make the game ready to play again

function resetBoard() {
    firstCard = null;
    secondCard = null;
    let cards = document.getElementsByClassName("match-card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", turnCard);
        cards[i].classList.remove("flip");
    }
}










