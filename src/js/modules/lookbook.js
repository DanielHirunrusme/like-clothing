var controlScroll = require("modules/control-scroll"),
	settings = require('modules/settings');

module.exports = function( el ) {
	
	var $el = $(el),
		$window = $(window),
		currSet = 0;
	
	
		init();
	
		function init() {
			$('.lookbook-block').on('mouseover', lookbookOver).on('mouseout', lookbookOut).on('click', lookbookClick);
			$window.on('resize', winResize);
			winResize();
			setMargins($('.lookbook-block').length-1, $('.lookbook-block').length-1);
		}
		
		function lookbookOver(e) {
			var $item = $(e.currentTarget);
			
			currSet = $item.data('set');
			
			$('.lookbook-block').addClass('hidden');
			$('.lookbook-block[data-set="'+ currSet +'"]').removeClass('hidden');
			$('.lookbook-block[data-set="'+ currSet +'"]').last().addClass('last-block');
			//console.log('over')
		}
		
		function lookbookOut(e) {
			//console.log('out')
			
			$('.lookbook-block').removeClass('hidden');
		}
		
		function setMargins(firstNum, lastNum) {
			
			var colCount = 0;
			
			for(var i=0; i<firstNum; i++) {
				if(colCount == 5) {
					//$('.lookbook-block').eq(i).addClass('no-margin-r');
				}
				
				console.log(colCount);
				colCount = colCount < 5 ? colCount + 1 : 0;
				
				
			}
			
			colCount = 0;
			
			for(var i=lastNum; i<$('.lookbook-block').length-1; i++) {
				if(colCount == 5) {
					//$('.lookbook-block').eq(i).addClass('no-margin-r');
				}
				
				console.log(colCount);
				colCount = colCount < 5 ? colCount + 1 : 0;
				
				
			}
		}
		
		function lookbookClick(e) {
			
			if(settings.isMobile) return true;
			
			var $item = $(e.currentTarget);
			currSet = $item.data('set');
			
			$('.lookbook-block.no-margin-r').removeClass('no-margin-r')
			$('.lookbook-block.zoomed').removeClass('zoomed').addClass('lookbook-thumb');
			$('.lookbook-block.first-image').removeClass('first-image');
			$('.lookbook-block[data-set="'+ currSet +'"]').addClass('zoomed').removeClass('lookbook-thumb');
			$('.lookbook-block[data-set="'+ currSet +'"]').eq(1).addClass('first-image');
			
			console.log( 'index of clicked zoomed item' + $('.lookbook-block.zoomed').last().index() )
			
			var resetNumFirst = $('.lookbook-block.zoomed').eq(0).index();
			var resetNumLast = $('.lookbook-block.zoomed').last().index() + 1;
			var colCount = 0;
			
			var itemHeight = ($('.lookbook-block.zoomed.first-set-image').outerHeight() * $item.data('set-index')) + (($window.width() * .04) * $item.data('set-index'));
			var posTop = $('.lookbook-block.first-set-image.zoomed').position().top + itemHeight + $window.height();
			
			
			
			//var itemPos = $('.lookbook-block.lookbook-label.zoomed').position().top + $window.height() + itemHeight;
			
			var itemPos = $('#lookbook').position().top + $item.position().top + $window.height();
			
      if($item.data('set') == '1'){
        $('.lookbook-block[data-set="3"]').first().removeClass('xl-break')
      } else {
        $('.lookbook-block[data-set="3"]').first().addClass('xl-break')
      }
	
			
			console.log('item index ' + $item.index())
			
			setMargins(resetNumFirst, resetNumLast);
			
			controlScroll.animateScroll( itemPos )
			
			/*
			for(var i=0; i<resetNumFirst; i++) {
				if(colCount == 5) {
					$('.lookbook-block').addClass('no-margin-r');
				}
				
				colCount = colCount == 5 ? 0 : colCount + 1;
			}
			*/
			
			
			
			
		}
		
		function winResize(){
			//console.log('winresize')
			
      
      
      if($(window).width() >= 1500 && $window.width() < $window.width() - ($window.width() * .12)) {
        
      } else {
       // $('#lookbook').css('margin-left', '');
      }
      
			if($window.width() - ($window.width() * .12) >= 1500) {
				$('#lookbook-article').addClass('max-width');
        $('#lookbook').css('margin-left', '');
			} else {
				if($('#lookbook-article').hasClass('max-width')){
					$('#lookbook-article').removeClass('max-width');
          
				}
			}
      
      
		}
	
};
