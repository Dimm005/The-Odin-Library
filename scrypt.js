var myLibrary = [];

function saveLibrary() {
    localStorage.setItem("library", JSON.stringify(myLibrary));
}

function readLibrary() {
    myLibrary = JSON.parse(localStorage.getItem("library"));
}

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.dateAdded = Date.now()
    this.isRead = false;
}

function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
}

