/// this function will be used in the home page 
/// you will add new books about 4 to 6 books in the single category
/// delete the description  and category from  the array 


const books = [
    {
        title: "The Great Gatsby",
        cover: "../img/images.jpg",
        borrowLink: "../html/book.html"
    },
    {
        title: "Enceladus",
        cover: "../img/Enceladus.jpg",
        borrowLink: "../html/EnceladusBook.html"
    },
    {
        title: "C Programming",
        cover: "../img/C_prog.jpg",
        borrowLink: "../html/C_progBook.html"
    },
    {
        title: "Kindness is my Superpower",
        cover: "../img/Kindness_is_my_Power.jpg",
        borrowLink: "../html/Kindness_is_my_PowerBook.html"
    },
    {
        title: "The Cat in the Hat",
        cover: "../img/The_Cat_in_the_hat.jpg",
        borrowLink: "../html/The_Cat_in_the_hatBook.html"
    },
    {
        title: "Clean Code     ",
       cover: "../img/clean_code.jpg",
        borrowLink: "../html/clean_codeBook.html"
    },
    // Add more books later
];


function displayBooks() {
    const container = document.getElementById("bookContainer");
    container.innerHTML = ""; // Clear previous content
    books.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book-details");
        bookDiv.innerHTML = `
            <img src="${book.cover}" alt="Book Cover" class="book-cover">
            <div class="details">
                
                <p><strong></strong> ${book.title}</p>
                <br>
                <a href="${book.borrowLink}" class="borrow-button">Show details</a>
            </div>
        `;
        container.appendChild(bookDiv);
    });
}

// Call the function to display books when the page loads
window.onload = displayBooks;