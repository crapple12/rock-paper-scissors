
console.log("Hello World!");

const rng = ["rock", "paper", "scissors"];


function getComputerChoice() {
    const randomChoice = rng[Math.floor(Math.random() * rng.length)];
    // generates a random choice between rock, paper, and scissors before returning it below
    return randomChoice;
}

function getHumanChoice() {
    let que = prompt("Choose between rock, paper, or scissors!");
    alert(`Player chose ${que}`);
}
    getHumanChoice();





