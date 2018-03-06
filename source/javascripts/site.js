// This is where it all goes :)

$( document ).ready(function() {
  $('.portfolio-image-container img').click(function(){
    $('.left-container').fadeOut(function(){
      $('html, body').animate({ scrollTop: 0 }, 1500);
    });
    $('.right-container').animate({'left': 0}, 1500, function(){
      $('.port-view-container').fadeIn(1000, function(){
        $('.close-button').animate({'opacity' : 1, top: 0});
      });
    });
  });

  $('.close-button').click(function(){
    $('.port-view-container').fadeOut(function() {
      $('.right-container').animate({'left': '50%'}, 1200, function(){
        $('.close-button').animate({top: -1000}, 1000);
        $('.left-container').fadeIn()
      });
    })

  })
});
