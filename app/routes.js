// app/routes.js
module.exports = function(app) {

  
  app.get('*', function(req, res) {
    res.redirect('http://www.mfa.org');
  });
  
  // =====================================
  // HOME PAGE (with login links) ========
  // =====================================
  app.get('/',function(req,res)
  {  
    res.render('index.ejs', {content: 'about'});
  });

  app.get('/home',function(req,res)
  {  
    res.render('index.ejs', {content: 'about'});
  });

  app.get('/thoughts',function(req,res)
  {  
    res.render('index.ejs', {content: 'thoughts'});
  });

  app.get('/about',function(req,res)
  {  
    res.render('index.ejs', {content: 'about'});
  });

  app.get('/mobile',function(req,res)
  {  
    res.render('index.ejs', {content: 'mobile'});
  });

  app.get('/web',function(req,res)
  {  
    res.render('index.ejs', {content: 'web'});
  });

    app.get('/publications',function(req,res)
  {  
    res.render('index.ejs', {content: 'publications'});
  });

  app.get('/projects',function(req,res)
  {  
    res.render('index.ejs', {content: 'projects'});
  });


  app.get('/contact',function(req,res)
  {  
    res.render('index.ejs', {content: 'contact'});
  });

  app.get('*',function(req,res)
  {  
    res.render('index.ejs', {content: 'about'});
  });
};
