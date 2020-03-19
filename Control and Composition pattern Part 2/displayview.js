function createDisplayView(comic){
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

function createImageFromComic(comic){
    let imgHtml = `<img src="`+comic.img+`" style="width: 350px; vertical-align: text-top;">`;
    return imgHtml;
}