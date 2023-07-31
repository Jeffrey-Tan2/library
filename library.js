let myLibrary = [];
let i = 0;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

let addBtn = document.getElementById("add-book");
let modal = document.getElementById("add-form");
let closeForm = document.getElementsByClassName("close")[0];
let bookForm = document.getElementById("new-book-form");

addBtn.addEventListener("click", () => {
    modal.style.display = "block";
})

closeForm.addEventListener("click", () => {
    modal.style.display = "none";
    bookForm.reset();
});

document.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
        modal.style.display = "none";
        bookForm.reset();
    }
})

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newTitle = document.getElementById("new-title").value;
    let newAuthor = document.getElementById("new-author").value;
    let newPages = document.getElementById("new-pages").value;
    let readStatus = document.getElementById("read-status").checked;
    addBook(newTitle, newAuthor, newPages, readStatus);
    bookForm.reset();
    modal.style.display = "none";
})

function addBook(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    let newBook = document.createElement("div");
    newBook.id = i;
    newBook.className = "book";
    let bookTitle = document.createElement("p");
    let bookAuthor = document.createElement("p");
    let bookPages = document.createElement("p");
    let readBtn = document.createElement("button");
    let removeBtn = document.createElement("button");
    bookTitle.innerHTML = "\"" + title + "\"";
    bookAuthor.innerHTML = "By: " + author;
    bookPages.innerHTML = pages + " Pages";
    readBtn.innerHTML = read ? "read":"not read";
    readBtn.id = "read" + i;
    readBtn.style.background = read ? "rgba(0, 255, 0, 0.5)":"rgba(255, 0, 0, 0.5)";
    readBtn.addEventListener("click", () => {
        if (read) {
            read = false;
            readBtn.innerHTML = read ? "read":"not read";
            readBtn.style.background = "rgba(255, 0, 0, 0.5)";
        } else {
            read = true;
            readBtn.innerHTML = read ? "read":"not read";
            readBtn.style.background = "rgba(0, 255, 0, 0.5)";
        }
    })
    removeBtn.innerHTML = "remove";
    removeBtn.id = "remove" + i;
    removeBtn.className = "remove-button";
    removeBtn.addEventListener("click", () => {
        myLibrary.splice(newBook.id, 1);
        document.getElementById(newBook.id).remove();
        i--;
    })
    newBook.appendChild(bookTitle);
    newBook.appendChild(bookAuthor);
    newBook.appendChild(bookPages);
    newBook.appendChild(readBtn);
    newBook.appendChild(removeBtn);
    document.getElementById("library").appendChild(newBook);
    i++;
}