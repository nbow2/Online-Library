document.addEventListener('DOMContentLoaded', function() {
    
    const validUser = {
        username: 'user',
        password: '12345'
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

        // Check if the entered username and password match the valid credentials
        if (enteredUsername !== validUser.username || enteredPassword !== validUser.password) {
            showError(usernameInput, 'Invalid username or password');
            return;
        }

        // If all validations pass, you can submit the form
        window.location.href = 'index.html';
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
