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

		$( ".touch .main, .touch .footer" ).click(function() {
		  $( ".touch .menu > ul" ).hide();
		});
});



