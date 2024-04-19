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
    });
}

// Call the function to display books when the page loads
window.onload = displayBooks;