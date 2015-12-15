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
	});

	$( ".main, .footer" ).click(function() {
	  $( ".menu > ul" ).hide();
	});
});
