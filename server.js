// Running express server with the localhost port
const express = require('express');
const app = express();
const port = 3001; //Linking with port "3001"

app.use(express.static(__dirname + '/Huyghue_portfolio'));

app.use(express.urlencoded({ extended: true }));

// Getting the contact.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
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
