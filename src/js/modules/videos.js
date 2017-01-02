var makeVideoPlayableInline = require('iphone-inline-video'),
	settings = require('modules/settings'),
	mousewheel = require('jquery-mousewheel')($);

var videos = module.exports = function( el ) {
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

		console.log('%c[video module init]', 'color:blue;');
		
		
		function winMouseMove(event) {
			//if(event)
			
			
			//check to make sure there is data to compare against
		    if (typeof(last_position.x) != 'undefined') {

		        //get the change from last position to this position
		        var deltaX = last_position.x - event.clientX,
		            deltaY = last_position.y - event.clientY;

		        //check which direction had the highest amplitude and then figure out direction by checking if the value is greater or less than zero
		        if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 0) {
		            //left
					console.log('moving left')
					xPos -= Math.abs(deltaX);
		        } else if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) {
		            //right
		        } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
		            //up
		        } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < 0) {
		            //down
		        }
		    }

		    //set the new last position to the current for next time
		    last_position = {
		        x : event.clientX,
		        y : event.clientY
		    };
			
			
		}
		
		
	
		
		
		
		function init(){
			
			if(settings.isMobile) {
				$('video').each(function () {
				    makeVideoPlayableInline(this);
				});
			}
			
			setVideos();
		
			$('#video-container').fadeIn(6000);
			

			if(!settings.isMobile){
				// Usage
				animLoop(function( deltaT ) {
					xPos -= .2;
					xListener -= .2;
					//$('.video-scroll').css('left', xPos);
					
					$('.video-scroll').css({
					    "-webkit-transform":"translate3d("+xPos+"px,0,0)",
					    "-ms-transform":"translate3d("+xPos+"px,0,0)",
					    "transform":"translate3d("+xPos+"px,0,0)"
					  });​
					
					  watchVideos();

				} );
			}
			
			
			//$('.newsletter input').on('focus', inputFocus);
			
			$window.on('resize', winResize);
			
		}
		
		function inputFocus(){
			if(!$('.bottom-fixed').hasClass('show')) {
				
			} else {
				
			}
			
		}
		
		function watchVideos(){
			
			//console.log( $('.video-1-clone').position().left )
			
			$('.video-holder').each(function(){
				if($(this).position().left + $(this).width() >= 0 && $(this).position().left <= $window.width() ) {
					if(!$(this).find('video').hasClass('playing')) {
						$(this).find('video')[0].play();
						console.log('play ' + $(this).find('video').attr('src'))
					}
					$(this).find('video').addClass('playing');
					
				} else {
					if($(this).find('video').hasClass('playing')){
						console.log('pause ' + $(this).find('video').attr('src'))
						$(this).find('video').removeClass('playing');
						$(this).find('video')[0].pause();
					}
					
				}
			});
			
			//$('#video-1').currentTime = $('#video-8')[0].currentTime;
			//console.log($('.video-1-clone').position().left)
			if( $('.video-1-clone').position().left <= 0 ) {
				console.log('loop videos')
				
				xPos = 0;
				xListener = 0;
				$('#video-1').currentTime = $('#video-8')[0].currentTime;
				$('.video-scroll').css({
				    "-webkit-transform":"translate("+xPos+"px,0)",
				    "-ms-transform":"translate("+xPos+"px,0)",
				    "transform":"translate("+xPos+"px,0)"
				  });​
				  
				
			}
			
		
			
			
		}
		
		
		$window.on('mousewheel touchmove', function(event){
			event.stopPropagation();
			
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
			
			watchVideos();

		});
		
		function setVideos(){
			vidScrollWidth = 0;
			$('.video-holder').each(function(){
				$(this).css('width', Math.floor($window.height() * 1.777)).css('left', Math.floor( $(this).width() * $(this).index()) );
				vidScrollWidth += $(this).width(); 
			});
			$videoScroll.css('width', vidScrollWidth);
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
			$videoWidth = $('.video-holder').width();
			setVideos();
		}
		

		init();
		
		
};
  