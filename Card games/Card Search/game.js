//*** cards Search Project ***//


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


//*** Gameplaye  ***//

// create the deck and shuffle it
function buildDeck(cards, suites) {
    //create an array to push the cards to
    var playDeck = [];
    // loop over the cards and suites arrays, in order to build a card from each
    for (i = 0; i < suites.length; i++) {
        for (j = 0; j < cards.length; j++) {
            //create a card object:
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
            //push the card to the playDeck
            playDeck.push(newCard);
        }

    }
    //return the playDeck
    return playDeck;
};
// run the function with the arguments
newDeck = buildDeck(cards, suites);
// console.log(newDeck);

// Shuffle the newDeck
function shuffleDeck(newDeck) {
    //create an empty array to hold the shuffled deck
    let shuffledDeck = [];
    // loop over the deck of cards
    for (i = 0; i < 52; i++) {
        //pull a card out at random
        let cardIndex = Math.floor(Math.random() * newDeck.length) * 1;
        //push the shuffled card to the bottom of the shuffled deck:
        shuffledDeck.push(newDeck[cardIndex]);
        // remove the card from newDeck, in order for it to be pushed to shuffledDeck, and not counted again during shuffling
        newDeck.splice(cardIndex, 1);
    }
    // return the shuffled deck
    return shuffledDeck;
};
newDeck = shuffleDeck(newDeck);
console.log(newDeck);

function newImage(){
    // console.log(newCard.assetLocation);
    var img = new Image();
    img.src = "assets/" + newDeck[i].computationalValue + "_of_" + newDeck[i].suite + ".svg";
    document.getElementById("results").appendChild(img);
};

// create a function that searches over the newDeck array
function search() {
    var search = document.getElementById("searchbox").value;
    for (i = 0; i < newDeck.length; i++) {
        if (search === newDeck[i].suite || search === newDeck[i].faceValue) {
            newImage(newDeck[i])
            console.log(newDeck[i]);
            // return newDeck[i];
        } 
        if(search != newDeck[i]){
            parseInt(search);

        }
    }
};


