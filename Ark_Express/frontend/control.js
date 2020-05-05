
var dinoCollection = initDinoCollection();

function displaySearchScreen(){
    let searchHTML = "";
    searchHTML += createSearchDisplayView();
    document.getElementById("results").innerHTML= searchHTML
};

// displaySearchScreen();

function displayAddScreen(){
    let addHTML = "";
    addHTML += createAddDisplayView();
    document.getElementById("add").innerHTML= addHTML;
    createSubmit();
};
displaySearchScreen();

function displayBrowseScreen(){
    let resultHTML = "";
    for(let i=0;i<dinoCollection.length;i++){
        resultHTML += createDisplayView(dinoCollection[i]);
    }

    document.getElementById("results").innerHTML =resultHTML;
    document.getElementById("add").innerHTML = "";
    //add a button to go back to the search screen. by default, Browse dino's button dissapears.
};

//buttons displayed on screen(browse dinos, add dinos) need to be created in the controller, and updated by functions from the independant pages built by their JS file
