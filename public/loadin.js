  $( document ).ready(function() { // loads once the document is ready
    
    // the variables that will hold all of the content
    var $projects = $('<div>'); 
    var $web = $('<div>');
    var $mobile = $('<div>');
    var $publications = $('<div>');
    var $about = $('<div>');
    var $contact = $('<div>');


    // loading the html into the variables
    $projects.load("/public/homeHTML/projects.html",function() { 
    console.log("Loaded projects");
    });

    $web.load("/public/homeHTML/web.html",function(){
      console.log("Loaded web")
    });

    $mobile.load("/public/homeHTML/mobile.html",function(){
      console.log("Loaded mobile")
    });

    $publications.load("/public/homeHTML/publications.html",function(){
      console.log("Loaded publications")
    });

    $about.load("/public/homeHTML/about.html",function(){
      console.log("Loaded about")
    });

    $contact.load("/public/homeHTML/contact.html",function(){
      console.log("Loaded contact")
    });


    //$("#content").html($downloadRun); // loads the initial content


    // the various click events that will switch tabs and data
    $("#projectsA").click(function(){ 
     $("#content").html($projects);
     $(".active").removeClass('active');
     $("#projects").addClass('active');
     //$( window ).scrollTop(0);
    });


    $("#webA").click(function(){ 
        console.log($web);
     $("#content").html($web);
     $(".active").removeClass('active');
     $("#web").addClass('active');
     //$( window ).scrollTop(0);
    });

    $("#mobileA").click(function(){ 
     $("#content").html($mobile);
     $(".active").removeClass('active');
     $("#mobile").addClass('active');
     //$( window ).scrollTop(0);
    });

    $("#publicationsA").click(function(){ 
     $("#content").html($publications);
     $(".active").removeClass('active');
     $("#publications").addClass('active');
     //$( window ).scrollTop(0);
    });

    $("#aboutA").click(function(){ 
     $("#content").html($about);
     $(".active").removeClass('active');
     $("#about").addClass('active');
     //$( window ).scrollTop(0);
    });

    $("#contactA").click(function(){ 
     $("#content").html($contact);
     $(".active").removeClass('active');
     $("#contact").addClass('active');
     //$( window ).scrollTop(0);
    });
  



  });