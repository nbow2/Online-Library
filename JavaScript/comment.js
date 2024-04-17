var reviews = []; // Array to store reviews

        function addReview() {
            var reviewText = document.getElementById("review-text").value;
            if (reviewText.trim() !== "") { // Check if the review text is not empty
                reviews.push(reviewText); // Add the review to the array
                drawReviews(); // Redraw the reviews
            }
            document.getElementById("review-text").value = ""; // Clear the review box after adding
        }

        function drawReviews() {
            var reviewBox = document.getElementById("review-box");
            var reviewList = "<ul>"; // Start a new unordered list
            for (var i = 0; i < reviews.length; i++) {
                reviewList += "<li>" + reviews[i] + " <button onclick='removeReview(" + i + ")'>Remove</button></li>"; // Add each review with a remove button
            }
            reviewList += "</ul>"; // Close the unordered list
            reviewBox.innerHTML = reviewList; // Update the review box
        }

        function removeReview(index) {
            reviews.splice(index, 1); // Remove the review at the specified index
            drawReviews(); // Redraw the reviews
        }