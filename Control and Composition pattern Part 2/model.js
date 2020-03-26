class Comic{
    constructor(title, issueNumber, hasRead, description, tags, img){
        this.title=title;
        this.issueNumber=issueNumber;
        this.hasRead=hasRead;
        this.description=description;
        this.tags=tags;
        this.id=title+issueNumber;
        this.img=img
    }
}

let myComic= new Comic();