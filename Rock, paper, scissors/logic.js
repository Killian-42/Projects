let computerScore = 0;
let humanScore = 0;
let humanChoice;

const div = document.querySelector('div');
const rock = document.querySelector('#rock');
const paper = document.getElementById('paper');
const scissors = document.querySelector('#scissors');

let para = document.createElement('p');

function getComputerChoice() {
	let randomInt = Math.random();
	if (randomInt <= 1 / 3) return 'rock';
	if (randomInt <= 2 / 3) return 'paper';
	else return 'scissors';
}

function playRound(pc, human) {
	if (endGame()) {
		return;
	}
	if (
		(human === 'rock' && pc === 'scissors') ||
		(human === 'paper' && pc === 'rock') ||
		(human === 'scissors' && pc === 'paper')
	) {
		para.textContent = `Congratulation! Your ${human} beats ${pc} :)`;
		humanScore++;
	} else if (human === pc) {
		para.textContent = `It's a draw -_-`;
	} else {
		para.textContent = `You lose, ${pc} beats ${human} :(`;
		computerScore++;
	}
	const score = document.getElementById('score');
	score.textContent = `Computer score ${computerScore} || ${humanScore} Human score`;
	if (endGame()) {
		return;
	}
}

function endGame() {
	if (humanScore === 5) {
		para.textContent = `Congratulations! You beat your own program with a score of ${humanScore} against the computer's ${computerScore}.`;
		div.appendChild(para);
		para.textContent = `You win nothing.`;
		div.appendChild(para);
		return true;
	} else if (computerScore === 5) {
		para.textContent = `You lost to your own creation! It has ${
			computerScore - humanScore
		} more points than you!`;
		div.appendChild(para);
		return true;
	}
}

div.appendChild(para);

rock.addEventListener('click', () => {
	playRound(getComputerChoice(), 'rock');
});
paper.addEventListener('click', () => {
	playRound(getComputerChoice(), 'paper');
});
scissors.addEventListener('click', () => {
	playRound(getComputerChoice(), 'scissors');
});
