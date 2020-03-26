// this page is the first page to load. The following items exist on page:
// A text input box for a search
//A browse button, which displays currently added dinosaurs
// an add button, which takes you to the add dino page.
// The main page should display a total count of the Dinosaurs that are in the library 

function createDisplayView(dinosaur){
    let html = `
    <div id="`+comic.title+comic.issueNumber+`outerBox">
    `+createTitleControl(comic)
    + createIssueNumberControl(comic)
    + createExpanderControl(comic) + `
    </div>
    `;
    return html;
};