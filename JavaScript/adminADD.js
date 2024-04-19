let  books = [];

function addBook(book)
{
    let table = $('#BookTable tbody');
    table.append(`
    <tr id="${book.id}">
        <td>${book.Title}</td>
        <td>${book.author}</td>
        <td>${book.genre}</td>
        <td>${book.year}</td>
        <td>${book.quantity}</td>
        <td>
        <button class="btn btn-sm btn-warning editBtn" data-id="${book.id}" >
        Edit
        </button>
        <button class="btn btn-sm btn-danger DeleteBtn" data-id="${book.id}" >
        Edit
        </button>
        Delete
        </td>
    `);

}

function clearFrom(){

    $("#bookTitle").val("");
    $("#author").val("");
    $("#genre").val("");
    $("#year").val("");
    $("#quantity").val("");

}

function generateId(){

    return Math.floor(Math.random() * 10000 );
}