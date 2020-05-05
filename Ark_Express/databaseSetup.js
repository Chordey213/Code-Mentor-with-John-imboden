class dinosaur {
    constructor(name, type, level, health, stamina, torpidity, oxygen, food, weight, meleeDamage, movementSpeed, img) {
        this.name = name;
        this.type = type;
        this.level = level;
        this.health = health;
        this.stamina = stamina;
        this.torpidity = torpidity;
        this.oxygen = oxygen;
        this.food = food;
        this.weight = weight
        this.meleeDamage = meleeDamage;
        this.movementSpeed = movementSpeed;
        this.img = img;
    }
};

const sqlite3 = require("sqlite3").verbose();

const dinoDatabase = new sqlite3.Database('./database/dinos.db', (err) => {
    if (err) {
        console.error(err.message)
    }

    console.log("Connected to the Dino Database");
});

console.log()
function initDinoCollection() {
    let collection = [];
    collection.push(new dinosaur("Naiades", "Baryonix", 115, 2024, 813, 3137, 675, 5850, 436, 173, 120, "assets/Naiades.png"));
    collection.push(new dinosaur("Proteus", "Baryonix", 86, 968, 618, 2441, 675, 4950, 397, 196, 120, "assets/Proteus.png"));
    collection.push(new dinosaur("Lachesis", "Allosaurus", 104, 2520, 500, 7181, 300, 9968, 47, 237, 90, "assets/Lachesis.png"));
    collection.push(new dinosaur("Euryale", "Baryonix", 74, 1584, 585, 2153, 270, 5400, 416, 214, 120, "assets/Euryale.png"));
    collection.push(new dinosaur("Acrisius", "Sarco", 156, 2160, 1800, 4121, 645, 3900, 390, 257, 160, "assets/Acrisius.png"));

    return collection;
};


function addDinoToDatabase(dino) {
// console.log(`${dino.name}: meleeDamage=${dino.meleeDamage}`);

    dinoDatabase.run('INSERT INTO tames(name, type, level, health, stamina, torpidity, oxygen, food, weight, meleeDamage, movementSpeed, img) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [dino.name, dino.type, dino.level, dino.health, dino.stamina, dino.torpidity, dino.oxygen, dino.food, dino.weight, dino.meleeDamage, dino.movementSpeed, dino.img], function (err) {
        if (err) {
            console.log(err.message);
        }
        else console.log(`Created ${dino.name} with Row ID ${this.lastID}`);
    });
};


function initDatabaseDinos() {
    let dinos = initDinoCollection();

    for (i = 0; i < dinos.length; i++) {
        addDinoToDatabase(dinos[i]);
    }
    console.log('Finished uploading the Dinos')
};

// Create Dinosaur Database Table
// name, type, level, health, stamina, torpidity, oxygen, food, weight, meleeDamage, movementSpeed, img
dinoDatabase.run('CREATE TABLE tames(name TEXT, type TEXT, level INTEGER, health NUMERIC, stamina NUMERIC, torpidity NUMERIC, oxygen NUMERIC, food NUMERIC, weight NUMERIC, meleeDamage NUMERIC, movementSpeed NUMERIC, img TEXT)',
    (result, error) => {
        if (result) {
            console.log("The Table was added to the Database");
        } if (error) {
            console.log("Something went Wrong");
        }
        initDatabaseDinos()
    });

dinoDatabase.close();