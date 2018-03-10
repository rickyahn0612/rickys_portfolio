// This is where it all goes :)

$( document ).ready(function() {
	function scrollToTop() {
  	$('html, body').animate({ scrollTop: 0 }, 1500);
	}

  $('.port-overlay, .port-button').click(function(){
    $('.left-container').fadeOut(function(){
			scrollToTop();
    });
    $('.right-container').addClass('mobile-view').animate({'left': 0}, 1000, function(){
      $('.port-view-container').fadeIn(700, function(){
        $('.close-button').animate({top: 0}, 800).addClass('close-button-mobile')
      });
    });
  });

  $('.contact-form-link').on('click', function(e){
    e.preventDefault();
    $('.left-container').fadeOut(function() {
			scrollToTop();
      $('.close-button').animate({top: 0}, 800).addClass('close-button-mobile')
      $('.contact-form-container').animate({top: 0}, 1500, function(){
        $(this).find('h1').addClass('glitch');
      });
    });
  });

  $('.close-button, .return-home').click(function(){
    $('.close-button').animate({top: -500}, 500).removeClass('close-button-mobile', function() {
      $('.port-view-container').fadeOut(function() {
        $('.right-container').removeClass('mobile-view').animate({'left': '50%'}, 1000)
        $('.left-container').fadeIn()
        $('.contact-form-container').animate({top: '-1000px'});
				scrollToTop();
      });
    })
  })

  $('.portfolio-image-container').mouseenter(function(){
    $('.port-overlay').fadeIn();
  });

  $('.portfolio-image-container').mouseleave(function(){
    $('.port-overlay').fadeOut();
  });
});
