
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sum = 0;
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl= document.querySelector("#cards-el");
//let playerName = "Per";
//let playerChips = 145;

let player = {
	
 playerName : "Per",
 playerChips : 145,	
	
};

let playerEl = document.getElementById("play-el");
playerEl.textContent = player.playerName + ": $" + player.playerChips;

function startGame(){
isAlive = true;
let firstCard = getRandomCard();
let secondCard = getRandomCard();
sum = firstCard  + secondCard;
cards = [firstCard, secondCard];
	
renderGame();	
	
	
}

function getRandomCard(){
var num = Math.floor(Math.random ()* 13) + 1;
	
	if(num === 1){
	
      num = 11;	
		
	}else if(num > 10){
		
	  num = 10;
	}
	
	return num;
}

function renderGame(){
cardsEl.textContent = "Cards: ";
	
for (var i = 0; i < cards.length; i+=1){
cardsEl.textContent  += cards[i] + " ";	
	
}

	sumEl.textContent = "Sum: " + sum;
	
	if(sum <= 20){
		
	message = "Do you want to draw a new card";	
	}else if(sum === 21){

	message = "You've got Blackjack";	
	hasBlackJack = true;	
		
	}else {

	message = "You're out of the game";
	isAlive = false;	
		
	}	
		
		
   messageEl.textContent = message; 		
		
	
	
}


function newCard(){

if(isAlive=== true && hasBlackJack===false){



	var card = getRandomCard();
	sum += 	card;
	cards.push(card)
	renderGame();
	
	
	}
	
}
