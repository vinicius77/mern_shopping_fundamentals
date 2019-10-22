const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// DB Config imported from the keys.js file
const db = require("./config/keys").mongoURI;

// Connecting to Mongo DB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("Successful Conected on MongoDB!"))
        .catch(err => console.log(err));

// Setting the Port that will be used on Heroku
const port = process.env.PORT || 5000;

// The App will listen in this port
app.listen(port, () => console.log(`Listening on port: ${port}`));