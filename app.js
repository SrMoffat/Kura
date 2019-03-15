const express = require('express');
const bodyParser = require('body-parser');

// Instance of the app
const app = express();

// use the body-parser to parse the request body
app.use(bodyParser.json());

// Basic endpoint 
app.get('/', (req, res, next) => {
    res.send('Hello World!');
});

// Listen to a specific port
app.listen(3000);
