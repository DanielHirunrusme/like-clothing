var makeVideoPlayableInline = require('iphone-inline-video'),
	settings = require('modules/settings'),
	mousewheel = require('jquery-mousewheel')($),
	AnimationFrame = require('animation-frame');

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
		st,
		animationFrame = new AnimationFrame();

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
			switchVideos();
			
			$('#video-container').fadeIn(6000);
			

			if(!settings.isMobile){
				// Usage
				(function animate() {
		            animationFrame.request(function() {
						render();
		                animate();
		            });
		        }());
			}
			
			
			//$('.newsletter input').on('focus', inputFocus);
			
			$window.on('resize', winResize);
			
		}
		
		function inputFocus(){
			if(!$('.bottom-fixed').hasClass('show')) {
				
			} else {
				
			}
			
		}
		
		function nextVideo(vidContainer) {
	
			var vidLength = $(vidContainer).find('video').length;
			
			for(var i=0; i<vidLength; i++) {
				if($(vidContainer).find('video').eq(i).hasClass('active')){
					$(vidContainer).find('video').eq(i).removeClass('active');
					
					var targ = i + 1 < vidLength ? i + 1 : 0;
					
					$(vidContainer).find('video').eq(targ)[0].play();
					$(vidContainer).find('video').eq(targ).addClass('active');
					break;
					//$(vidContainer).find('video').eq(i + 1)[0].currentTime = .01;
					
				}
			}
			
			$(vidContainer).find('video').each(function(){
				if($(this).hasClass('active')){
					var ind = $(this).index();
					console.log('index ' + ind);
					//$(this).removeClass('active');
					//$(vidContainer).find('video').eq(ind + 1).addClass('active');
				}
			});
		}
		
		function switchVideos(){
			$('video').each(function(){
				$(this).attr('data-loaded', 'not-loaded');
			});
			
			$('video').on("timeupdate", function(e) {
				var vid = $(this).get(0);
				if(vid.currentTime == 0) {
					$(this)[0].currentTime = 0.1;
					$(this)[0].pause();
					console.log('looped');
					nextVideo($(this).parent());
				}
			});
			
			$('video').bind('loadeddata', function(e) {
			  $(this).get(0).currentTime = 0.1;
			  console.log($(this).attr('data-loaded', 'loaded'))
			});
			

		}
		
		
		function watchVideos(){
			$('.video-holder').each(function(){
				if($(this).position().left + $(this).width() >= 0 && $(this).position().left <= $window.width() ) {
					if(!$(this).find('video').hasClass('playing')) {
						$(this).find('video')[0].play();
						//console.log('play ' + $(this).find('video').attr('src'))
					}
					$(this).find('video').addClass('playing');
					
				} else {
					if($(this).find('video').hasClass('playing')){
						//console.log('pause ' + $(this).find('video').attr('src'))
						$(this).find('video').removeClass('playing');
						//$(this).find('video')[0].pause();
					}
					
				}
			});
			
			//$('#video-1').currentTime = $('#video-10')[0].currentTime;
			
	
			
			if($('.video-1-clone').position().left <= 0) {
				xPos = 0;
				$('#video-container').scrollLeft(0);
			}
		
		}
		
		
		$window.on('mousewheel touchmove', function(event){
			event.stopPropagation();
			
			if(event.type == 'mousewheel') {
				if(event.deltaY <= 0) {
					xPos -= event.deltaY;
					
				}
				if(event.deltaX >= 0) {
					xPos += event.deltaX;
				}
				
				//console.log(event.deltaX )
				
				watchVideos();
				/*
				if(event.deltaY < 0) {
					xPos += event.deltaY;
					xListener += event.deltaY;
				}
			
				if(event.deltaX > 1) {
					xPos -= event.deltaX;
					xListener -= event.deltaX;
				}
				*/
			} else if(event.type == 'touchmove') {
				
			} else {
				//return true;
			}
			
			watchVideos();

		});
		
		var animationFrame = new AnimationFrame();
        
		


		function render(){
			xPos += .2;
			$('#video-container').scrollLeft(xPos);
			//watchVideos();
			/*
			$('.video-scroll').css({
			    "-webkit-transform":"translate("+xPos+"px,0)",
			    "-ms-transform":"translate("+xPos+"px,0)",
			    "transform":"translate("+xPos+"px,0)"});
			*/
		}
		
		function setVideos(){
			vidScrollWidth = 0;
			//$videoScroll.css('width', vidScrollWidth);
			//console.log(vidScrollWidth);
			
			$('.video-holder').each(function(){
				$(this).css('width', Math.floor($(window).height() * 1.745) ).css('left', $(this).width() * $(this).index());
				vidScrollWidth += $(this).width();
			});
	
	
	
			$('.video-scroll').css('width', vidScrollWidth);
		}
		

		function winResize(){
			$videoWidth = $('.video-holder').width();
			setVideos();
		}
		

		init();
		
		
};
  