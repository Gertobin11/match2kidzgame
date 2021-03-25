//I will be using a mix of both javascript and jQuery for this as I feel more competent doing certain things in each

let matchGame = $("#match-game");

let cards = document.getElementsByClassName("match-card");

//adding a function to turn the cards over
function turnCard() {
    console.log("hi");
}


//adding an event listen for when the cards are chosen
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', turnCard);
}