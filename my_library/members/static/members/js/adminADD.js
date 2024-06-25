// static/members/js/adminADD.js

document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var formData = new FormData(this);

    fetch("/add/", {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRFToken': getCookie('csrftoken'),
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload(); // Reload the page to update the book list
        } else {
            alert('Error adding book');
        }
    });
});

function deleteRow(button, bookId) {
    fetch("/delete/" + bookId + "/", {
        method: 'POST',
        headers: {
            'X-CSRFToken': getCookie('csrftoken'),
        }
    }).then(response => {
        if (response.ok) {
            button.closest('tr').remove();
        } else {
            alert('Error deleting book');
        }
    });
}

function editRow(button, bookId) {
    var row = button.closest('tr');
    var cells = row.querySelectorAll('td');

    for (var i = 0; i < cells.length - 2; i++) {
        var cellValue = cells[i].textContent;
        cells[i].innerHTML = '<input type="text" value="' + cellValue + '">';
    }

    button.textContent = 'Save';
    button.onclick = function() { saveRow(button, bookId); };
}

function saveRow(button, bookId) {
    var row = button.closest('td');
    var inputs = row.querySelectorAll('input');
    var formData = new FormData();

    inputs.forEach((input, index) => {
        formData.append(input.name, input.value);
    });

    fetch("/update/" + bookId + "/", {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRFToken': getCookie('csrftoken'),
        }
    }).then(response => {
        if (response.ok) {
            location.reload();
        } else {
            alert('Error saving book');
        }
    });
}

// Utility function to get the CSRF token from cookies
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
