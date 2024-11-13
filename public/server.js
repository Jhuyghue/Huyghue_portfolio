// Running express server with the localhost port
const express = require('express');
const app = express();
const port = 3001; //Linking with port "3001"

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Redirecting to the home page
app.get('/', (req, res) => {
    res.sendFile('/index');
});

// Getting the other html files
app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
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
