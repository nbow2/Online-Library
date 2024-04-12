document.addEventListener("DOMContentLoaded", function() {
    // Function to handle form submission
    function login() {
        // Retrieve form input values
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Perform basic validation
        if (username === "" || password === "") {
            alert("Please fill in all fields.");
            return;
        }

        // You can perform further validation here if needed

        // If all validation passed, you can proceed with form submission
        // For demonstration purposes, let's just log the input values
        console.log("Username:", username);
        console.log("Password:", password);

        // Here you can make an AJAX request to send the login credentials to the server
        // Example:
        // var formData = { username: username, password: password };
        // var jsonFormData = JSON.stringify(formData);
        // var xhr = new XMLHttpRequest();
        // xhr.open("POST", "your-server-endpoint", true);
        // xhr.setRequestHeader("Content-Type", "application/json");
        // xhr.send(jsonFormData);
    }

    // Attach login function to the form submit button click event
    document.querySelector("button").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        login(); // Call the login function
    });
});
