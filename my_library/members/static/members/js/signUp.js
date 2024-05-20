function signUp() {
    // Retrieve form input values
    var nameElement = document.getElementById("name");
    var usernameElement = document.getElementById("username");
    var emailElement = document.getElementById("email");
    var passwordElement = document.getElementById("password");
    var rePasswordElement = document.getElementById("repassword");
    var userTypeElement = document.querySelector('input[name="usertype"]:checked');

    // Check if elements exist and have values
    if (!nameElement || !usernameElement || !emailElement || !passwordElement || !rePasswordElement || !userTypeElement) {
        alert("Please fill in all fields.");
        return;
    }

    var name = nameElement.value;
    var username = usernameElement.value;
    var email = emailElement.value;
    var password = passwordElement.value;
    var rePassword = rePasswordElement.value;
    var userType = userTypeElement.value;

    // Perform basic validation
    if (name === "" || username === "" || email === "" || password === "" || rePassword === "" || userType === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== rePassword) {
        alert("Passwords do not match.");
        return;
    }

    // If all validation passed
    console.log("Name:", name);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("User Type:", userType);

    // AJAX request to send the form data to the server
//    Example
    // var formData = { name: name, username: username, email: email, password: password, userType: userType };
    // var jsonFormData = JSON.stringify(formData);
    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", "http://127.0.0.1:8000/", true);
    // xhr.setRequestHeader("Content-Type", "application/json");
    // xhr.send(jsonFormData);
}
