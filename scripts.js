// Common function to validate forms
function validateForm(event) {
    event.preventDefault(); // Prevent form from submitting by default

    const inputs = event.target.querySelectorAll('input, textarea, select');
    let valid = true;

    inputs.forEach((input) => {
        if (input.value.trim() === '') {
            input.style.borderColor = 'red'; // Highlight empty fields
            valid = false;
        } else {
            input.style.borderColor = '#ddd'; // Reset border color
        }
    });

    if (valid) {
        alert("Form submitted successfully!");
        // Handle the form submission (e.g., using AJAX or redirect)
        // Uncomment the following line if using standard form submission
        // event.target.submit();
    } else {
        alert("Please fill out all the fields.");
    }
}

// Function to handle registration form submission
function handleRegistration(event) {
    validateForm(event);
}

// Function to handle feedback form submission
function handleFeedback(event) {
    // Validate form first
    validateForm(event);
    const rating = document.getElementById('rating') ? document.getElementById('rating').value : '';
    const comments = document.getElementById('comments') ? document.getElementById('comments').value : '';

    // Check for rating and comments
    if (rating === '' || comments.trim() === '') {
        alert('Please provide both a rating and comments.');
        return;
    }

    // Process feedback data (send to server)
    alert('Thank you for your feedback! Rating: ${rating}');
}

// Function to handle solution submission and mark doubt as solved
function submitSolution(event) {
    event.preventDefault();
    
    const solution = document.getElementById('solution') ? document.getElementById('solution').value : '';
    if (solution.trim() === '') {
        alert('Please enter a solution before submitting.');
        return;
    }

    // Mark doubt as solved (you can integrate this with your backend)
    const doubtStatus = document.getElementById('doubt-status');
    if (doubtStatus) {
        doubtStatus.textContent = 'Solved';
    }

    alert('Solution submitted successfully.');
}

// Attach event listeners to forms on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Registration Form
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleRegistration);
    }

    // Feedback Form
    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', handleFeedback);
    }

    // Solution Submission Form
    const solutionForm = document.getElementById('solution-form');
    if (solutionForm) {
        solutionForm.addEventListener('submit', submitSolution);
    }
});