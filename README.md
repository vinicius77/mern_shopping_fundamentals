# A Simple Shopping List Application using MERN stack (MONGODB, EXPRESS, REACT & NODE.JS)

# The Technologies Used Are The Following:

* Express Backend Framework
* Mongo DB
* Mongoose
* NPM

# Dependencies
* Express
* Body Parser
* Mongous
* Concurrently (Allos us to run the server and the client at the sime time)
* nodemon (-D)

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

## Day Two
* Implemented the PUT method and tested it using Postman

## Notes

* Express has implemented the body-parser directly into the framework (express >= 4.16.0), so instead "app.use(bodyParser.json())" we just need to replace it for "app.use(express.json())". Said that, we don't need to use body-parser as a dependency anymore.
* To resolve both deprecating warnings: (node:2576) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option. Into the MongoClient constructor pass this values

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }); 