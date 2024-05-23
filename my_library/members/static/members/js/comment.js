

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('review-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the form from submitting traditionally
        var reviewBox = document.getElementById('review-box');
        var reviewText = reviewBox.value; // Gets text from textarea
        if (reviewText.trim() !== "") { // Checks if text isn't just empty or spaces
            var reviewsList = document.getElementById('reviews-list');
            var newReview = document.createElement('li');
            newReview.textContent = reviewText; // Sets the text of the new list item to the review
            reviewsList.appendChild(newReview); // Adds the new review to the list
            reviewBox.value = ""; // Clears the textarea after submission
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('review-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the form from submitting traditionally

        var reviewBox = document.getElementById('review-box');
        var reviewText = reviewBox.value; // Gets text from textarea

        if (reviewText.trim() !== "") { // Checks if text isn't just empty or spaces
            var xhr = new XMLHttpRequest();
            var url = `/add_comment/{{ book.id }}/`; // The URL for your add_comment view

            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken')); // CSRF token for security

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var jsonResponse = JSON.parse(xhr.responseText);
                    if (jsonResponse.success) {
                        var reviewsList = document.getElementById('reviews-list');
                        var newReview = document.createElement('li');
                        newReview.textContent = `${jsonResponse.username}: ${jsonResponse.comment}`; // Sets the text of the new list item to the review
                        reviewsList.appendChild(newReview); // Adds the new review to the list
                        reviewBox.value = ""; // Clears the textarea after submission
                    }
                }
            };

            var params = `text_comment=${encodeURIComponent(reviewText)}`;
            xhr.send(params);
        }
    });

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
});
