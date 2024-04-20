/// this function will be used in the home page 
/// you will add new books about 4 to 6 books in the single category
/// delete the description  and category from  the array 


const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        published: 1925,
        category: "Fiction, Classic",
        description: "The Great Gatsby is a novel by American author F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
        cover: "../img/images.jpg",
        borrowLink: "../html/book.html"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        published: 1960, // Corrected publication year
        category: "Fiction, Classic",
        description: "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature.",
        cover: "../img/Enceladus.jpg",
        borrowLink: "../html/book2.html"
    },
    {
        title: "C Programming",
        author: "F. Scott Fitzgerald", // Corrected author name
        published: 1978, // Corrected publication year
        category: "Code",
        description: "C Programming is a book by Kernighan and Ritchie that provides a comprehensive introduction to the C programming language.",
        cover: "../img/C_prog.jpg",
        borrowLink: "../html/book3.html"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        published: 1925,
        category: "Fiction, Classic",
        description: "The Great Gatsby is a novel by American author F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
        cover: "../img/images.jpg",
        borrowLink: "../html/book.html"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        published: 1960, // Corrected publication year
        category: "Fiction, Classic",
        description: "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature.",
        cover: "../img/Enceladus.jpg",
        borrowLink: "../html/book2.html"
    },
    {
        title: "C Programming",
        author: "F. Scott Fitzgerald", // Corrected author name
        published: 1978, // Corrected publication year
        category: "Code",
        description: "C Programming is a book by Kernighan and Ritchie that provides a comprehensive introduction to the C programming language.",
        cover: "../img/C_prog.jpg",
        borrowLink: "../html/book3.html"
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
                
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Published:</strong> ${book.published}</p>
                <p><strong>Category:</strong> ${book.category}</p>
                
                <br>
                <a href="${book.borrowLink}" class="borrow-button">view</a>
            </div>
        `;
        container.appendChild(bookDiv);
    });
}

// Call the function to display books when the page loads
window.onload = displayBooks;