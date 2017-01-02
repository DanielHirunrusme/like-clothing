var makeVideoPlayableInline = require('iphone-inline-video'),
	settings = require('modules/settings'),
	mousewheel = require('jquery-mousewheel')($);

var scrollLoop = module.exports = function( el ) {
		var $el = $( el ),
		$window = $( window ),
		$videoScroll = $el.find('.video-scroll'),
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
		st;

		console.log('%c[scroll-loop module init]', 'color:blue;');
		
		scrollLoop.getName = function(){
			return 'hi';
		}
		
		scrollLoop.setScrollContainer = function(scrollContainer){
			$scrollContainer = scrollContainer;
		}
		
		scrollLoop.scroll = function(y) {
			
		}
	
		
		scrollLoop.fadeOverlay = function(scrollContainer, y) {
			st = y;
			
			//console.log('st ' +scrollContainer[0].scrollHeight);
			
			if(!scrollContainer.hasClass('looped')) {
				if(st < $window.height()) {
					$('.top-section.bottom-fixed').css('opacity', 0).removeClass('show');
					var op = (st / $window.height()) * 1;
					//console.log('op ' + op)
					$('#color-overlay').css('opacity', op);
					
					console.log('below window height');
					
				} else {
					//$('#color-overlay').css('opacity', 1);
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
			
			if(st >= scrollContainer[0].scrollHeight - ($window.height() * 2 ) ) {
				//console.log( ( $scrollContainer[0].scrollHeight - st  - $window.height() )/$window.height()  )
				//console.log( $scrollContainer[0].scrollHeight / (st + $window.height()) )
				//console.log($scrollContainer[0].scrollHeight);
				//console.log(st + $window.height());
				//console.log( ( $scrollContainer[0].scrollHeight - st  )/ $window.height()  )
				//console.log( ($scrollContainer[0].scrollHeight - st) / ( $scrollContainer[0].scrollHeight - $window.height()) )
				
				console.log('at end of page')
				
				var op = ( scrollContainer[0].scrollHeight - st  - $window.height() )/$window.height();
				
				console.log(op);
				
				$('#color-overlay').css('opacity', op);
				$('.top-section.bottom-fixed').addClass('show').css('opacity', 1 - op);
			}
		}
		
		
		scrollLoop.checkScrollPos = function(){
			clearInterval(scrollInt);
			var st = $scrollContainer.scrollTop();
			
			
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
				$('.wrapper').addClass('looped');
				$scrollContainer.animate({ scrollTop:0 }, 0)
				$scrollContainer.scrollTop(0);
				//$('.top-section.bottom-fixed').css('opacity', 0)
			}
		}
		
		/*
		function checkScrollPos(){
			clearInterval(scrollInt);
			var st = $scrollContainer.scrollTop();
			
			
			if(st < $window.height()) {
				$('.top-section.bottom-fixed').css('opacity', 0).removeClass('show');
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
				$('.wrapper').addClass('looped');
				$scrollContainer.animate({ scrollTop:0 }, 0)
				$scrollContainer.scrollTop(0);
				//$('.top-section.bottom-fixed').css('opacity', 0)
			}
		}
		*/
		
		/*
		function fadeOverlay(){
			var st = $scrollContainer.scrollTop();
			if(!$scrollContainer.hasClass('looped')) {
				if(st < $window.height()) {
				
					var op = (st / $window.height()) * 1;
					//console.log('op ' + op)
					$('#color-overlay').css('opacity', op);
				} else {
					//$('#color-overlay').css('opacity', 1);
				}
			} else {
				if( st < $window.height() * 2) {
				
					var op = st - $window.height() + (st / $window.height()) * 1;
					//console.log('op ' + op)
					$('#color-overlay').css('opacity', op);
					
				} else {
					//$('#color-overlay').css('opacity', 1);
				}
			}
			
			if(st >= $scrollContainer[0].scrollHeight - ($window.height() * 2 ) ) {
				//console.log( ( $scrollContainer[0].scrollHeight - st  - $window.height() )/$window.height()  )
				//console.log( $scrollContainer[0].scrollHeight / (st + $window.height()) )
				//console.log($scrollContainer[0].scrollHeight);
				//console.log(st + $window.height());
				//console.log( ( $scrollContainer[0].scrollHeight - st  )/ $window.height()  )
				//console.log( ($scrollContainer[0].scrollHeight - st) / ( $scrollContainer[0].scrollHeight - $window.height()) )
				var op = ( $scrollContainer[0].scrollHeight - st  - $window.height() )/$window.height();
				$('#color-overlay').css('opacity', op);
				$('.top-section.bottom-fixed').addClass('show').css('opacity', 1 - op);
			}
		}
		*/
		
		function startAutoScroll(){
			$('body').addClass('autoScroll');
		}
		
		function stopAutoScroll(){
			$('body').removeClass('autoScroll');
			setTimeout(function(){ $('body').removeClass('scrolling autoScroll'); }, 100);
			autoScroll = false;
			clearTimeout(autoScrollTimer);
			autoScrollTimer = setTimeout(function(){
				autoScroll = true;
			}, 10000);
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
				//return true;
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
		
		/*
		$window.on('mousewheel touchmove', function(event){
			
			
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
				return true;
			}
			
			
			//console.log(event.type)
			$('body').addClass('scrolling');
			
			clearTimeout($.data(this, 'timer'));
			  $.data(this, 'timer', setTimeout(function() {
				  $('body').removeClass('scrolling');
			     //do something
			  }, 250));
			  
			checkScrollPos()  
			stopAutoScroll();
		});
		*/
	
		
		
		
		function init(){
			
			
			
			setVideos();
			fadeOverlay();
			$('#video-container').fadeIn(6000);
			
			$scrollContainer.on('scroll', function(event) {
				event.stopPropagation();
				//console.log('scroll triggered')
				//var gradientTopPos = $('body').scrollTop();
			
				checkScrollPos();
				fadeOverlay();
			
			
			
				//console.log(event.deltaX)
			
			
			
			
			
			
			    watchVideos();
				$('body').addClass('scrolling');
			
				//stopAutoScroll();
			  
			  
			    //console.log(event.deltaX, event.deltaY, event.deltaFactor);
			});
			
			autoScrollTimer = setTimeout(function(){
				autoScroll = true;
			}, 6000);
			
			// Usage
			animLoop(function( deltaT ) {
				xPos -= .2;
				xListener -= .2;
				$('.video-scroll').css({
				    "-webkit-transform":"translate("+xPos+"px,0)",
				    "-ms-transform":"translate("+xPos+"px,0)",
				    "transform":"translate("+xPos+"px,0)"
				  });​
					
				  //console.log($window.width())
				  //console.log ($('video').eq(0).position().left)
				  if(autoScroll) {
					  //$('input').blur();
					  startAutoScroll();
					  checkScrollPos();
					  fadeOverlay();
				  	  $scrollContainer.scrollTop($scrollContainer.scrollTop() + 1);
					  //initLoad = false;
				  }
				  watchVideos();
				  
			    //elem.style.left = ( left += 10 * deltaT / 16 ) + "px";

			// optional 2nd arg: elem containing the animation
			} );
			
			$('.newsletter input').on('focus', inputFocus);
			
			$window.on('resize', winResize);
			
		}
		
		function inputFocus(){
			if(!$('.bottom-fixed').hasClass('show')) {
				
			} else {
				
			}
			$scrollContainer
		}
		
		function watchVideos(){
			
			//console.log( $('.video-1-clone').position().left )
			/*
			$('.video-holder').each(function(){
				if($(this).position().left + $(this).width() >= 0 && $(this).position().left <= $window.width() ) {
					$(this).find('video')[0].play();
				} else {
					//console.log($(this).find('video').attr('src'))
					$(this).find('video')[0].pause();
				}
			});
			
			if( $('.video-1-clone').position().left <= 0 ) {
				xPos = 0;
				
				$('.video-scroll').css({
				    "-webkit-transform":"translate("+xPos+"px,0)",
				    "-ms-transform":"translate("+xPos+"px,0)",
				    "transform":"translate("+xPos+"px,0)"
				  });​
				  
				
			}
			*/
			/*
			if(xPos < -vidScrollWidth ) {
				xPos = 0;
				xListener = 0;
				$videoScroll.append($('.video-holder').eq(0));
				
				for(var i=0; i<$('.video-holder').length; i++) {
					$('.video-holder').eq(i).css('left', ( $videoWidth * i) + 'px');
				}
				$('.video-holder').eq(1).find('video')[0].play();
				console.log('reset entire piece')
				return true;
			}
			
			if(xListener < -$videoWidth) {
				xListener = 0;
				var _left = Number( $('.video-holder').last().css('left').split('px').join('') ) + $videoWidth;
			
				$('.video-holder').eq(2).find('video')[0].play();
				$('.video-holder').eq(0).find('video')[0].pause();
				$('.video-holder').eq(0).css('left', _left + 'px')
				$videoScroll.append($('.video-holder').eq(0));
			}
			*/
			
			
		}
		
		function setVideos(){
			vidScrollWidth = 0;
			$('.video-holder').each(function(){
				$(this).css('left', $(this).width() * $(this).index());
				vidScrollWidth += $(this).width(); 
			});
			$videoScroll.css('width', vidScrollWidth);
			//console.log(vidScrollWidth);
		}
		
		/*
		setInterval(function(){
			xPos-= 1;
			$('.video-scroll').css({
			    "-webkit-transform":"translate("+xPos+"px,0)",
			    "-ms-transform":"translate("+xPos+"px,0)",
			    "transform":"translate("+xPos+"px,0)"
			  });​
		}, 10);
		*/
		
	
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

		
		
		/*
		$('.video-scroll').velocity({
			translateZ: 0, // Force HA by animating a 3D property
		    translateX: "-10000px"
		}, {
		    
			duration:100000,
		    easing: "linear",
		});
		*/
		
		function winResize(){
			$videoWidth = $('.video-holder').width();
			setVideos();
		}
		
		if(!settings.isMobile) {
			init();
		}
		
};
  