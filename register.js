document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from reloading the page

    const username = document.getElementById('khushi2415').value;
    const password = document.getElementById('Khushi4433').value;

    // Send the data to the Flask backend
    fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').textContent = data.message || data.error;
    })
    .catch(error => console.error('Error:', error));
});