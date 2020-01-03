//*** Pseudo Code ***//


// The game is War. The idea is to have a higher card than the NPC, in order to collect all cards in the stack. 
// You win by collecting tyhe whole deck.

// 1. Get a deck of cards.
//     A. Define a card Object we need a suite, a face value, a computational value
//        (A mathematic value for the card, used for comparing one card to another),
//        Asset Location(The location of the image of the card in the folder structure).
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

// This object builds one card from the cards and suites array literals
let deck = {
    newCard: {
        suite: suites[0],
        faceValue: card[0][0],
        computationalValue: card[0][1],
        assetLocation: "assets/" + card[0][1] + "_of_" + suites[0] + ".svg"
    }
};
//you need to break down exactly how to build a deck, given the information that you have.
// I need to place 14 cards in 4 suites
function buildDeck(card, suites){
    
}

function displayCard(deck) {
    let cardImage = document.getElementById("img").src = deck.newCard.assetLocation;
    return cardImage;
};
displayCard(deck);


console.log(deck);

// 2. Shuffle all of the cards
//     B. develop a way to unstack the deck, and randomize the order. 
// 3. divvy cards out to players
//     A. Split the deck into two stacks. A collection for the User, and a Collection for the Computer
// 4. Begin gameplay
//      A. the Player must click a button to draw a card from their stack
//          Whenever the player draws the card, it is removed from the TOP of their deck, and from the collection
//      B. The computer must draw a card from the top of its deck, and ensure that it is removed from the collection
//      C. Evaluate which card has the higher computational value
//      D. The winner takes the cards from the round, and places them on the bottom of their deck.
// 5. Repeat gameplay until one of the collections reaches a count of Zero.
//      A. Once this happens, a winner is declared. Thbe winner will be placed on screen. 
//      B. Capture the player's name before the game starts