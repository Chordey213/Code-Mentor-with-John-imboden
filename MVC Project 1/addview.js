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
    <td> <input id="newDinoName" type="text" placeholder="Dino Name"> </td>
    <td> <input id="newDinoLvl" type="text" placeholder="Dino Level"> </td>
    </tr>
    <tr>
    <td> <input id="newDinoType" type="text" placeholder="Dinosaur Type"> </td>
    </tr>
    <tr>
    <td> <input id="newDinoHealth" type="text" placeholder="Dino Health"> </td>
    <td> <input id="newDinoStam" type="text" placeholder="Dino Stamina"> </td>
    </tr>
    <tr>
    <td> <input id="newDinoTorpor" type="text" placeholder="Dinosaur Torpidity"> </td>
    </tr>
    <tr>
    <td> <input id="newDinoOxy" type="text" placeholder="Dino Oxygen"> </td>
    <td> <input id="newDinoFood" type ="text" placeholder="Dino Food"> </td>
    <td> <input id="newDinoWeight" type="text" placeholder="Dino Carry Weight"> </td>
    </tr>
    <tr>
    <td> <input id="newDinoMelee" type="text" placeholder="Melee Damage"> </td>
    <td> <input id="newDinoMove" type="text" placeholder="Movement Speed"> </td>
    </tr>
    <tr>
    <td> <button onClick="getDinoName()"> SUBMIT </td>
    </tr>
    </table>`;
    return addViewHTML;
};

// at the end of this, all information gathered for the new dino must get pushed to the Dino collection. 
// I believe this will be done by accessing the control's "dinoCollection" variable in the following fashion:
// let dinoCollection = addDino(newDino) wherein newDino === the information collected.
// all fields must correlate correctly. 

function getDinoName() {
    let name = document.getElementById("newDinoName").value;
    let level = document.getElementById("newDinoLvl").value;
    let type = document.getElementById("newDinoType").value;
    let health = document.getElementById("newDinoHealth").value;
    let stamina = document.getElementById("newDinoStam").value;
    let torpidity = document.getElementById("newDinoTorpor").value;
    let oxygen = document.getElementById("newDinoOxy").value;
    let food = document.getElementById("newDinoFood").value;
    let weight = document.getElementById("newDinoWeight").value;
    let meleeDamage = document.getElementById("newDinoMelee").value;
    let movementSpeed = document.getElementById("newDinoMove").value;
    let img = "assets/Trex.png"
    let addDino =  new dinosaur(
        name,
        type,
        level,
        health,
        stamina,
        torpidity,
        oxygen,
        food,
        weight,
        meleeDamage,
        movementSpeed,
        img
    )
    console.log(addDino);
    compileDinoInfo(addDino);
    return addDino;
}

function compileDinoInfo(addDino){
    dinoCollection.push(addDino)
    document.getElementById("results").innerHTML = createTableControl(addDino);
    document.getElementById("add").innerhtml = displaySearchScreen();
    console.log(dinoCollection);

};