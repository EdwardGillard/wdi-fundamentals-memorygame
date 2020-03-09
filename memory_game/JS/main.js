const cards = [
{ 
  rank: "Queen",
  suit: "Hearts",
  cardImage: "images/queen-of-hearts.png"
},
{ 
  rank: "Queen",
  suit: "Diamonds",
  cardImage: "images/queen-of-diamonds.png"
},
{
  rank:"King",
  suit:"Hearts",
  cardImage:"images/king-of-hearts.png"
},
{
  rank:"King",
  suit:"Diamonds",
  cardImage:"images/king-of-diamonds.png"
}
];

let cardsInPlay = [];
let cardElement = [];
const resetBoardButton = document.getElementById('resetButton');
resetBoardButton.addEventListener('click', resetBoard);

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
}
};

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
	cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
	} 
};

function flipCard() {
	let cardId = this.getAttribute('data-id');
	console.log ("User flipped " + cards[cardId].rank);
    console.log ("User flipped " + cards[cardId].suit);
    console.log ("User flipped " + cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

function resetBoard(){
	const allCards = document.getElementsByTagName('img');
	for (var i = 0; i < allCards.length; i++) {
		allCards[i].setAttribute('src', 'images/back.png');
	}
	cardsInPlay = []

}
createBoard();



