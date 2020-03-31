// this page is the first page to load. The following items exist on page:
// A text input box for a search
//A browse button, which displays currently added dinosaurs
// an add button, which takes you to the add dino page.
// The main page should display a total count of the Dinosaurs that are in the library 

function createDisplayView(dinosaur) {
    let html = `
    <div id="outerBox"> `
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

//These elements exist in the Table Head
function createNameControl(dinosaur) {
    let nameHTML = `<tr style="Display: inline" id="` + dinosaur.name + `">` + dinosaur.name + ` </tr>`;
    return nameHTML;
};

function createLevelControl(dinosaur) {
    let levelHTML = `<tr style="Display: inline"id="` + dinosaur.level + `"> Level: ` + dinosaur.level + ` </tr>`;
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
    // this function creates the Left container div for the complex controller. 
    //This box contains all the statistical information for the dinosaur
    let leftBoxHTML = `<tr id="DinoStats">
    ` + createTypeControl(dinosaur) 
    +
    `
    </tr>`;
    return leftBoxHTML;
};

//These Elements exist inside the left hand Column of the table body
function createTypeControl(dinosaur) {
    let typeHTML = `<h5 id="` + dinosaur.type + `"> Type: ` + dinosaur.type + ` </h5>`;
    return typeHTML;
};

function createHealthControl(dinosaur) {
    let healthHTML = `<h5 style="Display: inline"id="` + dinosaur.health + `"> Health: ` + dinosaur.health + ` </h5>`;
    return healthHTML;
};

function createStaminaControl(dinosaur) {
    let staminaHTML = `<h5 style="Display: inline"id="` + dinosaur.stamina + `"> Stamina: ` + dinosaur.stamina + ` </h5>`;
    return staminaHTML;
};

function createTorpidityControl(dinosaur) {
    let torpidityHTML = `<h5 style="Display: inline"id="` + dinosaur.torpidity + `"> Torpidity:  ` + dinosaur.torpidity + ` </h5>`;
    return torpidityHTML;
};