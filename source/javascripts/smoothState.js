(function($) {
  $.fn.onPageLoad = function() {
    $('.intro-copy > strong').animate({'opacity' : 1, 'top' : 0}, 500, function(){
			$('.intro-copy > span').animate({'opacity' : 1}, 1500, function(){
				$('.learn-more-button').animate({'opacity' : 1, 'margin-top' : '10px'}, 500)
			})
		})
  };

}(jQuery));

$(document).ready(function() {
  $('body').onPageLoad();
});

$(function() {
  "use strict";
  var $page = $("#main"),
    options = {
      debug: true,
      prefetch: true,
      cacheLength: 10,
      onStart: {
        duration: 800,
        render: function($container) {
          // Add your CSS animation reversing class
          $container.addClass("is-exiting");
          // Restart your animation
					smoothState.restartCSSAnimations();
        }
      },
      onReady: {
        duration: 0,
        render: function($container, $newContent) {
          // Remove your CSS animation reversing class
          $container.removeClass("is-exiting");
          // Inject the new content
          $container.html($newContent);
        }
      },
			onAfter: function($container) {
				$container.onPageLoad();
			}
    },
    smoothState = $page.smoothState(options).data("smoothState");
});
