document.addEventListener('DOMContentLoaded', function() {
    // Mock user data for demonstration
    const user = {
        username: 'user',
        role: 'user'
    };

    const admin = {
        username: 'admin',
        role: 'admin'
    };

    // Retrieve logged-in user information (this is just for demonstration purposes)
    const loggedInUser = sessionStorage.getItem('loggedInUser') === 'admin' ? admin : user;

    // Display the user information
    document.getElementById('account-username').textContent = loggedInUser.username;
    document.getElementById('account-role').textContent = loggedInUser.role;

    // Logout functionality
    document.getElementById('logout').addEventListener('click', function() {
        sessionStorage.removeItem('loggedInUser'); // Clear session storage
        window.location.href = 'logIN.html'; // Redirect to login page
    });
});
