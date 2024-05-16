document.addEventListener('DOMContentLoaded', function() {
    
    const validUser = {
        username: 'user',
        password: '12345',
        role: 'user' // Assigning a role to the user
    };

    const admin = {
        username: "admin",
        password: "12345",
        role: 'admin' // Assigning a role to the admin
    };

  
    const form = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

       
        const enteredUsername = usernameInput.value.trim();
        const enteredPassword = passwordInput.value.trim();

        // Reset previous error messages
        resetErrorMessages();

        // Validate username
        if (enteredUsername === '') {
            showError(usernameInput, 'Username is required');
            return;
        }

        // Validate password
        if (enteredPassword === '') {
            showError(passwordInput, 'Password is required');
            return;
        }

        let user; // Variable to store user object

        // Check if the entered username and password match the valid credentials
        if (enteredUsername === validUser.username && enteredPassword === validUser.password) {
            user = validUser;
        } else if (enteredUsername === admin.username && enteredPassword === admin.password) {
            user = admin;
        } else {
            showError(usernameInput, 'Invalid username or password');
            return;
        }

        // Redirect based on user's role
        if (user.role === 'user') {
            window.location.href = 'index.html';
        } else if (user.role === 'admin') {
            window.location.href = 'adminADD.html';
        }
        
        console.log('Login successful!');
    });

    function showError(input, message) {
        
        const parent = input.parentElement;

        
        parent.classList.add('error');

       
        let errorSpan = parent.querySelector('.error-message');
        if (!errorSpan) {
    
            errorSpan = document.createElement('span');
            errorSpan.classList.add('error-message');
            // Append the error message span to the parent element
            parent.appendChild(errorSpan);
        }

        // Set the error message text
        errorSpan.innerText = message;
    }

    function resetErrorMessages() {
        // Get all elements with the 'error' class
        const errorElements = document.querySelectorAll('.error');


        errorElements.forEach(function(element) {
            element.classList.remove('error');
            const errorSpan = element.querySelector('.error-message');
            if (errorSpan) {
                errorSpan.remove();
            }
        });
    }
});
