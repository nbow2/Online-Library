// Sample 
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Classic",  BookPage: "../html/Book.html" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", category: "Classic" , BookPage: "../html/Book2.html" },
    { title: "1984", author: "George Orwell", category: "Dystopian" , BookPage: "../html/Book4.html" },
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", category: "Fantasy" , BookPage: "../html/Book5.html" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", category: "Classic" ,BookPage: "../html/Book6.html" },
    { title: "C Programming" ,author: "F. Scott Fitzgerald", category: "code" , BookPage: "../html/C_progbook.html" } ,
    { title: "The Cat in the Hat" ,author: "Dr. Seuss", category: "Children's Book" , BookPage: "../html/The_Cat_in_the_hatBook.html"},
    { title: "Kindness is my Superpower", author: "Alicia Ortego", category: "Children's Book" , BookPage: "../html/Kindness_is_my_PowerBook.html"},
    {title: "Enceladus", author: "Arthur C. Clarke", category: "Science Fiction" , BookPage: "../html/EnceladusBook.html"},
    {title: "", author: "", category: "" , BookPage: ""},
// add more books later 
];



// Function to search for books
function searchBooks__() {
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
            bookDiv.innerHTML = `
            <br>
            <strong>Title:</strong> ${book.title}, 
            <strong>Author:</strong> ${book.author},
             <strong>Category:</strong> ${book.category}
             <br>`;
            const detailsButton = document.createElement("button");
            detailsButton.textContent = "View";
            detailsButton.onclick = function() {
                viewBookDetails(book.BookPage);
            };
            bookDiv.appendChild(detailsButton);
            resultsDiv.appendChild(bookDiv);
        });
    } else {
        resultsDiv.textContent = "No matching books found.";
    }
}

function viewBookDetails(page) {
    // Redirect to book details page with bookId
    window.location.href = page;
}



//the new function for search books with backend 
function searchBooks() {
    const searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
    const searchUrl = `/search/?q=${encodeURIComponent(searchTerm)}`;

    fetch(searchUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const resultsDiv = document.getElementById("searchResults");
            resultsDiv.innerHTML = ""; // Clear previous results
            if (data.length > 0) {
                data.forEach(book => {
                    const bookDiv = document.createElement("div");
                    bookDiv.classList.add("book-result");
                    bookDiv.innerHTML = `
                        <strong>Title:</strong> ${book.title}<br>
                        <strong>Author:</strong> ${book.author}<br>
                        <strong>Category:</strong> ${book.category}<br>
                        <a href="/book/${book.id}/" class="view-button">View</a>
                        <br>
                    `;
                    resultsDiv.appendChild(bookDiv);
                });
            } else {
                resultsDiv.textContent = "No matching books found.";
            }
        })
        .catch(error => {
            console.error('Error:', error);
            const resultsDiv = document.getElementById("searchResults");
            resultsDiv.innerHTML = "An error occurred while searching for books. Please try again later.";
        });
}
