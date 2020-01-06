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
}

initializePlayArea();


function playGame() {
    if (!lockscreen) {
        lockscreen = true;
        let playerCard = PlayerDeck.splice(0, 1)[0];
        let computerCard = ComputerDeck.splice(0, 1)[0];
        document.getElementById("playerCurrentCard").src = playerCard.assetLocation;
        document.getElementById("computerCurrentCard").src = computerCard.assetLocation;

        setTimeout(evaluateCards, 500, playerCard, computerCard, [playerCard, computerCard]);
    }
}

function evaluateCards(playerCard, computerCard, bonusStack) {
    if (playerCard.computationalValue > computerCard.computationalValue) {
        //player wins
        console.log("player wins.");
        appendToDeck(PlayerDeck,bonusStack);
        document.getElementById("playerMessage").innerHTML = "Player Wins " + bonusStack.length + " cards!";
        setTimeout(updatePlayArea, 1000);
    }
    else if (computerCard.computationalValue > playerCard.computationalValue) {

        // computer wins
        console.log("computer wins");
        appendToDeck(ComputerDeck, bonusStack);
        document.getElementById("computerMessage").innerHTML = "Computer Wins " + bonusStack.length + " cards!";
        setTimeout(updatePlayArea, 1000);
    }
    else {
        //WAR!!!!
        //pull 3 cards from the player's deck and add to the bonus stack
        appendToDeck(bonusStack, PlayerDeck.splice(0,3));
        
        //pull 3 cards from the computer's deck and add to the bonus stack
        appendToDeck(bonusStack,ComputerDeck.splice(0, 3));

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
        setTimeout(evaluateCards, 1000, newPlayerCard, newComputerCard, bonusStack);
    }    
}

function appendToDeck(deck, cardArray) {
    for (let i = 0; i < cardArray.length; i++) {
        deck.push(cardArray[i]);
    }
}

