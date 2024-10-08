// Function to handle form submissions
function validateForm(event) {
    event.preventDefault(); // Prevent form from submitting by default

    const inputs = document.querySelectorAll('input, textarea, select');
    let valid = true;

    inputs.forEach((input) => {
        if (input.value.trim() === '') {
            input.style.borderColor = 'red';
            valid = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });

    if (valid) {
        alert("Form submitted successfully!");
        // Here, you can handle the form submission (e.g., using AJAX)
    } else {
        alert("Please fill out all the fields.");
    }
}

// Attach event listener to forms
const forms = document.querySelectorAll('form');
forms.forEach((form) => {
    form.addEventListener('submit', validateForm);
});
// Handle solution submission and mark doubt as solved
function submitSolution(event) {
    event.preventDefault();
    
    const solution = document.getElementById('solution').value;
    if (solution.trim() === '') {
        alert('Please enter a solution before submitting.');
        return;
    }

    // Mark doubt as solved (you can integrate this with your backend)
    const doubtStatus = document.getElementById('doubt-status');
    doubtStatus.textContent = 'Solved';

    alert('Solution submitted successfully.');
}

// Attach event listener to the solution form
const solutionForm = document.getElementById('solution-form');
if (solutionForm) {
    solutionForm.addEventListener('submit', submitSolution);
}
// Handle feedback form submission
function submitFeedback(event) {
    event.preventDefault();

    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    if (rating === '' || comments.trim() === '') {
        alert('Please provide both a rating and comments.');
        return;
    }

    alert('Thank you for your feedback! Rating: ${rating}');
    // Send the feedback data to the backend here (e.g., using AJAX)
}

// Attach event listener to feedback form
const feedbackForm = document.getElementById('feedback-form');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', submitFeedback);
}