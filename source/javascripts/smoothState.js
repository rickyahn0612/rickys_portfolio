(function($) {
  $.fn.onPageLoad = function() {
    $('.intro-copy > strong').animate({'opacity' : 1, 'top' : 0}, 500, function(){
			$('.intro-copy > span').animate({'opacity' : 1}, 1500, function(){
				$('.learn-more-button').animate({'opacity' : 1, 'margin-top' : '10px'}, 500)
			})
		})

		$('.mouse-down').click(function() {
			$('html, body').animate({scrollTop:$('#portfolio').position().top}, 2000);
		});


		$('.counter').each(function() {
			var ss = document.styleSheets;
			var $this = $(this),
					countTo = $this.attr('data-count');

			$({ countNum: $this.text()}).animate({
				countNum: countTo
			},

			{
				duration: 4000,
				easing:'linear',
				step: function() {
					$this.text(Math.floor(this.countNum) + '%');
				},
				complete: function() {
					$this.text(this.countNum + '%');
				}

			});
		});
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
      prefetch: false,
      cacheLength: 2,
      onStart: {
        duration: 800,
        render: function($container) {
          $container.addClass("is-exiting");
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
