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
    bookLine.classList.add("book-element");
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
    bookCard.classList.add("book-element");
    bookCard.classList.add("card");
    bookCard.innerHTML = `<p><span>Title: </span>"${book.title}"</p>
        <p><span>Author: </span>${book.author}</p>
        <p><span>Pages: </span>${book.pages}</p>
        <p><span>${book.isRead ? "read already" : "not read yet"}</span></p>`
    bookList.appendChild(bookCard);
}

// fill books list depending on isList
function fillBooksList(library) {
    for (let book of library) {
        if (isList) {
            createBookLineElement(book);
        } else {
            createBookCardElement(book);
        };
    };
}

// clear books list
function clearBooksList() {
    let elements = document.querySelectorAll(".book-element");
    for (let elem of elements) {
        elem.remove();
    };
}

// show not read books
function showNotRead() {
    clearBooksList();
    let library = myLibrary.filter((book) => !book.isRead);
    fillBooksList(library);
}

// show read already books
function showRead() {
    clearBooksList();
    let library = myLibrary.filter((book) => book.isRead);
    fillBooksList(library);
}

// remove all books (clear the library)
function removeLibrary() {
    myLibrary = [];
    localStorage.clear();
}

// sort library by title
function sortByTitle(library) {
    return library.sort((a, b) => {
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
        } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        };
        return 0;
    });
}

// sort library by author
function sortByAuthor(library) {
    return library.sort((a, b) => {
        if (a.author.toLowerCase() > b.author.toLowerCase()) {
            return 1;
        } else if (a.author.toLowerCase() < b.author.toLowerCase()) {
            return -1;
        };
        return 0;
    });
}

// sort by time of adding (new first)
function sortNewFirst(library) {
    return library.sort((a, b) => {
        return b.dateAdded - a.dateAdded;
    });
}

// sort by time of adding (old first)
function sortOldFirst(library) {
    return library.sort((a, b) => {
        return a.dateAdded - b.dateAdded;
    });    
}