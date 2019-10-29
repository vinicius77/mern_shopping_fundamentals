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
* Concurrently (Allow us to run the server and the client at the same time)
* Nodemon

# Instructions for Installation:

* Download this repository
* Install the npm dependencies: npm install
* Run the web server: npm run server
* Access the application at: http://localhost:5000


## DAY ONE - EXPRESS API & MONGODB
* Created the folder config to save our projects keys
* Created An account on cloud.mongodb.com to interact with the MongoDB
* Created a cluster and user on MongoDB Atlas website
* ## Server-Side
* Created a connection between the API and the cloud database
* Created a model "Item" in our database (Collection)
* Learned about basic Routing using Express Framework
* Created the methods POST, GET and DELETE and tested all of them using Postman
* Created this README file to write the progress and what was learned today
* Created .gitignore file to exclude pushing th node_modules files to our repository

## Notes (Day One)

* Express has implemented the body-parser directly into the framework (express >= 4.16.0), so instead "app.use(bodyParser.json())" we just need to replace it for "app.use(express.json())". Said that, we don't need to use body-parser as a dependency anymore.
* To resolve both deprecating warnings: (node:2576) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option. Into the MongoClient constructor pass this values

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }); 

## DAY TWO - CLIENT SETUP & REACTSTRAP
* Implemented the PUT method and tested it using Postman
* Create The Client-Side using React
* Created the script to run client, both client and the server and also to install client dependencies
* Add the Proxy to run the app on the port 5000
* Installed some dependencies as:
uuid (to generate random IDs),
Boostrap (to add some css to our page)
* Create The Navbar component
* Styling the Navbar using Reactstrap

# Dependencies (Day Two)
* Bootstrap
* React
* Reactstrap
* Uuid

# Problems and How to Solve Then (Day Two)
* How to fix “This is probably not a problem with npm. There is likely additional logging output above.”
I solved it when I stopped the server and ran "sudo npm dev" again.
* How to fix "./node_modules/bootstrap/dist/css/bootstrap.css (./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./node_modules/bootstrap/dist/css/bootstrap.css)"
Apparently it worked after insert the navbar component into App.js in order to add this line "import "bootstrap/dist/css/bootstrap.min.css"".

# CLI (Day Two)
* create-react-app . (inside of the client folder) 
* npm i bootstrap reactstrap uuid (inside of the client folder)

## DAY THREE - SHOPPINGLIST COMPONENTS & TRANSITIONS

* Create the ShoppingList Component
* Used Reactstrap Components
* Used Reactstrap Transition Group Components
* Used uuid to generate random id while using static data
* Learned what is a state in React
* Learned to use spread operator and set the state to add and delete data
* Learned to use React Dev Tools' Firefox Extension

## DAY FOUR
* REDUX CRASH COURSE - To better understanding how to use Redux in the next step of the project.
* Supplementary hands-on video-tutorial to create a very simple React App from scratch that uses Redux.
(You can find this project in my Github repository named learn-redux)
I have learned so far what are and how to use: Dispatches, Store, Actions, Reducers and Provider. How to use Redux Dev Tools.

## DAY FIVE
* Implementing the Store, Reducers, Actions and Dispatch into Redux and connect them to React using mapStateToProps (Allows us to take the item state and map it into a component property)
* More resources: Harvard CS50 Redux Video

### Store
The Store is the object that brings actions and reducers together. The store has the following responsibilities:

* Holds application state;
* Allows access to state via getState();
* Allows state to be updated via dispatch(action);
* Registers listeners via subscribe(listener);
* Handles unregistering of listeners via the function returned by subscribe(listener).

### Reducers
Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

### Actions 
Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().

## DAY SIX

### Issues
1 - MongoTimeoutError: Server selection timed out after 30000 ms
SOLUTION: curl ifconfig.me on CLI and add the IP to Atlas(MongoDB Cloud) IP Whitelist
2 - sh: 1: nodemon: not found
SOLUTION: sudo npm install nodemon -g --save
### PROGRESS
* Implement the DeleteItem feature for the Shopping List 
* Implement the AddItem feature for the Shopping List 
* Install AXIOS (HTTP Client)
npm i axios

## DAY SIX
### DEPLOYMENT (HEROKU)
* Preparing the App to deploy
* Set the server.js file to run scripts on production(heroku)
#### PS.: I had already the heroku CLI installed
* $ heroku login
* $ heroku create
* $ heroku git:remote -a the-name-of-your-heroku-remote-repository
