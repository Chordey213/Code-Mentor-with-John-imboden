// this page is the first page to load. The following items exist on page:
// A text input box for a search
//A browse button, which displays currently added dinosaurs
// an add button, which takes you to the add dino page.
// The main page should display a total count of the Dinosaurs that are in the library 

function createDisplayView(dinosaur) {
    let html = `
    <div id="outerBox"> `
        + createLeftBoxControl(dinosaur)
        + `
</div>
`;
    return html;
};

function createNameControl(dinosaur) {
    let nameHTML = `<h3 style="Display: inline" id="` + dinosaur.name + `">` + dinosaur.name + ` </h3>`;
    return nameHTML;
};

function createLevelControl(dinosaur) {
    let levelHTML = `<h5 style="Display: inline"id="` + dinosaur.level + `"> Level: ` + dinosaur.level + ` </h5>`;
    return levelHTML;
};

function createTypeControl(dinosaur) {
    let typeHTML = `<h5 style="Display: inline"id="` + dinosaur.type + `"> Type: ` + dinosaur.type + ` </h5>`;
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



function createLeftBoxControl(dinosaur) {
    // this function creates the Left container div for the complex controller. 
    //This box contains all the statistical information for the dinosaur
    let leftBoxHTML = `
    <div id="`+ dinosaur.name + dinosaur.type + ` insideLeftBox"> `
        + createNameControl(dinosaur)
        + createLevelControl(dinosaur)
        + createTypeControl(dinosaur)
        + createHealthControl(dinosaur)
        + createStaminaControl(dinosaur)
        + createTorpidityControl(dinosaur)
        + `
    </div>
    `;
    return leftBoxHTML;
};