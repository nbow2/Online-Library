
// **********************************************************************************************************************************************
// ********************* This is myCode Add, Edit, and delete functions and save the books in the local storage *********************************
// **********************************************************************************************************************************************

$(document).ready(function() {
    // Load existing books from localStorage
    var books = JSON.parse(localStorage.getItem('books')) || [];

    // Function to display books
    function displayBooks() {
        $("#bookTable tbody").empty(); // Clear existing table rows
        books.forEach(function(book, index) {
            $("#bookTable tbody").append("<tr><td>" + book.title + "</td><td>" + book.author + "</td><td>" + book.id + "</td><td>" + book.category + "</td><td>" + book.description + "</td><td><button class='btn btn-danger btn-sm deleteBtn' data-index='" + index + "'>Delete</button> <button class='btn btn-primary btn-sm editBtn' data-index='" + index + "'>Edit</button></td></tr>");
        });
    }

    // Display existing books on page load
    displayBooks();

    // Function to add a book
    $("#bookform").submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        // Get input values
        var title = $("#bookTitle").val();
        var author = $("#Author").val();
        var id = $("#bookID").val();
        var category = $("#bookCategory").val();
        var description = $("#bookDesc").val();

        // Create a new book object
        var newBook = {
            title: title,
            author: author,
            id: id,
            category: category,
            description: description
        };

        // Add the new book to the books array
        books.push(newBook);

        // Save the updated books array to localStorage
        localStorage.setItem('books', JSON.stringify(books));

        // Display the updated list of books
        displayBooks();

        // Clear input fields
        $("#bookTitle").val("");
        $("#Author").val("");
        $("#bookID").val("");
        $("#bookCategory").val("");
        $("#bookDesc").val("");
    });

    // Function to delete a book
    $(document).on("click", ".deleteBtn", function() {
        var index = $(this).data("index");
        books.splice(index, 1); // Remove the book from the array
        localStorage.setItem('books', JSON.stringify(books)); // Save the updated array to localStorage
        displayBooks(); // Update the displayed list of books
    });

    // Function to edit a book
    $(document).on("click", ".editBtn", function() {
        var index = $(this).data("index");
        var book = books[index];
        // Populate form fields with current book details
        $("#bookTitle").val(book.title);
        $("#Author").val(book.author);
        $("#bookID").val(book.id);
        $("#bookCategory").val(book.category);
        $("#bookDesc").val(book.description);
        // Remove the edited book from the array
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books)); // Save the updated array to localStorage
        displayBooks(); // Update the displayed list of books
    });

    // Function to clear all input fields
    $("#clearBtn").click(function() {
        $("#bookTitle").val("");
        $("#Author").val("");
        $("#bookID").val("");
        $("#bookCategory").val("");
        $("#bookDesc").val("");
    });
});