$(document).ready(function() {
  $(".contact-form").submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
      $('form').fadeOut(function(){
  	    $('html, body').animate({ scrollTop: 0 }, 1500);
        $('.success-message').fadeIn();
        formArray = $form.serializeArray()
        userName = formArray[1].value
        $('.user-message').text("Hi " + userName + "! ");
      });
    });
  });
});
