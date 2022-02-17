////// DONT FORGET TO COMMIT, RUN NODEMON //////


//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require('mongoose');
// controller for vehicles index
const vehiclesController = require('./controllers/vehicles.js')
const servicesController = require('./controllers/services.js')
const category = require('./models/option.js')
const Vehicle = require('./models/vehicles.js')
const Service = require('./models/services.js')

const app = express ();
const db = mongoose.connection;
require('dotenv').config()


//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));
// extended: false - does not allow nested objects in query strings
app.use(express.json());
// returns middleware that only parses JSON - may or may not need it depending on your project
//use method override
app.use(methodOverride('_method'));
// allow POST, PUT and DELETE from a form

// use vehicle controller
app.use('/vehicles', vehiclesController)

// use services controller
app.use('/services', servicesController);

//___________________
// Routes
//___________________

// welcome page/index route
app.get('/', (req, res) => {
  res.render('index.ejs')
})


//localhost:3000
app.get('/' , (req, res) => {
  res.send('Hello World!');
});

//___________________
//Listener
//___________________
// Service.collection.drop()
// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI);

app.listen(PORT, () => console.log( 'Listening on port:', PORT));
