  $( document ).ready(function() { // loads once the document is ready
    
    var $div = $('<div>'); 

    var toLoad = $('.hiddenContent').html();

    switch (toLoad) {
        case 'about':
            $div.load("/public/homeHTML/about.html");
            $("#content").html($div);
            $(".active").removeClass('active');
            $("#about").addClass('active');
            break;

        case 'projects':
            $div.load("/public/homeHTML/projects.html");
            $("#content").html($div);
            $(".active").removeClass('active');
            $("#projects").addClass('active');
            break;

        case 'thoughts': 
            $div.load("/public/homeHTML/thoughts.html");
            $("#content").html($div);
            $(".active").removeClass('active');
            $("#thoughts").addClass('active');
            break;

        case 'web':
            $div.load("/public/homeHTML/web.html");
            $("#content").html($div);
            $(".active").removeClass('active');
            $("#web").addClass('active');
            break;

        case 'mobile':
            $div.load("/public/homeHTML/mobile.html");
            $("#content").html($div);
            $(".active").removeClass('active');
            $("#mobile").addClass('active');
            break;

        case 'publications':
            $div.load("/public/homeHTML/publications.html");
            $("#content").html($div);
            $(".active").removeClass('active');
            $("#publications").addClass('active');
            break;

        case 'contact':
            $div.load("/public/homeHTML/contact.html");
            $("#content").html($div);
            $(".active").removeClass('active');
            $("#contact").addClass('active');
            break;

    } 
  });