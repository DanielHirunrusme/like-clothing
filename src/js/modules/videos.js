var makeVideoPlayableInline = require('iphone-inline-video'),
	mousewheel = require('jquery-mousewheel')($);

module.exports = function( el ) {
		var $el = $( el ),
		$window = $( window ),
		$videoScroll = $el.find('.video-scroll'),
		$videoWidth = $('.video-holder').width(),
		vidScrollWidth = 0,
		xListener = 0,
		xPos = 0,
		scrollInt,
		autoScroll = true,
		$scrollContainer = $('.wrapper');

		console.log('%c[video module init]', 'color:blue;');
		
		$('video').each(function () {
		    makeVideoPlayableInline(this);
		});
		
		function checkScrollPos(){
			clearInterval(scrollInt);
			var st = $scrollContainer.scrollTop();
			
			
			if(st <= 0) {
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
				$scrollContainer.scrollTop(0);
				$('.top-section.bottom-fixed').css('opacity', 0)
			}
		}
		
		function fadeOverlay(){
			var st = $scrollContainer.scrollTop();
			if(!$scrollContainer.hasClass('looped')) {
				if(st < $window.height()) {
				
					var op = (st / $window.height()) * 1;
					console.log('op ' + op)
					$('#color-overlay').css('opacity', op);
				} else {
					//$('#color-overlay').css('opacity', 1);
				}
			} else {
				if( st < $window.height() * 2) {
				
					var op = st - $window.height() + (st / $window.height()) * 1;
					console.log('op ' + op)
					$('#color-overlay').css('opacity', op);
					
				} else {
					//$('#color-overlay').css('opacity', 1);
				}
			}
			
			if(st >= $scrollContainer[0].scrollHeight - ($window.height() * 2 ) ) {
				console.log( ( $scrollContainer[0].scrollHeight - st  - $window.height() )/$window.height()  )
				//console.log( $scrollContainer[0].scrollHeight / (st + $window.height()) )
				//console.log($scrollContainer[0].scrollHeight);
				//console.log(st + $window.height());
				//console.log( ( $scrollContainer[0].scrollHeight - st  )/ $window.height()  )
				//console.log( ($scrollContainer[0].scrollHeight - st) / ( $scrollContainer[0].scrollHeight - $window.height()) )
				var op = ( $scrollContainer[0].scrollHeight - st  - $window.height() )/$window.height();
				$('#color-overlay').css('opacity', op);
				$('.top-section.bottom-fixed').css('opacity', 1 - op);
			}
		}
		
		$scrollContainer.on('mousewheel', function(event) {
			
			
			//var gradientTopPos = $('body').scrollTop();
			autoScroll = false;
			checkScrollPos();
			fadeOverlay();
			
	
			
			
			if(event.deltaY < 0) {
				xPos += event.deltaY;
				xListener += event.deltaY;
			}
			
			if(event.deltaX < 0) {
				xPos += event.deltaX;
				xListener += event.deltaX;
			}
			
		    watchVideos();
			$('body').addClass('scrolling');
			
			clearTimeout($.data(this, 'timer'));
			  $.data(this, 'timer', setTimeout(function() {
				  $('body').removeClass('scrolling');
			     //do something
			  }, 250));
			  
			  
		    //console.log(event.deltaX, event.deltaY, event.deltaFactor);
		});
		
		function init(){
			setVideos();
			fadeOverlay();
			$('#video-container').fadeIn(6000);
			// Usage
			animLoop(function( deltaT ) {
				xPos -= 1;
				xListener -= 1;
				$('.video-scroll').css({
				    "-webkit-transform":"translate("+xPos+"px,0)",
				    "-ms-transform":"translate("+xPos+"px,0)",
				    "transform":"translate("+xPos+"px,0)"
				  });​
					
				  //console.log($window.width())
				  //console.log ($('video').eq(0).position().left)
				  if(autoScroll) {
					  checkScrollPos();
				  	$('body').scrollTop($('body').scrollTop() + 1);
				  }
				  watchVideos();
				  
			    //elem.style.left = ( left += 10 * deltaT / 16 ) + "px";

			// optional 2nd arg: elem containing the animation
			} );
			
			$window.on('resize', winResize);
			
			
		}
		
		function watchVideos(){
			
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
		
		init();
};
  