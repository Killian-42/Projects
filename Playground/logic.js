let computerScore = 0;
let humanScore = 0;
let computerChoice;
let humanChoice;

function playGame() {
	playRound(computerChoice, humanChoice);
	playRound(computerChoice, humanChoice);
	playRound(computerChoice, humanChoice);
	playRound(computerChoice, humanChoice);
	playRound(computerChoice, humanChoice);
}

function playRound() {
	chooseValues();
	chooseWinner(computerChoice, humanChoice);

	console.log(`Points: You ${humanScore} || ${computerScore} Computer`);
}

function chooseValues() {
	computerChoice = getComputerChoice();
	humanChoice = getHumanChoice().toLowerCase();
	console.log(`The computer chose ${computerChoice}.`);
	console.log(`You chose ${humanChoice}.`);
}

function getComputerChoice() {
	let randomInt = Math.random();
	if (randomInt <= 0.33) {
		return 'rock';
	} else if (randomInt > 0.33 && randomInt < 0.66) {
		return 'paper';
	} else {
		return 'scissors';
	}
}

function getHumanChoice() {
	return prompt('rock, paper or scissors?');
}

function chooseWinner(computerChoice, humanChoice) {
	if (
		(humanChoice === 'rock' && computerChoice === 'scissors') ||
		(humanChoice === 'paper' && computerChoice === 'rock') ||
		(humanChoice === 'scissors' && computerChoice === 'paper')
	) {
		humanScore += 1;
		console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
	} else if (humanChoice === computerChoice) {
		console.log("It's a draw!");
	} else {
		computerScore += 1;
		console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
	}
}

playGame();
