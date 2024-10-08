document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    // Adding a submit event listener and getting the values from the form field
    form.addEventListener('submit', function (event) {
        const firstName = document.getElementById('f_name').value.trim();
        const lastName = document.getElementById('l_name').value.trim();
        const email = document.getElementById('email').value.trim();
        
        //// If any of the fields are empty, display an alert and prevent form submission
        if (firstName === '' || lastName === '' || email === '') {
            alert('Please fill out all required fields.');
            event.preventDefault(); // Stops the form from submitting
        }
    });
});

