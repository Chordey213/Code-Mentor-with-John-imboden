//*** Pseudo Code ***//


// The game is War. The idea is to have a higher card than the NPC, in order to collect all cards in the stack. 
// You win by collecting tyhe whole deck.

// 1. Get a deck of cards.
//     A. Define a card Object we need a suite, a face value, a computational value
//        (A mathematic value for the card, used for comparing one card to another),
//        Asset Location(The location of the image of the card in the folder structure).
var newDeck = [];
let card = [
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

function buildDeck1(card, suites) {
    var playDeck = [];
    
    for (i = 0; i < suites.length; i++) {
        for (j = 0; j < card.length; j++) {
            let newCard = {
                suite: suites[i],
                faceValue: card[j][0],
                computationalValue: card[j][1],
                assetLocation: "assets/" + card[j][1] + "_of_" + suites[i] + ".svg"
            }
            // var cardImage = "assets/" + card[j][1] + "_of_" + suites[i] + ".svg"
            // for(ext in cardImage){
            //     for(i=0;i< cardImage[ext];i++){
            //         src = "assets/" + cardImage + "_of_" + (i+1) + ".svg" + ext;
            //         if(src != cardImage){
            //             var cardImage = "assets/" + card[j][0] + "_of_" + suites[i] + ".svg" 
            //             console.log(cardImage);
            //             return cardImage 
            //         }
            //     }
            // }

            playDeck.push(newCard);
            // console.log(newCard.assetLocation);
        }

    }
    return playDeck;
};
newDeck = buildDeck1(card, suites);



function displaystack() {
    let cardAImage = document.getElementById("playerdeck").src = "assets/Card_Back.svg";
    let cardBImage = document.getElementById("npcdeck").src = "assets/Card_Back.svg";
    return cardAImage, cardBImage;;
};

// 2. Shuffle all of the cards
//     B. develop a way to unstack the deck, and randomize the order. 
function shuffleDeck(newDeck) {
    var shuffledDeck = [];
    for (i = 0; i < 52; i++) {
        // shuffle the newDeck by removing cards at random and inserting them into the new deck
        // create a variable to store one card, and remove one random card from newDeck
        let cardIndex = Math.floor(Math.random() * newDeck.length) * 1;
        //push that new card to the shuffled deck by index of the card
        shuffledDeck.push(newDeck[cardIndex]);
        // remove the card from newDeck, in order for it to be pushed to shuffledDeck, and not counted again during shuffling
        newDeck.splice(cardIndex, 1);
    }
    return shuffledDeck;
};
newDeck = shuffleDeck(newDeck);

// 3. divvy cards out to players
//     A. Split the deck into two stacks. A collection for the User, and a Collection for the Computer
var playerDeck = newDeck.splice(26);
var npcDeck = newDeck;
console.log("This is the players deck: ", playerDeck);
console.log("This is the Computers deck: ", npcDeck);
// 4. Begin gameplay


//      A. the Player must click a button to draw a card from their stack
//          Whenever the player draws the card, it is removed from the TOP of their deck, and from the collection
//      B. The computer must draw a card from the top of its deck, and ensure that it is removed from the collection
//      C. Evaluate which card has the higher computational value
//      D. The winner takes the cards from the round, and places them on the bottom of their deck.
function playGame() {
    var playerCard = playerDeck.shift(1);   
    var npcCard = npcDeck.shift(1);
    displayCard(playerCard, npcCard);
    console.log(playerCard);
    console.log(npcCard);
    displaystack();
    return playerCard, npcCard;

};

function displayCard(playerCard, npcCard) {
    document.getElementById("player1Card").src=playerCard.assetLocation;
    document.getElementById("npc1Card").src=npcCard.assetLocation;
    return playerCard, npcCard;
};

function evaluate(playerCard, npcCard){
    if(playerCard > npcCard){
        
    }
}

// 5. Repeat gameplay until one of the collections reaches a count of Zero.
//      A. Once this happens, a winner is declared. Thbe winner will be placed on screen. 
//      B. Capture the player's name before the game starts