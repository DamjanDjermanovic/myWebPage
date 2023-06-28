const CHOICES = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerScoreBoard = document.querySelector('#playerScoreBoard');
const computerScoreBoard = document.querySelector('#computerScoreBoard');
const cpuChoice = document.querySelector('#cpuChoice');
const writeResult = document.querySelector('#writeResult');

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

function displayComputerChoice(computerChoice) {
  if (computerChoice === 'rock') cpuChoice.innerHTML = 'Computer\'s choice : <span class="fixSpan">✊</span>';
  else if (computerChoice === 'paper') cpuChoice.innerHTML = 'Computer\'s choice : <span class="fixSpan">✋</span>';
  else if (computerChoice === 'scissors') cpuChoice.innerHTML = 'Computer\'s choice : <span class="fixSpan">✌️</span>';
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
    playerScoreBoard.textContent = "Player : " + playerScore;
  }
  if (result === "computer") {
    computerScore ++;
    computerScoreBoard.textContent = "Computer : " + computerScore;
  }
}

function wholeRound(playerChoice) {
  let computerChoice = getComputerChoice();

  displayComputerChoice(computerChoice);

  let result = playRound(playerChoice, computerChoice);

  logScore(result);
}

rock.addEventListener('click', () => {
  wholeRound(CHOICES[0]);
})

paper.addEventListener('click', () => {
  wholeRound(CHOICES[1]);
})

scissors.addEventListener('click', () => {
  wholeRound(CHOICES[2]);
})