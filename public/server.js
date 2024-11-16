const express = require('express');
const path = require('path'); // Import path for handling file paths
const app = express();
const port = 3001; // Linking with port "3001"

// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Redirecting to the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Getting other HTML files
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Handling form submission and sending it to the server
app.post('/submit', (req, res) => {
    const { f_name, l_name, email, phone } = req.body;
    console.log('Form submission:', { f_name, l_name, email, phone });

    // Confirmation message using first and last name
    res.send(`<h1>Thank you, ${f_name} ${l_name}! Your message has been received.</h1>`);
});

// Running on localhost port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
