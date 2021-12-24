let player = { name: 'Massoud', chips: 200}
let sum = 0
let cards = []
let blackJack = false
let alive = false
let narrator = ''
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let narratorEl = document.getElementById("narrator-el")
let playerEl = document.getElementById("player-el")
	playerEl.textContent = player.name + ': $' + player.chips

function startGame() {
	let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
	sum = firstCard + secondCard
	cards = [firstCard, secondCard]
	renderGame()
	alive = true
}

function getRandomNumber(){
	let randomNumber = Math.floor( Math.random() * 13) + 1
	if (randomNumber > 10) {
		return 10
	}else if (randomNumber === 1) {
		return 11
	}else {
		return randomNumber
	}
}

function renderGame(){
	cardsEl.textContent = 'Cards: '
	
	for (let i = 0; i < cards.length; i++){
		cardsEl.textContent += cards[i] + ' '
	}
	
	
	sumEl.textContent = 'Sum: ' + sum
	if (sum<21){
		narrator = 'Ok, you can pick another card'
	}else if (sum===21){
		narrator = 'Bravo, you have Blackjack!'
		blackJack = true
	}else {
		narrator = 'Game over'
		alive = false
	}
	
	narratorEl.textContent = narrator
}


function newCard(){
	if( alive === true && blackJack === false) {
		let newCard = getRandomNumber()
		sum += newCard
		cards.push(newCard) 
		renderGame()
	}
}