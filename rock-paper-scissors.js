const CHOICES = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerScoreBoard = document.querySelector('#playerScoreBoard');
const computerScoreBoard = document.querySelector('#computerScoreBoard');
const cpuChoice = document.querySelector('#cpuChoice');

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
      return 'tie';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'player';
    } else {
      return 'computer';
    }
}

function logScore(result) {
  if (result === "player") {
    playerScore ++;
    playerScoreBoard.textContent = "Player: " + playerScore;
  }
  if (result === "computer") {
    computerScore ++;
    computerScoreBoard.textContent = "Computer: " + computerScore;
  }
}

rock.addEventListener('click', () => {
  let computerChoice = getComputerChoice();
  let playerChoice = CHOICES[0];

  let result = playRound(playerChoice, computerChoice);

  logScore(result);
})

paper.addEventListener('click', () => {
  let computerChoice = getComputerChoice();
  let playerChoice = CHOICES[1];

  let result = playRound(playerChoice, computerChoice);

  logScore(result);
})

scissors.addEventListener('click', () => {
  let computerChoice = getComputerChoice();
  let playerChoice = CHOICES[2];

  let result = playRound(playerChoice, computerChoice);

  logScore(result);
})