var myLibrary = []; // array to store book objects
var isList = false; // should book view be shown as list or as set of cards (default)

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

// create book line element
function createBookLineElement(book) {
    let bookList = document.getElementById("book-list");
    let bookLine = document.createElement("div");
    bookLine.classList.add("line");
    bookList.appendChild(bookLine);
    let bookDescription = `"${book.title}" by ${book.author}, ${book.pages} pages, ${book.isRead ? "read already" : "not read yet"}`;
    let para = document.createElement("p");
    para.innerText = bookDescription;
    bookLine.appendChild(para);
}

// create book card element
function createBookCardElement(book) {
    let bookList = document.getElementById("book-list");
    let bookCard = document.createElement("div");
    bookCard.classList.add("card");
    bookCard.innerHTML = `<p><span>Title: </span>"${book.title}"</p>
        <p><span>Author: </span>${book.author}</p>
        <p><span>Pages: </span>${book.pages}</p>
        <p><span>${book.isRead ? "read already" : "not read yet"}</span></p>`
    bookList.appendChild(bookCard);
}

// fill books list
function fillBooksList(library) {
    for (let book of myLibrary) {
        if (isList) {
            createBookLineElement(book);
        } else {
            createBookCardElement(book);
        };
    };
}