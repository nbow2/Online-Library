document.addEventListener("DOMContentLoaded", function() {
    let books = [];

    // Function to add a book to the table
    function addBook(book) {
        let table = document.querySelector("#bookTable tbody");
        let row = document.createElement("tr");
        row.id = book.id;
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.id}</td>
            <td>${book.category}</td>
            <td>${book.description}</td>
            <td>
                <button class="btn btn-sm btn-warning editBtn" data-id="${book.id}">
                    Edit
                </button>
            </td>
            <td>
                <button class="btn btn-sm btn-danger deleteBtn" data-id="${book.id}">
                    Delete
                </button>
            </td>
        `;
        table.appendChild(row);
    }

    // Function to clear the form fields
    function clearForm() {
        document.getElementById("bookTitle").value = "";
        document.getElementById("author").value = "";
        document.getElementById("bookID").value = "";
        document.getElementById("bookCategory").value = "";
        document.getElementById("bookDesc").value = "";
    }

    // Event listener for clearing form fields
    document.getElementById("clearBtn").addEventListener("click", function () {
        clearForm();
    });

    // Event listener for adding a book
    document.getElementById("bookForm").addEventListener("submit", function (e) {
        e.preventDefault();
        let bookId = document.getElementById("bookID").value;
        if (!bookId) {
            alert("Please enter a valid ID for the book.");
            return;
        }
        if (books.some(book => book.id === bookId)) {
            alert("ID already exists. Please enter a unique ID for the book.");
            return;
        }
        let book = {
            id: bookId,
            title: document.getElementById("bookTitle").value,
            author: document.getElementById("author").value,
            category: document.getElementById("bookCategory").value,
            description: document.getElementById("bookDesc").value,
        };
        books.push(book);
        addBook(book);
        clearForm();
    });

    // Event listener for editing a book
    document.getElementById("editForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let bookId = document.getElementById("editBookId").value;
        let bookIndex = books.findIndex((book) => book.id == bookId);
        let book = books[bookIndex];

        book.title = document.getElementById("editbookTitle").value;
        book.author = document.getElementById("editauthor").value;
        book.category = document.getElementById("editbookCategory").value;
        book.description = document.getElementById("editbookDesc").value;

        let row = document.getElementById(book.id);
        row.children[0].textContent = book.title;
        row.children[1].textContent = book.author;
        row.children[2].textContent = book.id;
        row.children[3].textContent = book.category;
        row.children[4].textContent = book.description;

        document.getElementById("editModal").style.display = "none";
    });

    // Event listener for editing button click
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("editBtn")) {
            let bookId = e.target.getAttribute("data-id");
            let bookIndex = books.findIndex((book) => book.id == bookId);
            let book = books[bookIndex];

            document.getElementById("editbookTitle").value = book.title;
            document.getElementById("editauthor").value = book.author;
            document.getElementById("editbookCategory").value = book.category;
            document.getElementById("editbookDesc").value = book.description;
            document.getElementById("editBookId").value = book.id;

            document.getElementById("editModal").style.display = "block";
        }
    });

    // Event listener for closing modal
    document.getElementById("clsBtn").addEventListener("click", function () {
        document.getElementById("editModal").style.display = "none";
    });

    // Event listener for deleting a book
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("deleteBtn")) {
            let bookId = e.target.getAttribute("data-id");
            let bookIndex = books.findIndex((book) => book.id == bookId);
            let book = books[bookIndex];

            if (confirm(`Are you sure you want to delete ${book.title}`)) {
                books.splice(bookIndex, 1);
                document.getElementById(book.id).remove();
            }
        }
    });
});
