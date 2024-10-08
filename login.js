document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Send a POST request to the Flask API
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            email: email,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            // Redirect to the dashboard or another page on success
            window.location.href = '/dashboard';  // Change this to your desired page
        } else {
            alert(data.message);  // Show error message
        }
    })
    .catch(error => console.error('Error:', error));
});
