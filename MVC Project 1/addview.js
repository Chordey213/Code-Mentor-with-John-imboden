function createAddDisplayView() {
    let html = `
    <div id="`+ dinosaur.name + `"> `
        + createAddViewController()
        + `
</div>`
    return html;
};

function createAddViewController() {
    let addViewHTML = `<table id="addDinoTableHead">
    <tr>
    <td id=""> <input type="text" placeholder="Dino Name"> </td>
    <td id=""> <input type="text" placeholder="Dino Level"> </td>
    </tr>
    <tr>
    <td> <input type="text" placeholder="Dinosaur Type"> </td>
    </tr>
    <tr>
    <td id=""> Dino Health </td>
    <td id=""> Dino Stamina </td>
    </tr>
    <tr>
    <td> Dinosaur Torpidity </td>
    </tr>
    <tr>
    <td id=""> Dino Oxygen </td>
    <td id=""> Dino Food </td>
    <td id=""> Dino Carry Weight </td>
    </tr>
    <tr>
    <td id=""> Melee Damage </td>
    <td id=""> Movement Speed </td>
    </tr>
    </table>`;
    return addViewHTML;
};

// at the end of this, all information gathered for the new dino must get pushed to the Dino collection. 
// I believe this will be done by accessing the control's "dinoCollection" variable in the following fashion:
// let dinoCollection = addDino(newDino) wherein newDino === the information collected.
// all fields must correlate correctly. 
