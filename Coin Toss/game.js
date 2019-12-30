var gamesPlayed = 0;
var gamesWon = 0;
var gamesLost = 0;
var choices = ["Heads", "Tails"];

function playGame(playerChoice){
    var result = coinFlipResult();
    var result2 = evaluate(playerChoice, result);
    gamesPlayed++;
    if(result2 === "Win"){
        gamesWon++;
    } else {
        gamesLost++;
    }
    document.getElementById("results").innerHTML = "You chose: " + playerChoice;
    document.getElementById("results").innerHTML += ", The Coin landed on: " + result;
    document.getElementById("results").innerHTML += ", " + result2;
    setScoreboard();
};

function setScoreboard(){
    document.getElementById("scoreboard").innerHTML = "Played: " + gamesPlayed + ", Won: " + gamesWon + ", Lost: " + (gamesPlayed- gamesWon);
};

setScoreboard();



function coinFlipResult(){
   let choice =  Math.floor(Math.random() * 2);
   return choices[choice];
   
};

function evaluate(playerChoice, choice){
    if(playerChoice != choice){
        return "Lose"
    } else {
        return "Win"
        
    }

};

document.getElementById("results").innerHTML = "This works!"