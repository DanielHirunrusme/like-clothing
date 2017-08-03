var makeVideoPlayableInline = require('iphone-inline-video'),
	settings = require('modules/settings'),
	mousewheel = require('jquery-mousewheel')($),
	audio = require("modules/audio");

var controlScroll = module.exports = function( el ) {
		var $el = $( el ),
		$window = $( window ),
		$controlScrollcroll = $el.find('.video-scroll'),
		$videoWidth = $('.video-holder').width(),
		vidScrollWidth = 0,
		xListener = 0,
		xPos = 0,
		scrollInt,
		initLoad = true,
		autoScrollTimer,
		autoScroll = false,
		last_position = {},
		$scrollContainer = $('.wrapper'),
		st = 0,
		timerSpeed;

		console.log('%c[control-scroll module init]', 'color:blue;');
		
		controlScroll.setScrollContainer = function(scrollContainer) {
			$scrollContainer = scrollContainer;
		}
		
		controlScroll.scroll = function(y) {
			st = y;
			//console.log(st);
			this.fadeOverlay();
			this.checkScrollPos();
      
			clearTimeout($.data(this, 'timer'));
			  $.data(this, 'timer', setTimeout(function() {
				console.log('timer check fade')
	  			controlScroll.fadeOverlay();
	  			controlScroll.checkScrollPos();
			  }, 250));
		}
		
		controlScroll.scrollTo = function(y) {
			controlScroll.scroll(y);
			if(!settings.isMobile) {
				$scrollContainer.scrollTop(y);
			} else {
				settings.scroller.scrollTo(0, -y)
				//settings.scroller[0].scrollTo(y)
				//settings.scroller.scrollTo(y);
				//$scrollContainer.scrollTo(y);
			}
		}
		
		controlScroll.animateScroll = function(y) {
			console.log('animate scroll')
			controlScroll.scroll(y);
			if(!settings.isMobile) {
				$scrollContainer.animate({ scrollTop:y }, 500);
			} else {
				settings.scroller.animate({ scrollTop:-y }, 500);
			}
		}
		
		controlScroll.scrollMobile = function(scroller, y) {
			//scroller.scrollTo(0, y);
		}
		
		controlScroll.fadeOverlay = function() {
			//st = y;
			
			//console.log('st ' +scrollContainer[0].scrollHeight);
			
			if(!$scrollContainer.hasClass('looped')) {
				if(st < $window.height()) {
					$('.top-section.bottom-fixed').css('opacity', 0).removeClass('show');
					var op = (st / $window.height()) * 1;
					//console.log('op ' + op)
					$('#color-overlay').css('opacity', op);
					$('.bottom-section').css('opacity', 1);
					var volume = op.toFixed(2) * 100;
					
					
					audio.setVolume('intro', 100 - volume);
					audio.setVolume('introAfter', 100 - volume);
					audio.setVolume('credits', volume);
				
					
					
				} else {
					if(st >= $scrollContainer[0].scrollHeight - ($window.height() * 4 ) ) {
						//console.log( ( $scrollContainer[0].scrollHeight - st  - $window.height() )/$window.height()  )
						//console.log( $scrollContainer[0].scrollHeight / (st + $window.height()) )
						//console.log($scrollContainer[0].scrollHeight);
						//console.log(st + $window.height());
						//console.log( ( $scrollContainer[0].scrollHeight - st  )/ $window.height()  )
						//console.log( ($scrollContainer[0].scrollHeight - st) / ( $scrollContainer[0].scrollHeight - $window.height()) )
				
						//console.log('at end of page')
				
						var op = ( $scrollContainer[0].scrollHeight - st  - ( $window.height() )  )/$window.height() ;
				
				
						var volume = op.toFixed(2) * 100;
				
						audio.setVolume('intro', 100 - volume);
						audio.setVolume('introAfter', 100 - volume);
						audio.setVolume('credits', volume);
						
						var op_2 = ( $scrollContainer[0].scrollHeight - st  - ( $window.height() ) )/($window.height() * 2);
						
						//console.log(op);
						$('.bottom-section').css('opacity', op_2);
						$('#color-overlay').css('opacity', op);
						$('.top-section.bottom-fixed').addClass('show').css('opacity', 1 - op);
					} else {
						$('.bottom-section').css('opacity', 1);
						$('#color-overlay').css('opacity', 1);
						$('.top-section.bottom-fixed').removeClass('show').css('opacity', 0);
					}
				}
			} else {
				if( st < $window.height() * 2) {
				
					var op = st - $window.height() + (st / $window.height()) * 1;
					//console.log('op ' + op)
					$('#color-overlay').css('opacity', op);
					
					console.log('below two times')
					
					
				} else {
					//$('#color-overlay').css('opacity', 1);
				}
			}
			
			
		}
		
		
		controlScroll.checkScrollPos = function(){
			clearInterval(scrollInt);
			
			
			
			if(st < $window.height()) {
				
				//$('body').scrollTop($('body')[0].scrollHeight);
			}
			
			if($scrollContainer.hasClass('looped')) {
				$scrollContainer.removeClass('looped');
				
				if(st > $window.height()) {
					$scrollContainer.removeClass('looped');
					//$scrollContainer.scrollTop(0);
				} 
				
			}
			
			
			if(st >= $scrollContainer[0].scrollHeight - $window.height()) {
				$scrollContainer.addClass('looped');
				$scrollContainer.animate({ scrollTop:0 }, 0)
				$scrollContainer.scrollTop(0);
				st = 0;
				//$('.top-section.bottom-fixed').css('opacity', 0)
			}
		}
		
		
		
		
		
		controlScroll.stopAutoScroll = function(){
			
			clearInterval(scrollInt);
			$('body').removeClass('autoScroll');
			setTimeout(function(){ $('body').removeClass('scrolling autoScroll'); }, 100);
			autoScroll = false;
			clearTimeout(autoScrollTimer);
			autoScrollTimer = setTimeout(function(){
				autoScroll = true;
			}, timerSpeed);
		}
		
		function startAutoScroll(){
			$('body').addClass('autoScroll');
		}
		
		controlScroll.removeAutoScroll = function(){
			clearTimeout(autoScrollTimer);
			$('body').removeClass('scrolling autoScroll');
			setTimeout(function(){ $('body').removeClass('scrolling autoScroll'); }, 100);
			autoScroll = false;
		}
		
		controlScroll.initAutoScroll = function(){
			autoScrollTimer = setTimeout(function(){
				autoScroll = true;
			}, timerSpeed);
		}
		
		/*
		$window.on('mousedown touchstart', function(event){
			$('body').addClass('mousedown');
			
			$window.on('mousemove', winMouseMove);
			
			stopAutoScroll();
		}).on('mouseup touchend', function(){
			$('body').removeClass('mousedown');
			$window.off('mousemove');
		});
		*/
		

		
		
		$window.on('mousewheel touchmove touchstart', function(event){
			
			controlScroll.stopAutoScroll();
			
			if(event.type == 'mousewheel') {
				if(event.deltaY < 0) {
					xPos += event.deltaY;
					xListener += event.deltaY;
				}
			
				if(event.deltaX > 1) {
					xPos -= event.deltaX;
					xListener -= event.deltaX;
				}
			} else if(event.type == 'touchmove') {
				
			} else {
				//ereturn true;
			}
			
			
			//console.log(event.type)
			$('body').addClass('scrolling');
			
			clearTimeout($.data(this, 'timer'));
			  $.data(this, 'timer', setTimeout(function() {
				  $('body').removeClass('scrolling');
				  
			     //do something
			  }, 250));
			  
			//checkScrollPos()  
			//stopAutoScroll();
		});

	
		controlScroll.init = function(){
			
			audio.init();
			winResize();
			
			timerSpeed = settings.isMobile ? 6000 : 30000;
			$window.on('resize', winResize);
			
			autoScrollTimer = setTimeout(function(){
				autoScroll = true;
				console.log('set autoscroll true')
			}, timerSpeed);
			
			
			// Usage
			animLoop(function( deltaT ) {
				  //console.log('animLoop')
					
				  //console.log($window.width())
				  //console.log ($('video').eq(0).position().left)
				  if(autoScroll) {
					  st+= .2;
					  controlScroll.scrollTo(st);
				  }
				  //watchcontrolScroll();
				  
			    //elem.style.left = ( left += 10 * deltaT / 16 ) + "px";

			// optional 2nd arg: elem containing the animation
			} );
		}
		
		
	


		
		function setcontrolScroll(){
			vidScrollWidth = 0;
			$('.video-holder').each(function(){
				$(this).css('left', $(this).width() * $(this).index());
				vidScrollWidth += $(this).width(); 
			});
			$controlScrollcroll.css('width', vidScrollWidth);
			//console.log(vidScrollWidth);
		}
		

		
	
		function animLoop( render, element ) {
		    var running, lastFrame = +new Date;
		    function loop( now ) {
		        // stop the loop if render returned false
		        if ( running !== false ) {
		            requestAnimationFrame( loop, element );
		            running = render( now - lastFrame );
		            lastFrame = now;
		        }
		    }
		    loop( lastFrame );
		}


		
		function winResize(){
			//$videoWidth = $('.video-holder').width();
			//setcontrolScroll();
			$('.top-section.bottom-fixed').css('width', $('.top-section.landing-section').width());
		}
		
		controlScroll.init();
		
};
  