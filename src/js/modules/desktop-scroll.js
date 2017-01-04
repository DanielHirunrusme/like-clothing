var makeVideoPlayableInline = require('iphone-inline-video'),
	settings = require('modules/settings'),
	mousewheel = require('jquery-mousewheel')($),
	controlScroll = require("modules/control-scroll"),
	videos = require("modules/videos"),
	form = require("modules/form")

var desktopScroll = module.exports = function( el ) {
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
		$scrollContainer = $('.wrapper');

		console.log('%c[desktop module init]', 'color:blue;');
		
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
		
		$window.on('mousedown touchstart', function(event){
			$('body').addClass('mousedown');
			
			$window.on('mousemove', winMouseMove);
			
			stopAutoScroll();
		}).on('mouseup touchend', function(){
			$('body').removeClass('mousedown');
			$window.off('mousemove');
		});
		*/
		
		/*
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
		*/
		
		
		$window.on('mousewheel touchmove', function(event){
			//console.log('mousewheel')
			
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
		
		
		
		function onScroll(event) {
			var st = $('#wrapper').scrollTop();
			
			//desktop loop
			if(st >= $el.find('#scroller').height() - $window.height()) {
				$('#wrapper').scrollTop(0)
			}
			
			console.log(st)
			
			controlScroll.scroll( st );
		}

		
		function init(){
			//controlScroll.setScrollContainer( $('#') );
			$('#scroller').addClass('desktop');
			
			$scrollContainer.on('scroll', onScroll);
			$window.on('mousedown', winMouseDown).on('mousemove', winMove);
		}
		
		function winMouseDown(event) {
		
				console.log(event.target)
	
				var _x = event.pageX;
				var _y = event.pageY;
	
				if( (_x >= $('input').position().left) && (_x <= $('input').position().left + $('input').outerWidth()) && (_y >= $('input').position().top) && (_y <= $('input').position().top + $('input').outerHeight()) )
				{
					$scrollContainer.scrollTop(0);
					$('input.top-input').focus();
					setTimeout(function(){ $('input.top-input').focus() }, 100);
					console.log('pressed');
				}
			
		}
		
		function testOver(_x, _y, element, cursor) {
			//console.log(element)
			if( (_x >= $(element).position().left) && (_x <= $(element).position().left + $(element).outerWidth()) && (_y >= $(element).position().top) && (_y <= $(element).position().top + $(element).outerHeight()) )
			{
				$('body').addClass(cursor)
				$(element).addClass('over');
			} else{
				$('body').removeClass(cursor)
				$(element).removeClass('over');
			}
		}

		function winMove(event){
			var _x = event.pageX;
			var _y = event.pageY;

			testOver(_x, _y, $('input'), 'text');
			testOver(_x, _y, $('.button--submit'), 'pointer');
		}


		if(!settings.isMobile) {
			init();
		}
		
};
  