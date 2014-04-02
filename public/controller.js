$(document).ready(function(){


        $(".web").hover(function() {
          console.log('hover');
          $(this).animate({
                            bottom:"10px"
                          },150);
        }, function() {
                    $(this).animate({
                            bottom:"0px"
                          },150);
          /* Stuff to do when the mouse leaves the element */
        });













});