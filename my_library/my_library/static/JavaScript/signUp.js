document.addEventListener("DOMContentLoaded", function() {
    // Function to handle form submission
    function signUp() {
        // Retrieve form input values
        var name = document.getElementById("name").value;
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("pass").value;
        var rePassword = document.getElementById("repass").value;
        var userType = document.querySelector('input[name="title"]:checked').value;

        // Perform basic validation
        if (name === "" && username === "" && email === "" &&password === "" && rePassword === "" && userType === "") {
            alert("Please fill in all fields.");
            return;
        }

        if(password === rePassword) {
            return true
        } else {
            return false;
        }


        // If all validation passed
        // For demonstration purposes
        console.log("Name:", name);
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("User Type:", userType);

        // AJAX request to send the form data to the server
        // Example
        // var formData = { name: name, username: username, email: email, password: password, userType: userType };
        // var jsonFormData = JSON.stringify(formData);
        // var xhr = new XMLHttpRequest();
        // xhr.open("POST", "your-server-endpoint", true);
        // xhr.setRequestHeader("Content-Type", "application/json");
        // xhr.send(jsonFormData);
    }

    // Attach sign up function to the form submit button click event
    document.querySelector("button").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        signUp(); // Call the signUp function
    });
});
