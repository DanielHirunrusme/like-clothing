var settings = require( "modules/settings" ),
	throttle = require("modules/throttle");


module.exports = function( el ) {
		var $el = $( el ),
		$window = $( window );
		
		function init(){
			$window.on('resize', winResize);
			//$('.wrapper').stop().fadeIn(3000);
			$('.wrapper').show().addClass('fade-in');
			
		}
		
		function winResize(){
			
			if( $window.height() * 1.5 < $window.width() ) {
				$('body').addClass('landscape-format');
			} else {
				$('body').removeClass('landscape-format')
			}
				
		}

		
		winResize();
		init();
		
};
  