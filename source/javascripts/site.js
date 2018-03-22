// This is where it all goes :)

$( document ).ready(function() {
    $('.intro-copy > strong').animate({'opacity': '1', 'top': '0'}, 1500, function() {
      $('.intro-copy > span').animate({'opacity' : '1'}, 500 , function() {
        $('.learn-more-button').animate({'opacity': '1', 'margin-top': '1.4vh'}, 700)
        $('.learn-more-button').click(function() {
          $('.intro-copy').remove();
          $('.parent-left-container').animate({'width': '48vw'}, 2400, function(){
						$('.ricky-image').animate({'opacity' : '1'}, 1000)
            $('.parent-left-container > .main-copy').fadeIn();
          });
      });
    });
  });
});
