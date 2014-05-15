$(document).ready(function(){


      $("#navleft").sticky({topSpacing:0});
      //$("img").unveil();

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

        });

      $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});















});