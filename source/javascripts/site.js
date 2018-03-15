// This is where it all goes :)

$( document ).ready(function() {
	function scrollToTop() {
  	$('html, body').animate({ scrollTop: 0 }, 1500);
	}

  $('.port-overlay, .port-button').click(function(){
    $('.left-container').fadeOut(function(){
			scrollToTop();
    });
    $('.right-container').addClass('mobile-view').animate({'left': '-25%'}, 1000, function(){
      $('.port-view-container').fadeIn(700, function(){
        $('.close-button').animate({top: 0}, 800).addClass('close-button-mobile')
      });
    });
  });

  $('.contact-form-link, .mailer-icon').on('click', function(e){
    e.preventDefault();
    $('.left-container, .port-view-container').fadeOut(function() {
			scrollToTop();
      $('.mailer-icon').fadeOut();
      $('.close-button').animate({top: 0}, 800).addClass('close-button-mobile')
      $('.right-container').removeClass('mobile-view').animate({'left': '45%'}, 1000)
      $('.contact-form-container').animate({top: 0}, 1500, function(){
        $(this).find('h1').addClass('glitch');
      });

			var isVisible = $('.contact-form-container').is(":visible");
			localStorage.setItem('visible', isVisible);

    });

  });

	var isVisible = localStorage.getItem('visible') === 'false' ? false : true;
	$('.link').toggle(isVisible);
	console.log(isVisible)

  $('.close-button, .return-home').click(function(){
    $('.close-button').animate({top: -500}, 500).removeClass('close-button-mobile', function() {
      $('.port-view-container').fadeOut(function() {
        $('.right-container').removeClass('mobile-view').animate({'left': '45%'}, 1000)
        $('.left-container').fadeIn()
        $('.contact-form-container').animate({top: '-1000px'});
        $('.mailer-icon').fadeIn();
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

	$('.mailer-icon').mouseenter(function(){
    $(this).find('svg').removeClass('fa-envelope').addClass('fa-envelope-open')
	})
	$('.mailer-icon').mouseleave(function(){
    $(this).find('svg').removeClass('fa-envelope-opne').addClass('fa-envelope')
	})
});
