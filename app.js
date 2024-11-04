//Running express server with the localhost port
const express = require('express');
const app = express();
const port = 3000; 

app.use(express.urlencoded({ extended: true }));

//Getting the index.html file 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); 
});

//Getting the inputed forms to sending it to the server 

//Running on localhost port 
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});