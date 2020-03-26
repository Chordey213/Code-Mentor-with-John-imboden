//runs immediately upon page opening
var cards = "/Test_Table.csv"


function createCard(Manufacturer,Card_Size,Card_Format,Date_Modified,Presence,Modified_by,ID,Card_Type,Kit,Notes)
{
    let card = {Manufacturer,Card_Size,Card_Format,Date_Modified,Presence,Modified_by,ID,Card_Type,Kit,Notes};
    return card;
}

function initCardcollection(){
    let initCardCollection = [];

    initCardCollection.push(createCard(cards));
    console.log(initCardCollection);
    return initCardCollection;
    
};

function main(){
    let resultHTML = "";
    let cardCollection = initCardCollection();
    for(let i=0;i<comicCollection.length;i++){
        resultHTML += createOuterControl(comicCollection[i]);
    }
    document.getElementById("results").innerHTML =resultHTML;
}

main();

