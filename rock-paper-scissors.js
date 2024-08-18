
const btn1 = document.querySelector("#btn1");
btn1.addEventListener('click',() => {
    playRock();
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click',() => {
    playPaper();
});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener('click',() => {
    playScissors();
});

const rng = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
    const randomChoice = rng[Math.floor(Math.random() * rng.length)];
    // generates a random choice between rock, paper, and scissors before returning it below
    return randomChoice;
}

function playRock(computerChoice) {
    computerChoice = getComputerChoice();
    console.log(`Player chose rock`);
    console.log(`Computer chose ${computerChoice}`);
    
    if (computerChoice == "paper") {
        let winner = "Computer";
        computerScore++;
        console.log (`The winner is ${winner}`); 
    } 
    else if(computerChoice == "scissors") {
        let winner = "Player";
        humanScore++;
        console.log (`The winner is ${winner}`);
    }   
    else if(computerChoice == "rock") {
        let winner = "no one";
        console.log (`The winner is ${winner}`);
    }
    round++;

    if (round == 5) {
        console.log (`Human scored ${humanScore} in total`);
        console.log (`Computer scored ${computerScore} in total`);
    
        if (humanScore == computerScore) console.log("Draw!");
        else if(humanScore > computerScore) console.log("Human wins!");
        else console.log("Computer wins!");
        } 
}

function playPaper(computerChoice) {
    computerChoice = getComputerChoice();
    console.log(`Player chose paper`);
    console.log(`Computer chose ${computerChoice}`);

    if (computerChoice == "scissors") {
        let winner = "Computer";
        computerScore++;
        console.log (`The winner is ${winner}`); 
    }   
    else if(computerChoice == "rock") {
        let winner = "Player";
        humanScore++;
        console.log (`The winner is ${winner}`);
    }   
    else if(computerChoice == "paper") {
        let winner = "no one";
        console.log (`The winner is ${winner}`);
    }
    round++;

    if (round == 5) {
        console.log (`Human scored ${humanScore} in total`);
        console.log (`Computer scored ${computerScore} in total`);
    
        if (humanScore == computerScore) console.log("Draw!");
        else if(humanScore > computerScore) console.log("Human wins!");
        else console.log("Computer wins!");
        } 
}

function playScissors(computerChoice) {
    computerChoice = getComputerChoice();
    console.log(`Player chose scissors`);
    console.log(`Computer chose ${computerChoice}`);

    if (computerChoice == "rock") {
        let winner = "Computer";
        computerScore++;
        console.log (`The winner is ${winner}`);  
    }   
    else if(computerChoice == "paper") {
        let winner = "Player";
        humanScore++;
        console.log (`The winner is ${winner}`);
    }   
    else if(computerChoice == "scissors") {
        let winner = "no one";
        console.log (`The winner is ${winner}`);
    }
    round++;

    if (round == 5) {
        console.log (`Human scored ${humanScore} in total`);
        console.log (`Computer scored ${computerScore} in total`);
    
        if (humanScore == computerScore) console.log("Draw!");
        else if(humanScore > computerScore) console.log("Human wins!");
        else console.log("Computer wins!");
        } 
}   


    
