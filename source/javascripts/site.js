// This is where it all goes :)

$( document ).ready(function() {
    var learnMoreBtn = $('.learn-more-button')
    var parentLeftContainer = $('.parent-left-container')
    var halfParentContainer = '48vw'
    var showRickyImage = $('.ricky-image').animate({'opacity' : 1}, 1000)
    var introCopy = $('.intro-copy')
    function showMainCopy() { $('.parent-left-container > .main-copy').fadeIn(); }
    function mailerIcon() { $('.mailer-icon').fadeIn() }

    $('.intro-copy > strong').animate({'opacity': '1', 'top': '0'}, 1500, function() {
      $('.intro-copy > span').animate({'opacity' : '1'}, 500 , function() {
        learnMoreBtn.animate({'opacity': '1', 'margin-top': '1.4vh'}, 700)

        learnMoreBtn.click(function() {
          introCopy.remove();
          mailerIcon()
          showRickyImage
          showMainCopy()
      });
    });
  });
});
