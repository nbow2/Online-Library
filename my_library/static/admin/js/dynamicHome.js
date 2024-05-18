const books = [
    {
        "title": "The Great Gatsby",
        "cover": "/static/img/images.jpg",
        "borrowLink": "/Great_Gatsby"
    },
    {
        "title": "Enceladus",
        "cover": "/static/img/Enceladus.jpg",
        "borrowLink": "/Enceladus_Book"
    },
    {
        "title": "C Programming",
        "cover": "/static/img/C_prog.jpg",
        "borrowLink": "/C_programming_book"
    },
    {
        "title": "Kindness is my Superpower",
        "cover": "/static/img/Kindness_is_my_Power.jpg",
        "borrowLink": "/Kindness_is_my_PowerBook"
    },
    {
        "title": "The Cat in the Hat",
        "cover": "/static/img/The_Cat_in_the_hat.jpg",
        "borrowLink": "/The_Cat_in_the_hatBook"
    },
    {
        "title": "Clean Code",
        "cover": "/static/img/clean_code.jpg",
        "borrowLink": "/clean_code_book"
    }
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
                <p><strong>${book.title}</strong></p>
                <br>
                <a href="${book.borrowLink}" class="borrow-button">Show details</a>
            </div>
        `;
        container.appendChild(bookDiv);
    });
}

// Call the function to display books when the page loads
window.onload = displayBooks;
