$(document).ready(function() {
    let books = [];

    function addBook(book) {
        let table = $("#bookTable tbody");
        table.append(`
    <tr id="${book.id}">
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.description}</td>
    <td>${book.category}</td>
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
    `);
    }

    function clearForm() {
        $("#bookTitle").val("");
        $("#author").val("");
        $("#bookDesc").val("");
        $("#bookCategory").val("");
    }

    function generatedId() {
        return Math.floor(Math.random() * 1000000);
    }

    $(document).on("click", "#clearBtn", function () {
        clearForm();
    });

    $("#bookForm").submit(function (e) {
        e.preventDefault();
        let book = {
            id: generatedId(),
            title: $("#bookTitle").val(),
            author: $("#author").val(),
            category: $("#bookCategory").val(),
            description: $("#bookDesc").val(),
        };
        books.push(book);
        addBook(book);

        clearForm();
    });

    $("#editfForm").submit(function (e){
        e.preventDefault();

        let bookID=$("#editBookId").val();
        let bookIndex = books.findIndex((book)=> book.id == bookId);
        let book = books[bookIndex];

        book.title = $("#editbookTitle");
        book.author = $("#editauthor");
        book.category = $("#editbookCategory");
        book.description = $("#editbookDesc");

        let row = $('#${book.id}');
        row.find("td:eq(0)").text(book.title);
        row.find("td:eq(1)").text(book.author);
        row.find("td:eq(2)").text(book.category);
        row.find("td:eq(3)").text(book.description);

        $("#editModal").modal("hide");
    });

/*
    // Your existing code goes here
    $("#editForm").submit(function (e) {
        e.preventDefault();

        let bookID = $("#editBookID").val(); // corrected variable name
        let bookIndex = books.findIndex((book) => book.id == bookID); // corrected variable name
        let book = books[bookIndex];

        book.title = $("#editbookTitle").val(); // corrected selector
        book.author = $("#editauthor").val(); // corrected selector
        book.category = $("#editbookCategory").val(); // corrected selector
        book.description = $("#editbookDesc").val(); // corrected selector

        let row = $(`#${book.id}`);
        row.find("td:eq(0)").text(book.title);
        row.find("td:eq(1)").text(book.author);
        row.find("td:eq(2)").text(book.category);
        row.find("td:eq(3)").text(book.description);

        $("#editModal").modal("hide");
    });

    // Existing click event handler for editBtn

    */


    $(document).on("click", ".editBtn", function () {
        let bookId = $(this).data("id");

        let bookIndex = books.findIndex((book) => book.id == bookId);
        let book = books[bookIndex];

        $("#editbookTitle").val(book.title);
        $("#editauthor").val(book.author);
        $("#editbookDesc").val(book.description);
        $("#editbookCategory").val(book.category);
       // $("#editId").val(book.id);

        $("#editModal").modal("show");
    });
});

$(document).on("click", "clsBtn", function () {
    $("#editModal").modal("hide");
});

$(document).on("click", "deleteBtn", function () {
    let bookId = $(this).data("id");

    let bookIndex = books.findIndex((book) => book.id == bookId);
    let book = books[bookIndex];
    if(confirm(`Are you sure you want to delete ${book.title}`)){
        books.splice(bookIndex,1);
        $('#${book.id}').remove();
    }
});