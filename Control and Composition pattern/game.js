//Controls can be anything on the page. I.E. the comic titles plus the checkboxes from Functions and Data flows
// The concept of composition is the act of stacking or putting together multiple controls, 
// in order to create some kind of modular, reusable piece (Like react components)
// with regard to the comics, we took the collection of strings of the comics, and turned them in to a comic object 
// with a title, issue number, bollean of read (true or false) and a description of the comic
// the collection is then pushed to an array, turning the array in to an array of the comics objects.
// using a function, we turned all comics into comic objects
// afterwards we had to update the search function to have the comics title. since the array is no longer an array of strings, but an array of objects accessed by dot notation


//Controls are potentially Anything a user will interact with

// creating composition pseudo code
// convert my comic book list of string titles into a comic collection of objects
    // the object can have any property type I choose
// once the list is converted, update the search function to make use of one of the properties created above
// Add, in some way shape or form, a composed text box that is a part of the control unit (The displayed comic or card title)


// HTML Mockup
{/* <div id="outerBox">
<h2 style="Display: inline">Title goes here</h2> <h2 style="display: inline">#132</h2>
<a style="display: block" href="#">See more . . . </a>
    <div id="expanderBox">
        <img src="assets/conan 132.jpg" style ="width: 350px; vertical-align: text-top">
        <span>Descitpion goes Here</span>
    </div> */}

function createOuterControl(comic){
    let html = `
    <div id="`+comic.title+comic.issueNumber+`outerBox">
    `+createTitleControl(comic)
    + createIssueNumberControl(comic)
    + createExpanderControl(comic) + `
    </div>
    `;
    return html;
};

function createDescriptionControl(comic){
    let descritptionHTML = `<span>`+comic.description+`</span>`;
    return descritptionHTML;
};

function createExpanderControl(comic){
    let expanderBoxHTML = `<a style="display: block;" href="javascript:toggleExpanderBox('`+comic.title+comic.issueNumber+`ExpanderBox')">See more . . . </a>
    <div id="`+comic.title+comic.issueNumber+`ExpanderBox" hidden>`
    +createImageFromComic(comic)+
    createDescriptionControl(comic)+`
    </div>
    `;
    return expanderBoxHTML;
};

function createIssueNumberControl(comic){
    let issueNumberHTML=`<h2 style="display: inline">`+comic.issueNumber+`</h2>`;
    return issueNumberHTML;
};

function createTitleControl(comic){
    let titleHTML = `<h2 style="Display: inline">`+comic.title+`</h2>`;
    return titleHTML;
};

function toggleExpanderBox(id){
    let box = document.getElementById(id);
    if(box.hidden){
        box.hidden = false;
    } else {
        box.hidden=true;
    }
};

function createComic(title, issueNumber, hasRead, description, tags, img)
{
    let comic = {title, issueNumber, hasRead, description, tags, id: title+issueNumber, img};
    return comic;
}

//Summary 02/29/2020
//We created a mockup HTML page. This page showed the structure of the HTML control item we are attempting to create. 
//The control object contains the nested HTML elements, in order to create a page matching our wireframe.
//We then built individual functions that create each aspect of the HTML Control object in the form of a string that 
//contains the indivdual elements required for constructing the control object.
//Then, using those functions, we built the complex control that are made up of the functions creating the other controls. 
//Afterward, it was a matter of nesting the correct subfunction into the correct function, in order to build the control to match the visual layout of the HTML_ComplexControl.

function initComicCollection(){
    let collection = [];
    collection.push(createComic("Xmen", 1, false, "Bald guy teaches gifted and talented.", "mutants xmen cyclops wolverine jean gray powers", "Assets/Xmen1.jpg"))
    collection.push(createComic("Conan", 132, true, "Random barbarian kills things with sword.", "barbarian medieval conan", "Assets/conan132.jpg"))
    collection.push(createComic("Xmen", 2, false, "Bald guy teaches gifted and talented.", "mutants xmen cyclops wolverine jean gray powers", "Assets/Xmen2.jpg"))
    collection.push(createComic("Xmen", 3, true, "Bald guy teaches gifted and talented.", "mutants xmen cyclops wolverine jean gray powers", "Assets/Xmenissue3.jpg"))
    collection.push(createComic("Xmen", 4, false, "Bald guy teaches gifted and talented.", "mutants xmen cyclops wolverine jean gray powers", "Assets/Xmenissue4.jpg"))
    collection.push(createComic("Xmen", 5, true, "Bald guy teaches gifted and talented.", "mutants xmen cyclops wolverine jean gray powers", "Assets/Xmenissue5.jpg"))
    collection.push(createComic("Green Lantern", 2542, true, "Green light is not great for skin.", "powers light hope green lantern ryan reynolds", "Assets/Greenlanternissue2542.jpg"))
    return collection;
}

//runs immediately upon page opening
function main(){
    // let localComic = createComic("Xmen", 1, false, "Bald guy teaches gifted and talented.", "mutants xmen cyclops wolverine jean gray powers", "Assets/Xmen1.jpg");
    let resultHTML = "";
    let comicCollection = initComicCollection();
    for(let i=0;i<comicCollection.length;i++){
        resultHTML += createOuterControl(comicCollection[i]);
    }
    document.getElementById("results").innerHTML =resultHTML;
}

main();

//building the control with composition, a function that generates an image
function createImageFromComic(comic){
    let imgHtml = `<img src="`+comic.img+`" style="width: 350px; vertical-align: text-top;">`;
    return imgHtml;
}