

export function getDeck() {
    let cards = [
        {
            suite: "hearts",
            faceValue: 2,
            computationalValue: 2,
            assetLocation: "assets/2_of_hearts.svg"
        },
        {
            suite: "hearts",
            faceValue: 3,
            computationalValue: 3,
            assetLocation: "assets/3_of_hearts.svg"
        },
        {
            suite: "hearts",
            faceValue: 4,
            computationalValue: 4,
            assetLocation: "assets/4_of_hearts.svg"
        },
        {
            suite: "hearts",
            faceValue: 5,
            computationalValue: 5,
            assetLocation: "assets/5_of_hearts.svg"
        },
        {
            suite: "hearts",
            faceValue: 6,
            computationalValue: 6,
            assetLocation: "assets/6_of_hearts.svg"
        },
        {
            suite: "hearts",
            faceValue: 7,
            computationalValue: 7,
            assetLocation: "assets/7_of_hearts.svg"
        },
        {
            suite: "hearts",
            faceValue: 8,
            computationalValue: 8,
            assetLocation: "assets/8_of_hearts.svg"
        },
        {
            suite: "hearts",
            faceValue: 9,
            computationalValue: 9,
            assetLocation: "assets/9_of_hearts.svg"
        },
        {
            suite: "hearts",
            faceValue: 10,
            computationalValue: 10,
            assetLocation: "assets/10_of_hearts.svg"
        },
        {
            suite: "hearts",
            faceValue: "Jack",
            computationalValue: 11,
            assetLocation: "assets/jack_of_hearts2.svg"
        },
        {
            suite: "hearts",
            faceValue: "Queen",
            computationalValue: 12,
            assetLocation: "assets/queen_of_hearts2.svg"
        },
        {
            suite: "hearts",
            faceValue: "King",
            computationalValue: 13,
            assetLocation: "assets/king_of_hearts2.svg"
        },
        {
            suite: "hearts",
            faceValue: "Ace",
            computationalValue: 14,
            assetLocation: "assets/ace_of_hearts.svg"
        },
        {
            suite: "diamonds",
            faceValue: 2,
            computationalValue: 2,
            assetLocation: "assets/2_of_diamonds.svg"
        },
        {
            suite: "diamonds",
            faceValue: 3,
            computationalValue: 3,
            assetLocation: "assets/3_of_diamonds.svg"
        },
        {
            suite: "diamonds",
            faceValue: 4,
            computationalValue: 4,
            assetLocation: "assets/4_of_diamonds.svg"
        },
        {
            suite: "diamonds",
            faceValue: 5,
            computationalValue: 5,
            assetLocation: "assets/5_of_diamonds.svg"
        },
        {
            suite: "diamonds",
            faceValue: 6,
            computationalValue: 6,
            assetLocation: "assets/6_of_diamonds.svg"
        },
        {
            suite: "diamonds",
            faceValue: 7,
            computationalValue: 7,
            assetLocation: "assets/7_of_diamonds.svg"
        },
        {
            suite: "diamonds",
            faceValue: 8,
            computationalValue: 8,
            assetLocation: "assets/8_of_diamonds.svg"
        },
        {
            suite: "diamonds",
            faceValue: 9,
            computationalValue: 9,
            assetLocation: "assets/9_of_diamonds.svg"
        },
        {
            suite: "diamonds",
            faceValue: 10,
            computationalValue: 10,
            assetLocation: "assets/10_of_diamonds.svg"
        },
        {
            suite: "diamonds",
            faceValue: "Jack",
            computationalValue: 11,
            assetLocation: "assets/jack_of_diamonds2.svg"
        },
        {
            suite: "diamonds",
            faceValue: "Queen",
            computationalValue: 12,
            assetLocation: "assets/queen_of_diamonds2.svg"
        },
        {
            suite: "diamonds",
            faceValue: "King",
            computationalValue: 13,
            assetLocation: "assets/king_of_diamonds2.svg"
        },
        {
            suite: "diamonds",
            faceValue: "Ace",
            computationalValue: 14,
            assetLocation: "assets/ace_of_diamonds.svg"
        },
        {
            suite: "spades",
            faceValue: 2,
            computationalValue: 2,
            assetLocation: "assets/2_of_spades.svg"
        },
        {
            suite: "spades",
            faceValue: 3,
            computationalValue: 3,
            assetLocation: "assets/3_of_spades.svg"
        },
        {
            suite: "spades",
            faceValue: 4,
            computationalValue: 4,
            assetLocation: "assets/4_of_spades.svg"
        },
        {
            suite: "spades",
            faceValue: 5,
            computationalValue: 5,
            assetLocation: "assets/5_of_spades.svg"
        },
        {
            suite: "spades",
            faceValue: 6,
            computationalValue: 6,
            assetLocation: "assets/6_of_spades.svg"
        },
        {
            suite: "spades",
            faceValue: 7,
            computationalValue: 7,
            assetLocation: "assets/7_of_spades.svg"
        },
        {
            suite: "spades",
            faceValue: 8,
            computationalValue: 8,
            assetLocation: "assets/8_of_spades.svg"
        },
        {
            suite: "spades",
            faceValue: 9,
            computationalValue: 9,
            assetLocation: "assets/9_of_spades.svg"
        },
        {
            suite: "spades",
            faceValue: 10,
            computationalValue: 10,
            assetLocation: "assets/10_of_spades.svg"
        },
        {
            suite: "spades",
            faceValue: "Jack",
            computationalValue: 11,
            assetLocation: "assets/jack_of_spades2.svg"
        },
        {
            suite: "spades",
            faceValue: "Queen",
            computationalValue: 12,
            assetLocation: "assets/queen_of_spades2.svg"
        },
        {
            suite: "spades",
            faceValue: "King",
            computationalValue: 13,
            assetLocation: "assets/king_of_spades2.svg"
        },
        {
            suite: "spades",
            faceValue: "Ace",
            computationalValue: 14,
            assetLocation: "assets/ace_of_spades.svg"
        },
        {
            suite: "clubs",
            faceValue: 2,
            computationalValue: 2,
            assetLocation: "assets/2_of_clubs.svg"
        },
        {
            suite: "clubs",
            faceValue: 3,
            computationalValue: 3,
            assetLocation: "assets/3_of_clubs.svg"
        },
        {
            suite: "clubs",
            faceValue: 4,
            computationalValue: 4,
            assetLocation: "assets/4_of_clubs.svg"
        },
        {
            suite: "clubs",
            faceValue: 5,
            computationalValue: 5,
            assetLocation: "assets/5_of_clubs.svg"
        },
        {
            suite: "clubs",
            faceValue: 6,
            computationalValue: 6,
            assetLocation: "assets/6_of_clubs.svg"
        },
        {
            suite: "clubs",
            faceValue: 7,
            computationalValue: 7,
            assetLocation: "assets/7_of_clubs.svg"
        },
        {
            suite: "clubs",
            faceValue: 8,
            computationalValue: 8,
            assetLocation: "assets/8_of_clubs.svg"
        },
        {
            suite: "clubs",
            faceValue: 9,
            computationalValue: 9,
            assetLocation: "assets/9_of_clubs.svg"
        },
        {
            suite: "clubs",
            faceValue: 10,
            computationalValue: 10,
            assetLocation: "assets/10_of_clubs.svg"
        },
        {
            suite: "clubs",
            faceValue: "Jack",
            computationalValue: 11,
            assetLocation: "assets/jack_of_clubs2.svg"
        },
        {
            suite: "clubs",
            faceValue: "Queen",
            computationalValue: 12,
            assetLocation: "assets/queen_of_clubs2.svg"
        },
        {
            suite: "clubs",
            faceValue: "King",
            computationalValue: 13,
            assetLocation: "assets/king_of_clubs2.svg"
        },
        {
            suite: "clubs",
            faceValue: "Ace",
            computationalValue: 14,
            assetLocation: "assets/ace_of_clubs.svg"
        }
    ]

function shuffle(){
    let shuffledDeck = [];
    
}

let deck = {
    cards:cards,
    shuffle:shuffle

}

    return deck;
}