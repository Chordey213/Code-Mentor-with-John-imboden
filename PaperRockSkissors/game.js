document.getElementById("resultView").innerHTML = "Results go here!";

var gamesPlayed = 0;
var gamesWon = 0;
var gamesLost = 0;

function setScoreBoard() {
    document.getElementById("scoreboard").innerHTML = "Won: " + gamesWon + ", Lost: " + gamesLost + ", Draw: " + (gamesPlayed - gamesWon - gamesLost);
};

setScoreBoard();

function playGame(playerChoice) {
    //player choice should be: (Rock, Paper or Scissors).
    gamesPlayed++;

    let computerChoice = getComputerChoice();
    let result = evaluate(playerChoice, computerChoice);

    if (result === "win") {
        gamesWon++
    } else if (result === "lose") {
        gamesLost++
    }



    document.getElementById("resultView").innerHTML = playerChoice + " vs " + computerChoice + "</br>" + result;
    setScoreBoard();
};

var choices = ["Paper", "Rock", "Scissors"];

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];

};

function evaluate(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "draw";
    }
    if (playerChoice == "Rock" && computerChoice === "Scissors") {
        return "win";
    }
    if (playerChoice == "Paper" && computerChoice === "Rock") {
        return "win";
    }
    if (playerChoice == "Scissors" && computerChoice === "Paper") {
        return "win";
    }

    return "lose";
};

