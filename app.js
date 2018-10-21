const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
mongoose 
    .connect(db)
    .then(()=> console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send("Hello Brett & World!"));

// later we will be deploying our app to Heroku.
// it will be required to be run on process.env.PORT
// locally our server will run on lcalhost:5000
const port = process.env.PORT || 5000;

//tells express to start a socket and listen for connections on the path.
app.listen(port, () => console.log(`Server is running on port ${port}`));

//change scripts to "start": "node app.js" and "server": "nodemon app.js"

//connect database to mLab by creating config > keys.js file and adding the code