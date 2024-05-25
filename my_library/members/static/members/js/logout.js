document.addEventListener('DOMContentLoaded', function() {
    const logoutForm = document.querySelector('.logout-button form');

    logoutForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;

        fetch(logoutForm.action, {
            method: 'POST',
            headers: {
                'X-CSRFToken': csrfToken
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = "{% url 'Log_in' %}";
            } else {
                alert('Error logging out');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
