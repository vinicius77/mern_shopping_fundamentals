# A Simple Shopping List Application using MERN stack (MONGODB, EXPRESS, REACT & NODE.JS)

# Create from Scratch
* npm init
* npm i express body-parser mongoose concurrently (There is not need to use body-parser dependency anymore [SEE NOTES])
* npm i -D nodemon
* Add the scripts ("start" and "server") in the package.josn file
* npm run server

# The Technologies Used Are The Following:

* Express Backend Framework
* Mongo DB
* Mongoose
* NPM
* Postman (HTTP Client to test the API requests)

# Dependencies
* Express
* Body Parser
* Mongous
* Concurrently (Allos us to run the server and the client at the sime time)
* Nodemon

# Instructions for Installation:

* Download this repository
* Install the npm dependencies: npm install
* Run the web server: npm run server
* Access the application at: http://localhost:5000


## Day One
* Created the folder config to save our projects keys
* Created An account on cloud.mongodb.com to interact with the MongoDB
* Created a cluster and user on MongoDB Atlas website
* ## Server JS
* Created a connection between the API and the cloud database
* Created a model "Item" in our database (Collection)
* Learned about basic Routing using Express Framework
* Created the methods POST, GET and DELETE and tested all of them using Postman
* Created this README file to write the progress and what was learned today
* Created .gitignore file to exclude pushing th node_modules files to our repository

## Notes

* Express has implemented the body-parser directly into the framework (express >= 4.16.0), so instead "app.use(bodyParser.json())" we just need to replace it for "app.use(express.json())". Said that, we don't need to use body-parser as a dependency anymore.
* To resolve both deprecating warnings: (node:2576) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option. Into the MongoClient constructor pass this values

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }); 

## Day Two
* Implemented the PUT method and tested it using Postman


Import bootstrap CSS in React failed to compile


Add on client/public/index.html<!-- Latest compiled and minified CSS -->
<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"> -->

instead import on App.js
import "bootstrap/dist/css/bootstrap.min.css"


How to fix “This is probably not a problem with npm. There is likely additional logging output above.”
I solved when ran "sudo npm server"