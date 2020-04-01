// this page is the first page to load. The following items exist on page:
// A text input box for a search
//A browse button, which displays currently added dinosaurs
// an add button, which takes you to the add dino page.
// The main page should display a total count of the Dinosaurs that are in the library 

function createDisplayView(dinosaur) {
    let html = `
    <div id="`+ dinosaur.name + `"> `
        + createTableControl(dinosaur)
        +`
</div>
`;
    return html;
};


//The following function creates the table in which the Dino information is displayed
function createTableControl(dinosaur){
    let tableHTML = `<table id="` + dinosaur.name + `">` + 
    createTableHeadControl(dinosaur) +
    createTableBodyControl(dinosaur) +
    `</table>`;
    return tableHTML;

};

//The following elements create the varios elements used to construct the "Dino info Table Design"

//***---Table Head Design ---***//

function createTableHeadControl(dinosaur){
    let tableHeadHTML =  `<thead id="`+ dinosaur.name +`">` + 
    createNameControl(dinosaur) +
    createLevelControl(dinosaur) +
    `</thead>`;
    return tableHeadHTML;
};

//These elements exist inside the Table Head
function createNameControl(dinosaur) {
    let nameHTML = `<tr id="` + dinosaur.name + `">` + dinosaur.name + ` </tr>`;
    return nameHTML;
};

function createLevelControl(dinosaur) {
    let levelHTML = `<tr id="` + dinosaur.level + `"> Level: ` + dinosaur.level + ` </tr>`;
    return levelHTML;
};


//***---Table Body Design ---***//
function createTableBodyControl(dinosaur){
    let tableBodyHTML = `<tbody id="` + dinosaur.name + dinosaur.level + `"> ` 
    + createLeftBoxControl(dinosaur) 
    + 
    `</tbody>`;
    return tableBodyHTML;
};

function createLeftBoxControl(dinosaur) {
    // This function creates the Left container table column for the complex controller. 
    // This box contains all the statistical information for the dinosaur
    let leftBoxHTML = `<tr id="DinoStats">
    ` + createTypeControl(dinosaur) 
    + createHealthControl(dinosaur)
    + createStaminaControl(dinosaur)
    + createTorpidityControl(dinosaur)
    + createOxygenControl(dinosaur)
    + createFoodControl(dinosaur)
    + createWeightControl(dinosaur)
    + createMeleeControl(dinosaur)
    + createMovementControl(dinosaur)
    +
    `
    </tr>`;
    return leftBoxHTML;
};

function createRightBoxControl(dinosaur){
    // This function creates the right box container table column for the complex controller
    // This box contains the Image of the dinosaur, as taken from the Ark Wiki
    let rightBoxHTML = `<tr id="Dinoimg">
    ` + createDinoImageControl(dinosaur) +
    `
    </tr>`;
    return rightBoxHTML;
};

//These Elements exist inside the left hand Column of the table body
function createTypeControl(dinosaur) {
    let typeHTML = `<h5 id="` + dinosaur.type + `"> Type: ` + dinosaur.type + ` </h5>`;
    return typeHTML;
};

function createHealthControl(dinosaur) {
    let healthHTML = `<h5 id="` + dinosaur.health + `"> Health: ` + dinosaur.health + ` </h5>`;
    return healthHTML;
};

function createStaminaControl(dinosaur) {
    let staminaHTML = `<h5 id="` + dinosaur.stamina + `"> Stamina: ` + dinosaur.stamina + ` </h5>`;
    return staminaHTML;
};

function createTorpidityControl(dinosaur) {
    let torpidityHTML = `<h5 id="` + dinosaur.torpidity + `"> Torpidity:  ` + dinosaur.torpidity + ` </h5>`;
    return torpidityHTML;
};

function createOxygenControl(dinosaur){
    let oxygenHTML = `<h5 id="` + dinosaur.oxygen + `"> Oxygen:  ` + dinosaur.oxygen + ` </h5>`;
    return oxygenHTML;
};

function createFoodControl(dinosaur){
    let foodHTML = `<h5 id="` + dinosaur.food + `"> Food:  ` + dinosaur.food + ` </h5>`;
    return foodHTML
};

function createWeightControl(dinosaur){
    let weightHTML = `<h5 id="` + dinosaur.weight + `"> Weight:  ` + dinosaur.weight + ` </h5>`;
    return weightHTML;
};

function createMeleeControl(dinosaur){
    let meleeHTML = `<h5 id="` + dinosaur.meleeDamage + `"> Melee:  ` + dinosaur.meleeDamage + ` </h5>`;
    return meleeHTML;
};

function createMovementControl(dinosaur){
    let moveHTML = `<h5 id="` + dinosaur.movementSpeed + `"> Movement Speed:  ` + dinosaur.movementSpeed + ` </h5>`;
    return moveHTML;
};

//These Elements exist inside the right hand Column of the table body

function createDinoImageControl(dinosaur){
    let imgHTML = `<image id="` + dinosaur.img + `" src="` + dinosaur.img +`" alt="` + dinosaur.name + `>`;
    return imgHTML;
};