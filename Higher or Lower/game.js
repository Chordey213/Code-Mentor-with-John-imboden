var gamesPlayed = 0;
var gamesWon = 0;
var gamesLost = 0;
var die1 = 0;
var die2 = 0;
var rollResult = 0;
var choices = ["Higher", "Lower"]


// roll two six sided dice. once the roll is completed, guess whether the next roll will be higher or lower


//Step 1: Roll 1 6 sided die, and get the result. store the result in a variable
function roll1(){
    var die1 = Math.floor(Math.random()*6) +1;
    return(die1);
};

//Step 2: Roll a second 6 sided die, and get the result. store the result in a variable
function roll2(){
    var die2 = Math.floor(Math.random()*6) +1;
    return(die2);
};

//Step 3: add the results of both die rolls together
function addResult(die1, die2){
    var result = die1 + die2;
    return result;
};

//Step 4: Display the result and prompt the user
function setScoreBoard(){
    document.getElementById("scoreboard").innerHTML = "Played: " + gamesPlayed + ", Won: " + gamesWon + ", Lost: " +(gamesPlayed-gamesWon);
};

function setResults(result){
    document.getElementById("results").innerHTML = rollResult;
};

//Step 5: Reroll both dice, and then compare to the users input

function initialize(){
    die1 = roll1();
    die2 = roll2();
    setScoreBoard();
    rollResult= addResult(die1, die2);
    setResults();
};
initialize();

function playGame(playerChoice){
//Step 1: Roll 1 6 sided die, and get the result. store the result in a variable
//Step 2: Roll a second 6 sided die, and get the result. store the result in a variable
//Step 3: add the results of both die rolls together
//Step 4: Display the result and prompt the user
//Step 5: Reroll both dice, and then compare to the users input
    gamesPlayed++;
    let roll1A = roll1();
    let roll2A = roll2();
    let total = roll1A + roll2A;
    let result = evaluate(rollResult, total, playerChoice);
    if(result === "Win"){
        gamesWon++;
        document.getElementById("results").innerHTML = result
        //die roll 1 was this
        //die roll 2 was this
        //you guessed this
        //display win or lose
        //rerun initialize
    } else {
        gamesLost++;
        document.getElementById("results").innerHTML = result
        //die roll 1 was this
        //die roll 2 was this
        //you guessed this
        //display win or lose
        //rerun initialize
    } setScoreBoard();
    
};

function evaluate(result1, result2, playerChoice){
    if(result2 > result1 && playerChoice === "Higher"){
        return "Win"
    }
    
    if( result2 < result1 && playerChoice === "Lower"){
        return "Win"
    } else {
        return "Lose"
    }
};

//there is a problem with the script. I need the code to automatically "Refresh" in order 