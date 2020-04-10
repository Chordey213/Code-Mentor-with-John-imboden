function createSearchDisplayView() {
    let html = `<div id="SearchView">
    <input type="text" placeholder="Search for your dino's here" id="searchBar"> </input>
    <button onClick="searchDinoCatalog()"> Search </button>
    </div>`;
    return html;
};

function searchDinoCatalog() {
    let userInput = document.getElementById('searchBar').value;
    let searchResults = search(userInput, dinoCollection);
    console.log(searchResults);
    console.log(typeof [dinosaur]);
    return searchResults;

};


function search(searchParam, dinoCollection) {
    var results = [];
    for (let i = 0; i < dinoCollection.length; i++) {
        if (dinoCollection[i].name === searchParam) {
            results.push(dinoCollection[i]);
        }
    }
    document.getElementById('results').innerHTML = createTableControl(results[0]);
    let html = `
    <input type="text" placeholder="Search for your dino's here" id="searchBar"> </input>
    <button onClick="searchDinoCatalog()"> Search </button>`;
    document.getElementById('buttonDisplay').innerHTML += html;
    return results;
};
