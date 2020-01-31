//*** Global Variables ***//
let cards = [
    ["two", 2],
    ["three", 3],
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["seven", 7],
    ["eight", 8],
    ["nine", 9],
    ["ten", 10],
    ["jack", 11],
    ["queen", 12],
    ["king", 13],
    ["ace", 14]
];

let suites = [
    "hearts", "diamonds", "spades", "clubs"
];

var Hands = [];
var playerCount = "";

window.addEventListener("keyup", checkKeyPress, false);
function checkKeyPress(key) {
    if (key.keyCode == "13") {
        var numberOfPlayers = document.getElementById("playerPrompt").value;
        playerCount = parseInt(numberOfPlayers);
        console.log(numberOfPlayers);
        createHand();
    }

};


//*** Game Descritption ***//
// A deck is shuffled, and 5 cards are dealt to all players

// //creates an empty array object 
function createHand() {
    for (let i = 0; i < playerCount; i++) {
        Hands.push([]);
        console.log("This is the number of players: ", playerCount)
    }
    playerPrompt.removeEventListener("keyup", checkKeyPress);
    document.getElementById("playerPrompt").value = "Can't change # of players.";
    console.log("This is the number of Hands in play: ", Hands);
    deal(Hands);

};



function buildDeck(cards, suites) {
    var playDeck = [];
    for (i = 0; i < suites.length; i++) {
        for (j = 0; j < cards.length; j++) {
            let newCard = {
                suite: suites[i],
                faceValue: cards[j][0],
                computationalValue: cards[j][1]
            }
            if (cards[j][1] <= 10) {
                newCard.assetLocation = "assets/" + cards[j][1] + "_of_" + suites[i] + ".svg";
            } else {
                newCard.assetLocation = "assets/" + cards[j][0] + "_of_" + suites[i] + ".svg";
            }
            playDeck.push(newCard);
        }

    }
    return playDeck;
};
newDeck = buildDeck(cards, suites);


function shuffleDeck(newDeck) {
    var shuffledDeck = [];
    for (i = 0; i < 52; i++) {
        let cardIndex = Math.floor(Math.random() * newDeck.length) * 1;
        shuffledDeck.push(newDeck[cardIndex]);
        newDeck.splice(cardIndex, 1);
    }
    return shuffledDeck;
};
newDeck = shuffleDeck(newDeck);
console.log("this is the built newDeck: ", newDeck);


function deal(hands) {
    //take in the newDeck and deal it out into hands for the player and the NPC
    // deal one card to the player, and then one card to the NPC, so on and so forth until all the players have 5 cards in their hand
    for (i = 0; i < 5; i++) {
        for (j = 0; j < hands.length; j++) {
            hands[j].push(newDeck.shift(1));
        }
    }
    console.log("These are the hands: ", hands);
};

//create pattern recognition. 
// we do have the card's computational value and the suite. These could be used to help develop the pattern recognition
// get the list of winning hands for poker from highest suite and cards(Flush, straight, etc) down to "high card"
// we need a function in order to loop over the hands the NPC is playing 
// we need to check each win condition against a hand, to see if a hand matches that pattern.
//5 card rules:
// players can throw away any amount of cards up to cards, with only one chance to redraw. 

function playGame() {

};