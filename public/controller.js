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



      $(".insta_ham").hover(function() {
          console.log('hover');
          $(this).animate({
                            height:"42%",
                            width:"42%"
                          },150);
        }, function() {
                    $(this).animate({
                            height:"28%",
                            width:"28%"
                          },150);
          /* Stuff to do when the mouse leaves the element */
        });













});