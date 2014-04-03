// app/routes.js
module.exports = function(app) {

  // =====================================
  // HOME PAGE (with login links) ========
  // =====================================
  app.get('/', function(req, res) {


    res.render('index.ejs');



    });


  app.get('/home', function(req, res) {


    res.render('index.ejs');



    });

    app.get('/about', function(req, res) {


    res.render('about.ejs');



    });


  app.get('/contact', function(req, res) {


    res.render('contact.ejs');



    });

  app.get('*', function(req, res) {


    res.render('404.ejs');



    });



};
