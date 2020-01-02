//The goal is to create a basic DnD Combat simulator. 
//The combat simulator starts off with a level 3 Human Fighter, versus a standard mob from that area/level
//Combat will last three turns
//I'd like to add a health bar later, to display damges done to both the enemy and the player



//*** Pseudo Code ***//
// 1. Create the player. Use an object to store all of the varios stats taken from the "Human_fighter" PDF.
let player = {
    'name': 'Chordey',
    'str': 16,
    'dex': 14,
    'con': 15,
    'int': 9,
    'wis': 13,
    'cha': 11

};
// 2. Create the enemey in the same fashion as the player.
let mob = {
    'name': 'kobold',
    'str': 9,
    'dex': 13,
    'con': 10,
    'int': 10,
    'wis': 9,
    'cha': 8
};
// 3. setup the mechanisms for combat using functions. This will be broken down into several steps and functions
// 4. Setup the logic for a win  or lose scenario
// 5. Give the player the option to Replay. Later iterations may offer the opportunity to face newer enemies
