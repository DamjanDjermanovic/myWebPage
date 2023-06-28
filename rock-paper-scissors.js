const CHOICES = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

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

rock.addEventListener('click', function