


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
    return prompt("Enter your choice from (Rock, Paper or Scissors)")
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    humanChoice = humanChoice.toLowerCase();
    computerChoice = getComputerChoice();
    console.log(`Player chose ${humanChoice}`);
    console.log(`Computer chose ${computerChoice}`);
    
    if (humanChoice == "rock" && computerChoice == "paper") {
        let winner = "Computer";
        return (`The winner is ${winner}`);
    } 
    else if(humanChoice == "rock" && computerChoice == "scissors") {
        let winner = "Player";
        return (`The winner is ${winner}`);
    }   
    else if(humanChoice == "rock" && computerChoice == "rock") {
        let winner = "no one";
        return (`The winner is ${winner}`);
    }

    else if (humanChoice == "paper" && computerChoice == "scissors") {
        let winner = "Computer";
        return (`The winner is ${winner}`); 
    }   
    else if(humanChoice == "paper" && computerChoice == "rock") {
        let winner = "Player";
        return (`The winner is ${winner}`);
    }   
    else if(humanChoice == "paper" && computerChoice == "paper") {
        let winner = "no one";
        return (`The winner is ${winner}`);
    }

    else if (humanChoice == "scissors" && computerChoice == "rock") {
        let winner = "Computer";
        return (`The winner is ${winner}`);  
    }   
    else if(humanChoice == "scissors" && computerChoice == "paper") {
        let winner = "Player";
        return (`The winner is ${winner}`);
    }   
    else if(humanChoice == "scissors" && computerChoice == "scissors") {
        let winner = "no one";
        return (`The winner is ${winner}`);
    }
}
