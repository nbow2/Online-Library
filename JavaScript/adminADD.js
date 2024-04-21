document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var yearOfPublish = document.getElementById('yearOfPublish').value;
    var category = document.getElementById('category').value;
    var description = document.getElementById('description').value;
    var isbn = document.getElementById('isbn').value;
    var imageUrl = document.getElementById('image').value;

    // Create new book row
    var newRow = document.createElement('tr');
    newRow.innerHTML = '<td>' + title + '</td><td>' + author + '</td><td>' + yearOfPublish + '</td><td>' + category + '</td><td>' + description + '</td><td>' + isbn + '</td><td><img style="width:50px;" src="' + imageUrl + '" alt="Book Cover"></td><td><button class="botton_delete" onclick="deleteRow(this)">Delete</button></td>';

    // Append new row to the table body
    document.querySelector('#addedBooks tbody').appendChild(newRow);

    // Clear form fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('yearOfPublish').value = '';
    document.getElementById('category').value = '';
    document.getElementById('description').value = '';
    document.getElementById('isbn').value = '';
    document.getElementById('image').value = '';
  });

  function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }