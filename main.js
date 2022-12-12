let wins = 0;
let losses = 0;
let ties = 0;
let userRPS;

let rpsButtons = document.querySelector("#rps");
const rockButton = document.querySelector("#rButton");
const paperButton = document.querySelector("#pButton");
const scissorsButton = document.querySelector("#sButton");

function rps(userChoice) {
let userChoiceNum;
let result;
if (userChoice == "R" || userChoice == "P" || userChoice == "S") {
    if (userChoice == "R") {
    userChoiceNum = 0;
    } else if (userChoice == "P") {
    userChoiceNum = 1;
    } else if (userChoice == "S") {
    userChoiceNum = 2;
}

let randomNum = Math.floor(Math.random() * 3);
let input = userChoiceNum - randomNum;
if (input == 0) {
    result = "t";
    ties = ties + 1;
} else if (input == 1 || input == -2) {
    result = "w";
    wins = wins + 1;
} else if (input == -1 || input == 2) {
    result = "l";
    losses = losses + 1;
}}
console.log(result); }

function score(){
    let winsScore = document.querySelector("#wins");
    winsScore.textContent = "Wins: " + wins;

    let lossesScore = document.querySelector("#losses");
    lossesScore.textContent = "Losses: " + losses;

    let tiesScore = document.querySelector("#ties");
    tiesScore.textContent = "Ties: " + ties;
}
score();

rockButton.addEventListener("click", function(){
    userRPS = "R";
    rps(userRPS);
    score();
})
paperButton.addEventListener("click", function(){
    userRPS = "P";
    rps(userRPS);
    score();
})
scissorsButton.addEventListener("click", function(){
    userRPS = "S";
    rps(userRPS);
    score();
})