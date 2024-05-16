

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
