


const rng = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomChoice = rng[Math.floor(Math.random() * rng.length)];
    // generates a random choice between rock, paper, and scissors before returning it below
    return randomChoice;
}

function getHumanChoice() {
    let que = prompt("Choose between Rock, Paper, or Scissors!");
    while (que == null) {
        que = prompt("Choose between Rock, Paper, or Scissors!");
    }
    que = que.toLowerCase();
    let confirm = validateQue(que)
    if (confirm == true) {
    console.log(que);
    }
}

function validateQue(choice) {
    if (rng.includes(choice)) {
        return true;
    }   else {
        return false;
    }
}

// function playRound(humanChoice, computerChoice) {
//     if (humanChoice.toLowercase = "rock", "paper", "scissors") {
//         return humanChoice;
//     }
// }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);



