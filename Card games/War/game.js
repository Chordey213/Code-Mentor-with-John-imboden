function displayACard(card) {
    console.log("Displaying the " + card.faceValue + " of " + card.suite);
    document.getElementById("cardImage").src = card.assetLocation;
}

var deck = getDeck();
var lockscreen = false;

deck.shuffle();
console.log("Here are the cards outside of the limited scope.", deck);

var PlayerDeck = deck.cards.splice((deck.cards.length / 2.0));
var ComputerDeck = deck.cards;

function initializePlayArea() {
    document.getElementById("playerDeckBack").src = "assets/Card_Back.svg";
    document.getElementById("computerDeckBack").src = "assets/Card_Back.svg";
    updatePlayArea();
}

function updatePlayArea() {

    document.getElementById("playerDeckCount").innerHTML = PlayerDeck.length;
    document.getElementById("computerDeckCount").innerHTML = ComputerDeck.length;
    document.getElementById("playerMessage").innerHTML = "";
    document.getElementById("computerMessage").innerHTML = "";
    lockscreen = false;
    if(isAutoplay()){
        playGame();
    }
}

initializePlayArea();


var messageTimeout = 200;
var evaluateTimeout = 50;
var autoplayTimeout = messageTimeout+evaluateTimeout+50;

function isAutoplay(){
    var autoplay = document.getElementById("optAutoPlay").checked;
    return autoplay;
}


function playGame() {
    if (!lockscreen) {
        lockscreen = true;
        let playerCard = PlayerDeck.splice(0, 1)[0];
        let computerCard = ComputerDeck.splice(0, 1)[0];        
        document.getElementById("playerCurrentCard").src = playerCard.assetLocation;
        document.getElementById("computerCurrentCard").src = computerCard.assetLocation;

        setTimeout(evaluateCards, evaluateTimeout, playerCard, computerCard, [playerCard, computerCard]);
        
    }
}

function evaluateCards(playerCard, computerCard, bonusStack) {
    if (playerCard.computationalValue > computerCard.computationalValue) {
        //player wins
        console.log("player wins.");
        appendToDeck(PlayerDeck, bonusStack);
        document.getElementById("playerMessage").innerHTML = "Player Wins " + bonusStack.length + " cards!";
        if (isGameOver()) {
            setGameOverStatus();
            return;
        }
        setTimeout(updatePlayArea, messageTimeout);
    }
    else if (computerCard.computationalValue > playerCard.computationalValue) {

        // computer wins
        console.log("computer wins");
        appendToDeck(ComputerDeck, bonusStack);
        document.getElementById("computerMessage").innerHTML = "Computer Wins " + bonusStack.length + " cards!";
        if (isGameOver()) {
            setGameOverStatus();
            return;
        }
        setTimeout(updatePlayArea, messageTimeout);
    }
    else {
        //WAR!!!!
        //pull 3 cards from the player's deck and add to the bonus stack
        appendToDeck(bonusStack, PlayerDeck.splice(0, 3));

        //pull 3 cards from the computer's deck and add to the bonus stack
        appendToDeck(bonusStack, ComputerDeck.splice(0, 3));
        
        //Before the fight see if anyone lost.
        if (isGameOver()) {
            setGameOverStatus();
            return;
        }

        //pull a new fighter card from the computer and player
        let newPlayerCard = PlayerDeck.splice(0, 1)[0];
        let newComputerCard = ComputerDeck.splice(0, 1)[0];

        //add them to the payout.
        bonusStack.push(newPlayerCard);
        bonusStack.push(newComputerCard);

        //set messages and update the screen as needed.
        document.getElementById("playerMessage").innerHTML = (bonusStack.length / 2) - 1 + " cards on the stack";
        document.getElementById("computerMessage").innerHTML = (bonusStack.length / 2) - 1 + " cards on the stack";
        document.getElementById("playerCurrentCard").src = newPlayerCard.assetLocation;
        document.getElementById("computerCurrentCard").src = newComputerCard.assetLocation;
        setTimeout(evaluateCards, messageTimeout, newPlayerCard, newComputerCard, bonusStack);
    }
}

function appendToDeck(deck, cardArray) {
    for (let i = 0; i < cardArray.length; i++) {
        deck.push(cardArray[i]);
    }
}

function isGameOver() {
    if (PlayerDeck.length === 0) {
        return true;
    }
    if (ComputerDeck.length === 0) {
        return true;
    }
    return false;
}

function setGameOverStatus() {    
    document.getElementById("playerDeckCount").innerHTML = PlayerDeck.length;
    document.getElementById("computerDeckCount").innerHTML = ComputerDeck.length;

    if (PlayerDeck.length === 0) {
        document.getElementById("playerMessage").innerHTML = "You Lost, better luck next time! <br/>Hit F5 to reset and play again.";
        document.getElementById("playerDeckBack").src = "";
    }

    
    if (ComputerDeck.length === 0) {
        document.getElementById("playerMessage").innerHTML = "You Won, keep it up! <br/> Hit F5 to reset and play again.";
        document.getElementById("computerDeckBack").src = "";
    }

}

