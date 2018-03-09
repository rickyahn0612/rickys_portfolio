$(document).ready(function() {
  $(".contact-form").submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    console.log($form.serialize())
    $.post($form.attr("action"), $form.serialize()).then(function() {
      $('form').fadeOut(function(){
      });
    });
  });
});

