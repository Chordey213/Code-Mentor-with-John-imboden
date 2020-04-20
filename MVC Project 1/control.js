function initDinoCollection() {
    let collection = [];
    collection.push(new dinosaur("Naiades", "Baryonix", 115, "210/2,024", "813/813", "0/3,137", "675/675", "597/5,850", "1/436", "173%", "120%", "assets/Naiades.png"));
    collection.push(new dinosaur("Proteus", "Baryonix", 86, "109/968", "618/618", "0/2,441", "675/675", "564/4950", "4/397", "196%", "120%", "assets/Proteus.png"));
    collection.push(new dinosaur("Lachesis", "Allosaurus", 104, "2,520/2,520", "500/500", "0/7,181", "300/300", "9,968/9,968", "0/47", "237%", "90%", "assets/Lachesis.png"));
    collection.push(new dinosaur("Euryale", "Baryonix",74, "1,584/1,584", "585/585", "0/2,153", "270/270", "5,400/5,400", "3/416", "214%", "120%", "assets/Euryale.png"));
    collection.push(new dinosaur("Acrisius", "Sarco",156, "2,160/2,160", "1,800/1,800", "0/4,121", "645/645", "3,900/3,900", "0/390", "257%", "160%", "assets/Acrisius.png"));

    return collection;
};

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
    document.getElementById("results").innerHTML= addHTML;
};
displaySearchScreen();

function displayBrowseScreen(){
    let resultHTML = "";
    for(let i=0;i<dinoCollection.length;i++){
        resultHTML += createDisplayView(dinoCollection[i]);
    }

    document.getElementById("results").innerHTML =resultHTML;
    //add a button to go back to the search screen. by default, Browse dino's button dissapears.
};

//buttons displayed on screen(browse dinos, add dinos) need to be created in the controller, and updated by functions from the independant pages built by their JS file
