let computerScore = 0;
let humanScore = 0;
let humanChoice;

function getComputerChoice() {
	let randomInt = Math.random();
	if (randomInt <= 1 / 3) return 'rock';
	if (randomInt <= 2 / 3) return 'paper';
	else return 'scissors';
}

// function getHumanChoice() {
// 	return prompt('Make your choice');
// }

function playRound(pc, human) {
	if (
		(human === 'rock' && pc === 'scissors') ||
		(human === 'paper' && pc === 'rock') ||
		(human === 'scissors' && pc === 'paper')
	) {
		console.log(`Congratulation! Your ${human} beats ${pc} :)`);
		humanScore++;
	} else if (human === pc) {
		console.log(`It's a draw -_-`);
		humanScore++;
		computerScore++;
	} else {
		console.log(`You lose, ${pc} beats ${human}`);
		computerScore++;
	}
	console.log(`Computer score ${computerScore} || ${humanScore} Human score`);
}

// function playGame() {
// 	for (let i = 0; i < 5; i++) {
// 		playRound(getComputerChoice(), getHumanChoice().toLowerCase());
// 	}
// }

// playGame();

const rock = document.querySelector('#rock');
const paper = document.getElementById('paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
	playRound(getComputerChoice(), 'rock');
});
paper.addEventListener('click', () => {
	playRound(getComputerChoice(), 'paper');
});
scissors.addEventListener('click', () => {
	playRound(getComputerChoice(), 'scissors');
});
