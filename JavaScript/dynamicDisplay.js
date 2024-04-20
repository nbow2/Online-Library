const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        published: 1925,
        category: "Fiction, Classic",
        description: "The Great Gatsby is a novel by American author F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
        cover: "../img/images.jpg",
        borrowLink: "../html/booktime.html"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        published: 1960, // Corrected publication year
        category: "Fiction, Classic",
        description: "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature.",
        cover: "../img/Enceladus.jpg",
        borrowLink: "../html/booktime.html"
    },
    {
        title: "C Programming",
        author: "F. Scott Fitzgerald", // Corrected author name
        published: 1978, // Corrected publication year
        category: "Code",
        description: "C Programming is a book by Kernighan and Ritchie that provides a comprehensive introduction to the C programming language.",
        cover: "../img/C_prog.jpg",
        borrowLink: "../html/booktime.html"
    },
    // Add more books later
];

function displayBook(index) {
    const book = books[index];
    const container = document.getElementById("bookContainer");
    container.innerHTML = ""; // Clear previous content

    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book-details");
    bookDiv.innerHTML = `
        <img src="${book.cover}" alt="Book Cover" class="book-cover">
        <div class="details">
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Published:</strong> ${book.published}</p>
            <p><strong>Category:</strong> ${book.category}</p>
            <p><strong>Description:</strong> ${book.description}</p>
            <br>
            <a href="${book.borrowLink}" class="borrow-button">Borrow Now</a>
        </div>
    `;
    container.appendChild(bookDiv);
}

// Call the function to display the first book when the page loads

window.onload = function() {
    displayBook(0);
    displayBook(1);
    displayBook(2); // Displaying the first book
};