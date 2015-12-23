$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	//menu
	$( ".trigger_menu" ).click(function() {
	  $( ".menu > ul" ).slideToggle( "slow");
	  $( ".fixed_sidebar" ).toggle( "fast");
	});

		$( ".touch .main, .touch .footer" ).click(function() {
		  $( ".touch .menu > ul" ).hide();
		});

	//wow
	new WOW().init();

	//lang
	$( ".lang strong" ).click(function() {
	  $( ".lang > ul" ).slideToggle( "slow");
	});
});



