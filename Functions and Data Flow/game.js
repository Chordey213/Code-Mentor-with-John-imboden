let comics = [
    "Xmen",
    "Spider-Man",
    "Venom",
    "Avengers",
    "Hulk",
    "Ace the Bat-Hound",
    "Allen, Barry",
    "Allen, Bart",
    "Allen, Crispus",
    "Agent Liberty",
    "Air Wave"

];

var comicsClicked = [];

function eventHandler(event){
    var checked = event.checked;
    if(checked === true){
        comicsClicked.push(event.value);
        document.getElementById('SearchedResults').innerHTML = comicsClicked;
    } 

    if(checked === false){
        var clicked = comicsClicked.indexOf(event.value);
        comicsClicked.splice(clicked, 1);
        document.getElementById('SearchedResults').innerHTML = comicsClicked;
    }
    console.log(event);
};

//This is an example of Composition. It creates an individual control based off of what is passed in
function createCheckbox(comicTitle){
    let strComicTitle = `
    <label>
    <input type="checkbox" onClick='eventHandler(this)' value= '` + comicTitle + `'>
    <span>` + comicTitle + `</span></label>`;

    return strComicTitle
};


function printToScreen(stringsToPrint) {
    if (Array.isArray(stringsToPrint)) {
        let htmlString = "";
        for (let i = 0; i < stringsToPrint.length; i++) {
            htmlString += createCheckbox(stringsToPrint[i]);
            htmlString += "<br>";            
        }
        htmlString += `<span id="numberofstringsprinted"></span>`
        htmlString += '<div id="SearchedResults"></div>';
        document.getElementById("results").innerHTML += htmlString;

        return stringsToPrint.length;
    }
}

//<!----- MVP Description -----!>//
// Setup a Div with an Id for the purpose of being able to display the selected results
// <div id="results"></div>
// Create an OnClick handler (a function) that registers to the Onlcick event, passing in the checkboxes that are checked
// use an if statement, so that if the checkbox is selected, the item goes into the div. If the item is then unchecked, it removes from the div
// set the value of the checkbox to be the same value of what's going into the span (the comic title)
// create a global collection of the selected comics, and update the onlclick handler to either add to, or take away from the list of comics collected
// Update the contents of the "Selected Results" div with the collection of comics that were selected. 


function search(searchParam, collectionsToSearch) {
    var results = [];
    for (let i = 0; i < collectionsToSearch.length; i++) {
        if (collectionsToSearch[i].includes(searchParam)) {
            results.push(collectionsToSearch[i]);
        }
    }
    return results;
};

function main(){
    let userInput = prompt("Enter a search");

    let searchResults = search(userInput, comics);

    let numberOfStringsPrinted = printToScreen(searchResults);
    document.getElementById("numberofstringsprinted").innerHTML = "We found these comics: " + numberOfStringsPrinted;
};

main();




//Create a function that whenever I give a value <50, return a 1 >50, return a 2

function myValue() {
    var myValue = prompt("Pick a number");
    myValue = parseInt(myValue);
    if (myValue < 50) {
        return 1;
    } else if (myValue === 50){
       return 2;
    } else if(myValue > 50) {
        return 3;
    }


}


// console.log(myValue());

