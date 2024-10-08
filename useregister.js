document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Prepare the data object
    const userData = {
        name: name,
        email: email,
        password: password,
        role: role
    };

    // Send a POST request to the Flask API
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            // Redirect to the login page or dashboard after successful registration
            window.location.href = '/login';  // Change this to the URL of your login or dashboard page
        } else {
            alert('Error: ' + data.message);
        }
    })
    .catch(error => console.error('Error:', error));
});
