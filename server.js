// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 7070;


// configuration ===============================================================


// require('./config/passport')(passport); // pass passport for configuration

app.configure(function() {

  // set up our express application
  app.use(express.logger('dev')); // log every request to the console
  app.use(express.cookieParser()); // read cookies (needed for auth)
  app.use(express.bodyParser()); // get information from html forms

  app.set('view engine', 'ejs'); // set up ejs for templating

  // required for passport
  app.use(express.session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret


});

app.use("/public",express.static(__dirname + '/public'));
// routes ======================================================================


require('./app/routes.js')(app); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
