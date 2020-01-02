//The goal is to create a basic DnD Combat simulator. 
//The combat simulator starts off with a level 3 Human Fighter, versus a standard mob from that area/level
//Combat will last three turns
//I'd like to add a health bar later, to display damges done to both the enemy and the player



//*** Pseudo Code ***//

//
// 1. Create the player. Use an object to store all of the varios stats taken from the "Human_fighter" PDF.
// 2. Create the enemey in the same fashion as the player.
// 3. setup the mechanisms for combat using functions. This will be broken down into several steps and functions
//    A. To determine an ability modifier without consulting the table, subtract 10 from the ability score and then divide the total by 2 (round down). 
// 4. Setup the logic for a win  or lose scenario
// 5. Give the player the option to Replay. Later iterations may offer the opportunity to face newer enemies


//*** Code ***//
let abilities = {
    'str': '',
    'dex': '',
    'con': '',
    'int': '',
    'wis': '',
    'cha': ''
};
// 1. Create the player. Use an object to store all of the varios stats taken from the "Human_fighter" PDF.
let player = {
    'name': 'Chordey',
    'str': 16,
    'dex': 14,
    'con': 15,
    'int': 9,
    'wis': 13,
    'cha': 11,
    'AC': 18
};
// 2. Create the enemey in the same fashion as the player.
let mob = {
    'name': 'kobold',
    'str': 9,
    'dex': 13,
    'con': 10,
    'int': 10,
    'wis': 9,
    'cha': 8,
    'AC': 15
};
// 3. setup the mechanisms for combat using functions. This will be broken down into several steps and functions
function abilityMod(playerAbility){
    let attackChance = Math.floor((playerAbility - 10)/2);
    console.log(attackChance);
};

abilityMod(player.str);

function die20Roll(){
    var die1 = Math.floor(Math.random()*20)+1;
    console.log(die1);
    return die1;
};
die20Roll();

function hitCount(die1, attackChance, mob){
    let hitChance = die1 + attackChance;
    let AC = mob.AC;
    //I can't seem to access the mobs AC here. I should look at mimmicing the evaluate function from "higher or lower"

    if(hitChance > AC){
        console.log("Hit!");
        return "Hit!";
    } else {
        Console.log("Miss!");
        "Miss!";
    }
};
// hitCount();
console.log(mob.AC);
// 4. Setup the logic for a win  or lose scenario
// 5. Give the player the option to Replay. Later iterations may offer the opportunity to face newer enemies