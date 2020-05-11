//Requiring dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const pug = require('pug');
const server=express();
const passport = require('passport');
const session = require('express-session');

//Mongodb Connection
// let db = 'mongodb://localhost:27017/coronavirus-test-registration-form';


// // const db = mongoose.connection;

// mongoose.connect('mongodb://localhost:27017/coronavirus-test-registration-form',{useNewUrlParser:true,useUnifiedTopology:true});
// mongoose.connect('mongodb://localhost:27017/coronavirus-test-registration-form', {useNewUrlParser: true, useUnifiedTopology: true}, function (err) {
//     if (err) throw err;
//     console.log('Successfully connected');
//  });

let db = 'mongodb://localhost:27017/coronavirus-test-registration-form';

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
// connectDB();

//Router middlewares

const registerRoutes = require('./routes/registerRoutes');


server.use(bodyParser.json());
server.use(express.static('public'));
// var path = require('path');

server.use(bodyParser.urlencoded({ extended: true }))

server.use(passport.initialize());
server.use(passport.session());
// passport.use(user.createStrategy())
// passport.serializeUser(user.serializeUser())
// passport.deserializeUser(user.deserializeUser)


server.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/views', 'index.html'));  
});


server.use("/register", registerRoutes);


// Error Handler
server.get ('*', (req, res) => {
    res.send('error');
  })



// Listener
server.listen(3000, function() {
    console.log('listening on Port: 3000')
});