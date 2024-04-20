$(document).ready(function() {
    let books = [];

    // Function to add a book to the table
    function addBook(book) {
        let table = $("#bookTable tbody");
        table.append(`
            <tr id="${book.id}">
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
            </tr>
        `);
    }

    // Function to clear the form fields
    function clearForm() {
        $("#bookTitle").val("");
        $("#author").val("");
        $("#bookID").val("");
        $("#bookCategory").val("");
        $("#bookDesc").val("");
    }

    // Function to generate a random ID
    function generateId() {
        return Math.floor(Math.random() * 1000000);
    }

    // Event listener for clearing form fields
    $(document).on("click", "#clearBtn", function () {
        clearForm();
    });

    // Event listener for adding a book
    $("#bookForm").submit(function (e) {
        e.preventDefault();
        let book = {
            id: generateId(),
            title: $("#bookTitle").val(),
            author: $("#author").val(),
            category: $("#bookCategory").val(),
            description: $("#bookDesc").val(),
        };
        books.push(book);
        addBook(book);
        clearForm();
    });

    // Event listener for editing a book
    $("#editForm").submit(function (e) {
        e.preventDefault();

        let bookId = $("#editBookId").val();
        let bookIndex = books.findIndex((book) => book.id == bookId);
        let book = books[bookIndex];

        book.title = $("#editbookTitle").val();
        book.author = $("#editauthor").val();
        book.category = $("#editbookCategory").val();
        book.description = $("#editbookDesc").val();

        let row = $(`#${book.id}`);
        row.find("td:eq(0)").text(book.title);
        row.find("td:eq(1)").text(book.author);
        row.find("td:eq(2)").text(book.category);
        row.find("td:eq(3)").text(book.description);

        $("#editModal").modal("hide");
    });

    // Event listener for editing button click
    $(document).on("click", ".editBtn", function () {
        let bookId = $(this).data("id");
        let bookIndex = books.findIndex((book) => book.id == bookId);
        let book = books[bookIndex];

        $("#editbookTitle").val(book.title);
        $("#editauthor").val(book.author);
        $("#editbookCategory").val(book.category);
        $("#editbookDesc").val(book.description);
        $("#editBookId").val(book.id);

        $("#editModal").modal("show");
    });

    // Event listener for closing modal
    $(document).on("click", "#clsBtn", function () {
        $("#editModal").modal("hide");
    });

    // Event listener for deleting a book
    $(document).on("click", ".deleteBtn", function () {
        let bookId = $(this).data("id");
        let bookIndex = books.findIndex((book) => book.id == bookId);
        let book = books[bookIndex];

        if (confirm(`Are you sure you want to delete ${book.title}`)) {
            books.splice(bookIndex, 1);
            $(`#${book.id}`).remove();
        }
    });
});
