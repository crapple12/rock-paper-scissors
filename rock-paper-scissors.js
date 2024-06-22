


const rng = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
    const randomChoice = rng[Math.floor(Math.random() * rng.length)];
    // generates a random choice between rock, paper, and scissors before returning it below
    return randomChoice;
}

function getHumanChoice() {
    let que = prompt("Choose between Rock, Paper, or Scissors!");
    while (que === '') {
        que = prompt("Choose between Rock, Paper, or Scissors!");
    }
    que = que.toLowerCase();
    let confirm = validateQue(que)
    if (confirm == true) {
    }
    console.log(`Player chose ${que}`);
}

function validateQue(choice) {
    if (rng.includes(choice)) {
        return true;
    }   else {
        return false;
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log(`Computer chose ${computerChoice}`);
    
    if (humanChoice = "rock" && computerChoice == "paper") {
        let winner = "Computer";
        return (`The winner is ${winner}`);
    } 
    else if(humanChoice = "rock" && computerChoice == "scissors") {
        let winner = "Player";
        return (`The winner is ${winner}`);
    }   
    else if(humanChoice = "rock" && computerChoice == "rock") {
        let winner = "no one"
        return (`The winner is ${winner}`);
    }

    if (humanChoice = "paper" && computerChoice == "scissors") {
        let winner = "Computer";
        return (`The winner is ${winner}`); 
    }   
    else if(humanChoice = "paper" && computerChoice == "rock") {
        let winner = "Player";
        return (`The winner is ${winner}`);
    }   
    else if(humanChoice = "paper" && computerChoice == "paper") {
        let winner = "no one"
        return (`The winner is ${winner}`);
    }

    if (humanChoice = "scissors" && computerChoice == "rock") {
        let winner = "Computer";
        return (`The winner is ${winner}`);  
    }   
    else if(humanChoice = "scissors" && computerChoice == "paper") {
        let winner = "Player";
        return (`The winner is ${winner}`);
    }   
    else if(humanChoice = "scissors" && computerChoice == "scissors") {
        let winner = "no one"
        return (`The winner is ${winner}`);
    }
}




