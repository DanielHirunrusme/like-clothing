var settings = require( "modules/settings" ),
	throttle = require("modules/throttle"),
	controlScroll = require("modules/control-scroll"),
	videos = require("modules/videos"),
	form = require("modules/form")


module.exports = function( el ) {
		var $el = $( el ),
		$window = $( window ),
		myScroll,
		position;


		//console.log(videos.getName())


		function updatePosition () {
		
			//mobile loop
			if(-this.y >= $el.find('#scroller').height() - $window.height()) {
				this.scrollTo(0, 0);
			}
			
			var st = -this.y;
			
			
			controlScroll.scroll(st);
			
		
		
		}

		function attachScroller() {
			//position = document.getElementById('position');
			
			myScroll = new IScroll('#wrapper', { 
				probeType: 3, 
				scrollbars: 'custom',
				fadeScrollbars: true,
				bounce: false,
				mouseWheel: true,
				scrollbarClass: 'scrollbar',
				deceleration:0.002
			});
			
			settings.scroller = myScroll;
			
			//console.log(myScroll);

			myScroll.on('scroll', updatePosition);
			myScroll.on('scrollEnd', updatePosition);
		}
		

		

		//document.addEventListener('DOMContentLoaded', loaded, false);
		
		function init(){
			
			console.log('%c[mobile-scroll module init]', 'color:green')
			
		
			document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
			
			controlScroll.setScrollContainer($('#wrapper'));
			attachScroller();
			
			$window.on('touchstart', touchStart);
			
			$window.on('resize', winResize);
			
			setTimeout(function(){
				controlScroll.scrollMobile(myScroll, -200)
				//myScroll.scrollTo(0, -200)
			}, 2000);
		}
		
		
		function touchStart(event) {
			console.log(event.target)
	
			var _x = event.originalEvent.touches[0].pageX;
			var _y = event.originalEvent.touches[0].pageY;
	
			if( (_x >= $('input').position().left) && (_x <= $('input').position().left + $('input').outerWidth()) && (_y >= $('input').position().top) && (_y <= $('input').position().top + $('input').outerHeight()) )
			{
				myScroll.scrollTo(0, 0);
				$('input.top-input').focus();
				console.log('pressed');
			}
		}
		
		function winResize(){
			
			$('.top-section').css('height', $window.height());
			
			if( $window.height() * 1.5 < $window.width() ) {
				$('body').addClass('landscape-format');
			} else {
				$('body').removeClass('landscape-format')
			}
				
		}

		
		//winResize();
		
		if(settings.isMobile) {
			winResize();
			init();
		}
		
		
};
  