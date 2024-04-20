// Show Books in index file 

const FictionBooks = [
    {
        cover: "../img/images.jpg",
        borrowLink: "../html/sualBook.html"
    },
    {
        cover: "../img/Enceladus.jpg",
        borrowLink: "../html/EnceladusBook.html"
    },
];

const ProgrammingBooks = [
    {
        cover: "../img/C_prog.jpg",
        borrowLink: "../html/C_progBook.html"
    },
    {
        cover: "../img/clean_code.jpg",
        borrowLink: "../html/clean_codeBook.html"
    },
];

const ChildrenBooks = [
    {
        cover: "../img/Kindness_is_my_Power.jpg",
        borrowLink: "../html/Kindness_is_my_PowerBook.html"
    },
    {
        cover: "../img/The_Cat_in_the_hat.jpg",
        borrowLink: "../html/The_Cat_in_the_hatBook.html"
    },
];

function displayFictionBooks() {
    const container = document.getElementById("FictionBooks");
    container.innerHTML = "";
    
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book-details");
    
    const bookP = document.createElement("p");
    bookP.textContent = "Fiction Books";
    bookP.classList.add("book-category");

    FictionBooks.forEach(book => {
        bookDiv.innerHTML += `
            <img src="${book.cover}" alt="Book Cover" class="book-cover" display>
            <div class="details">
                <a href="${book.borrowLink}" class="show-details-button">Show details</a>
            </div>
        `;
    });
    container.appendChild(bookP);
    container.appendChild(bookDiv);
}

function displayProgrammingBooks() {
    const container = document.getElementById("ProgrammingBooks");
    container.innerHTML = "";
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book-details");

    const bookP = document.createElement("p");
    bookP.textContent = "Programming Books";
    bookP.classList.add("book-category");
    
    ProgrammingBooks.forEach(book => {
        bookDiv.innerHTML += `
            <img src="${book.cover}" alt="Book Cover" class="book-cover">
            <div class="details">
                <a href="${book.borrowLink}" class="show-details-button">Show details</a>
            </div>
        `;
    });
    container.appendChild(bookP);
    container.appendChild(bookDiv);
}

function displayChildrenBooks() {
    const container = document.getElementById("ChildrenBooks");
    container.innerHTML = "";
    
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book-details");
    
    const bookP = document.createElement("p");
    bookP.textContent = "Children Books";
    bookP.classList.add("book-category");
    
    ChildrenBooks.forEach(book => {
        bookDiv.innerHTML += `
            <img src="${book.cover}" alt="Book Cover" class="book-cover">
            <div class="details">
                <a href="${book.borrowLink}" class="show-details-button">Show details</a>
            </div>
        `;
    });
    container.appendChild(bookP);
    container.appendChild(bookDiv);
}

window.onload = function() {
    displayFictionBooks();
    displayProgrammingBooks();
    displayChildrenBooks();
};
