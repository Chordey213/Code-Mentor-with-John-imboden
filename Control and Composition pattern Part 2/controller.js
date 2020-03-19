function initComicCollection(){
    let collection = [];
    collection.push(new Comic("Xmen", 1, false, "Bald guy teaches gifted and talented.", "mutants xmen cyclops wolverine jean gray powers", "Assets/Xmen1.jpg"))
    collection.push(new Comic("Conan", 132, true, "Random barbarian kills things with sword.", "barbarian medieval conan", "Assets/conan132.jpg"))
    collection.push(new Comic("Xmen", 2, false, "Bald guy teaches gifted and talented.", "mutants xmen cyclops wolverine jean gray powers", "Assets/Xmen2.jpg"))
    collection.push(new Comic("Xmen", 3, true, "Bald guy teaches gifted and talented.", "mutants xmen cyclops wolverine jean gray powers", "Assets/Xmenissue3.jpg"))
    collection.push(new Comic("Xmen", 4, false, "Bald guy teaches gifted and talented.", "mutants xmen cyclops wolverine jean gray powers", "Assets/Xmenissue4.jpg"))
    collection.push(new Comic("Xmen", 5, true, "Bald guy teaches gifted and talented.", "mutants xmen cyclops wolverine jean gray powers", "Assets/Xmenissue5.jpg"))
    collection.push(new Comic("Green Lantern", 2542, true, "Green light is not great for skin.", "powers light hope green lantern ryan reynolds", "Assets/Greenlanternissue2542.jpg"))
    return collection;
}

var comicCollection = initComicCollection();

function displayBrowseScreen(){
    let resultHTML = "";
    for(let i=0;i<comicCollection.length;i++){
        resultHTML += createDisplayView(comicCollection[i]);
    }

    document.getElementById("results").innerHTML =resultHTML;
}

function addViewSubmit(){
    let viewData = readDataValues();
    comicCollection.push(new Comic(viewData.name, viewData.issue, false, viewData.description, "", viewData.image));
    alert("The Data submitted successfully");
    displayBrowseScreen();
};

function displayAddScreen(){
    let resultHTML="";
    resultHTML += createAddView("addViewSubmit()");
    document.getElementById("results").innerHTML =resultHTML;
};

//runs immediately upon page opening
function main(){
    // let localComic = new Comic("Xmen", 1, false, "Bald guy teaches gifted and talented.", "mutants xmen cyclops wolverine jean gray powers", "Assets/Xmen1.jpg");

}

main();