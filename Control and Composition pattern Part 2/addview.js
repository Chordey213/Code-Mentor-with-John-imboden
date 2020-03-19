function createAddView(delegateString){
    let addViewHTML = "";
    addViewHTML += createNameControl();
    addViewHTML += createIssueNumberAddControl();
    addViewHTML += createDescriptionAddControl();
    addViewHTML += createImageAddController();
    addViewHTML += createSubmitButtonControl(delegateString);
    return addViewHTML;
};

function createNameControl(){
    let nameControlHTML = 
    `<div>
    <label for="tbComicName">Name: </label>
    <input type='text' id="tbComicName"></input>
    </div>`;

    return nameControlHTML;
};

function createIssueNumberAddControl(){
    let issueNumberControlHTML = 
    `<div>
    <label for="tbIssueNumber">Issue Number:</label>
    <input type="number" id="tbIssueNumber"></input>
    </div>`;
    return issueNumberControlHTML;
};

function createDescriptionAddControl(){
    let descriptionControlHTML = 
    `<div>
    <label for="tbDescriptionControl">Type a Decription:</label>
    <input type="text" id="tbDescriptionControl"></input>
    </div>`;
    return descriptionControlHTML;
};

function createImageAddController(){
    let imageControlHTML = 
    `<div>
    <label for="tbImageControl">Where will the image go?</label>
    <input type="text" id="tbImageControl"></input>
    </div>`;
    return imageControlHTML
};

function readDataValues(){
        let name = document.getElementById("tbComicName").value;
        let issue = Number(document.getElementById("tbIssueNumber").value);
        let description = document.getElementById("tbDescriptionControl").value;
        let image = document.getElementById("tbImageControl").value;
        let result = {
            name,
            issue,
            description,
            image
        };

    return result;
};

function createSubmitButtonControl(delegateString){
    let submitControlHTML = 
    `<div>
    <button onClick="`+delegateString+`">Submit</button>
    </div>`;
    return submitControlHTML;
};