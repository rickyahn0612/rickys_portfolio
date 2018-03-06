// This is where it all goes :)

$( document ).ready(function() {
  $('.portfolio-image-container img, .port-button').click(function(){
    $('.left-container').fadeOut(function(){
      $('html, body').animate({ scrollTop: 0 }, 1500);
    });
    $('.right-container').addClass('mobile-view').animate({'left': 0}, 1500, function(){
      $('.port-view-container').fadeIn(1000, function(){
        $('.close-button').animate({'opacity' : 1, top: 0}).addClass('close-button-mobile');
      });
    });
  });

  $('.close-button').click(function(){
    $('.close-button').animate({top: -1000}, 1000).removeClass('close-button-mobile', function() {
      $('.port-view-container').fadeOut(function() {
      $('.right-container').removeClass('mobile-view').animate({'left': '50%'}, 1200)
        $('.left-container').fadeIn()
      });
    })
  })
});
