var myLibrary = []; //array to store book objects

// book object constructor
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.dateAdded = Date.now() // may used as an id
    this.isRead = false;
}

// save library to localStorage
function saveLibrary() {
    localStorage.setItem("library", JSON.stringify(myLibrary));
}

// read library from localStorage
function readLibrary() {
    myLibrary = JSON.parse(localStorage.getItem("library"));
}

// add book to the library
function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
    saveLibrary();
}



