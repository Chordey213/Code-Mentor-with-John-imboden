//Controls can be anything on the page. I.E. the comic titles plus the checkboxes from Functions and Data flows
// The concept of composition is the act of stacking or putting together multiple controls, 
// in order to create some kind of modular, reusable piece (Like react components)
// with regard to the comics, we took the collection of strings of the comics, and turned them in to a comic object 
// with a title, issue number, bollean of read (true or false) and a description of the comic
// the collection is then pushed to an array, turning the array in to an array of the comics objects.
// using a function, we turned all comics into comic objects
// afterwards we had to update the search function to have the comics title. since the array is no longer an array of strings, but an array of objects accessed by dot notation


// creating composition pseudo code
// convert my comic book list of string titles into a comic collection of objects
    // the object can have any property type I choose
// once the list is converted, update the search function to make use of one of the properties created above
// Add, in some way shape or form, a composed text box that is a part of the control unit (The displayed comic or card title)


function createComic(title, issueNumber, hasRead, description, tags, img)
{
    let comic = {title, issueNumber, hasRead, description, tags, id: title+issueNumber, img};
    return comic;
}

function initComicCollection(){
    let collection = [];
    collection.push(createComic("Xmen", 1, false, "Bald guy teaches gifted and talented.", "mutants xmen cyclops wolverine jean gray powers", "Assets/Xmen1.jpg"))
    collection.push(createComic("Conan", 132, true, "Random barbarian kills things with sword.", "barbarian medieval conan"))
    collection.push(createComic("Xmen", 2, false, "Bald guy teaches gifted and talented.", "mutants xmen cyclops wolverine jean gray powers"))
    collection.push(createComic("Xmen", 3, true, "Bald guy teaches gifted and talented.", "mutants xmen cyclops wolverine jean gray powers"))
    collection.push(createComic("Xmen", 4, false, "Bald guy teaches gifted and talented.", "mutants xmen cyclops wolverine jean gray powers"))
    collection.push(createComic("Xmen", 5, true, "Bald guy teaches gifted and talented.", "mutants xmen cyclops wolverine jean gray powers"))
    collection.push(createComic("Green Lantern", 2542, true, "Green light is not great for skin.", "powers light hope green lantern ryan reynolds"))
    return collection;
}

//runs immediately upon page opening
function main(){
    let localComic = createComic("Xmen", 1, false, "Bald guy teaches gifted and talented.", "mutants xmen cyclops wolverine jean gray powers", "Assets/Xmen1.jpg");
    let resultHTML = createImageFromComic(localComic);
    document.getElementById("results").innerHTML =resultHTML;
}

main();

//building the control with composition, a function that generates an image
function createImageFromComic(comic){
    let imgHtml = `<img src= '`+ comic.img + `'>`;
    return imgHtml;
}