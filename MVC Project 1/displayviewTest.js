//Work from Inside to outside for Complex controllers
{/* <table>
  <thead>
    <tr>
      <th>Dino name</th>
      <th>Dino Level</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> this Table dataelement contains a table comprised of all of the Dino stats. 
        <table>
          <tr>
            <td>Dino Type</td>
          </tr>
          <tr>
            <td>health</td>
            <td>stamina</td>
          </tr>
          <tr>
            <td>torpidity</td>
          </tr>
          <tr>
            <td>Oxygen</td>
          </tr>
          <td>Food</td>
          <td>Weight</td>
          <tr>
          </tr>
          <td>Melee Damage</td>
          <td>Movement Speed</td>
        </table>
      </td>
      <td> Dino Image</td> this Table data element contains the image of the dino.
    </tr>
  </tbody>
</table> */}


// This function creates the Div in which each dinosaurs table of information, stats, and pic will reside
function createDisplayView(dinosaur) {
    let html = `
    <div id="`+ dinosaur.name + `"> `
        + createTableControl(dinosaur)
        +`
</div>
`;
    return html;
};


// This function creates the beginning table element for the Dino Information, stats, and pic
function createTableControl(dinosaur){
    let tableHTML = `<table id="` + dinosaur.name + `">`  
    + createTableHeadControl(dinosaur)
    + createTableBodyControl(dinosaur)
    +
    `</table>`;
    return tableHTML;
};

// This function creates the Table head element which displays the Dino's name and level as headers
function createTableHeadControl(dinosaur){
    let tableHeadHTML = `<thead id="` + dinosaur.name + `_Head">`  
    + `<tr>`
    + `<th id="`+dinosaur.name+`">`+ dinosaur.name + `</th>`
    + `<th id="`+dinosaur.level+`">`+ dinosaur.level + `</th>`
    + `</tr>`
    +
    `</head>`;
    return tableHeadHTML;
};

// This function creates the Table body, which will house the remaining table elements that display the Dino stats, and dino image
function createTableBodyControl(dinosaur){
  let tBodyHTML = `<tbody>`
  + `<tr>`
  + `<td>`
  + createDinoTable(dinosaur)
  + `</td>`
  + createDinoImageControl(dinosaur)
  + `</tr>`
  + `</tbody>`;
  return tBodyHTML;
};

// This Function creates the Table for the Dinosaurs stats
function createDinoTable(dinosaur){
  let dinoTableHTML = `<table id="`+dinosaur.name+`">`
  + createDinoTypeControl(dinosaur)
  + createDinoVitalityControl(dinosaur)
  + createDynoTorporControl(dinosaur)
  + createDinoVitals(dinosaur)
  + createDinoPhysicalStatsControl(dinosaur)
  +
  `</table>`;
  return dinoTableHTML;
};

//The following functions create the Table rows and Table datat elements that comprise the dino stats
function createDinoTypeControl(dinosaur){
  let dinoTypeHTML = `<tr id="dinoType">`
  + `<td id="`+dinosaur.type+`">` + dinosaur.type + `</td>`;
  return dinoTypeHTML;
};

function createDinoVitalityControl(dinosaur){
  let dinoVitalityHTML = `<tr id="dinoVitals">`
  + `<td id="`+dinosaur.health+`">Health: ` + dinosaur.health + `</td> <td id="`+dinosaur.stamina+`"> Stamina: ` + dinosaur.stamina + `</td>`
  +
  `</tr>`;
  return dinoVitalityHTML;
};

function createDynoTorporControl(dinosaur){
  let dinoTorporHTML = `<tr id="dinoTorpor">`
  + `<td id="`+dinosaur.torpidity+`">Torpidity: ` + dinosaur.torpidity + `</td>`
  +
  `</tr>`;
  return dinoTorporHTML;
};

function createDinoVitals(dinosaur){
  let dinoVitalsHTML = `<tr id="dinoVitals">`
   + 
  `<td id="`+dinosaur.oxygen+`">Oxygen: ` + dinosaur.oxygen + `</td> 
  <td id="`+dinosaur.food+`">Food: ` + dinosaur.food + `</td>
  <td id="`+dinosaur.weight+`">Weight: ` + dinosaur.weight + `</td>`
  +
  `</tr>`;
  return dinoVitalsHTML;

};

function createDinoPhysicalStatsControl(dinosaur){
  let dinoPhysicalStatsHTML = `<tr id="dinoPhysicalStats">`
  + 
  `<td id="`+dinosaur.meleeDamage+`">Melee Damage: ` + dinosaur.meleeDamage + `</td>
  <td id="`+dinosaur.movementSpeed+`">Movement Speed: ` + dinosaur.movementSpeed + `</td>`
  +
  `</tr>`;
  return dinoPhysicalStatsHTML;
};

function createDinoImageControl(dinosaur){
  let imgHTML = `<td id="`+dinosaur.img+`"> <image id="` + dinosaur.img + `" src="` + dinosaur.img +`" alt="` + dinosaur.name + `>`
  +
  `</td>`;
  return imgHTML;
};