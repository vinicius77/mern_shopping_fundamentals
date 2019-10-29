const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path"); //Core nodejs module

//const items = require('./routes/api/items');
const items = require("./routes/api/items");

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// DB Config imported from the keys.js file
const db = require("./config/keys").mongoURI;

// Connecting to Mongo DB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("Successful Conected on MongoDB!"))
        .catch(err => console.log(err));

//Use Routes
app.use("/api/items", items);

// Serve static assets if in PRODUCTION
if (process.env.NODE_ENV === "production"){
	// Set static folder
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

// Setting the Port that will be used on Heroku
const port = process.env.PORT || 5000;

// The App will listen in this port
app.listen(port, () => console.log(`Listening on port: ${port}`));