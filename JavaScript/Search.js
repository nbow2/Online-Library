// Sample 
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Classic" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", category: "Classic" },
    { title: "1984", author: "George Orwell", category: "Dystopian" },
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", category: "Fantasy" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", category: "Classic" },
];

// Function to search for books
function searchBooks() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const searchResults = books.filter(book => {
        // Check if the query matches title, author, or category
        return (
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.category.toLowerCase().includes(searchTerm)
        );
    });

    // Displaying search results
    const resultsDiv = document.getElementById("searchResults");
    resultsDiv.innerHTML = ""; // Clear previous results
    if (searchResults.length > 0) {
        searchResults.forEach(book => {
            const bookDiv = document.createElement("div");
            bookDiv.innerHTML = `<strong>Title:</strong> ${book.title}, <strong>Author:</strong> ${book.author}, <strong>Category:</strong> ${book.category}`;
            const detailsButton = document.createElement("button");
            detailsButton.textContent = "Borrow";
            detailsButton.onclick = function() {
                viewBookDetails(book.id);
            };
            bookDiv.appendChild(detailsButton);
            resultsDiv.appendChild(bookDiv);
        });
    } else {
        resultsDiv.textContent = "No matching books found.";
    }
}

function viewBookDetails(title) {
    // Redirect to book details page with bookId
    window.location.href = `book.html?id=${title}`;
}