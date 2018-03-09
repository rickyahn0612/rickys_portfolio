$(document).ready(function() {
  $(".contact-form").submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
      console.log($form.attr('action'))
      $('form').fadeOut(function(){
      });
    });
  });
});

