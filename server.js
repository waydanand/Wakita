
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');
const bodyParser = require('body-parser');

// Not sure if routes are needed, will see in future progress

/* const apiRoutes = require('./routes').apiRoutes; */

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));

/* app.use(apiRoutes); */


app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});


app.listen(PORT);
console.log('The magic happens on port ' + PORT);