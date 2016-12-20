var settings = require( "modules/settings" ),
	throttle = require("modules/throttle");

	/**
	* @desc initialize all modules within barba-container
	*/
	function initializeModules() {
	  var modules = $('.barba-container').find( "[data-module-init]" );

	  for ( var i = 0; i < modules.length; i++ ) {
	    var el = modules[ i ];
	    var names = el.getAttribute( "data-module-init" ).split( " " );
	    var Module;

	    for ( var j = 0; j < names.length; j++ ) {
		      try {
		        Module = require( "modules/" + names[ j ] );
		      } catch ( e ) {
		        Module = false;
		        console.log( names[ j ] + " module does not exist." );
		      }
	      // Initialize the module with the calling element
	      if ( Module ) {
	        new Module( el );
	      }
	    }
	  }

	}


/**
 * Body manages Barba.js (page transitions, back and forth navigation) and the general page settings
 */


module.exports = function( el ) {
		var $el = $( el ),
		$window = $( window ),
		barbaTransition = 'normal';
	
		
		
		
		function init(){
			
			// detects mobile
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			 	settings.isMobile = true;
			} else {
				settings.isMobile = false;
			}
			
			settings.page = $('body').data('page');
			
			console.log('%c[BARBA]: initialized', 'text-decoration:underline; color:green')
			Barba.Pjax.start();
			
		}
		
		/**
		*	@desc set the tranition variable based on what link is clicked
		*/
		Barba.Dispatcher.on('linkClicked', function(HTMLElement, MouseEvent) {
		  	if(!$(HTMLElement).hasClass('news-link')) {
		  		barbaTransition = 'normal';
		  	} else {
		  		barbaTransition = 'news';
		  	}
		});
		

		/**
		*	@desc when the new page is ready, update the body class and attributes which then informs the page how to animate
		*/
		Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
			
			var first = $(location).attr('pathname');
			first.indexOf(1);
			first.toLowerCase();
			first = first.split("/")[1];
			
			if(first == '' || first == undefined || !first) first = 'home'; // if on root url then set to home
			
			settings.page = first;
			
			$('body').removeClass().addClass(first).attr('data-page', first);
			
			switchNav(currentStatus.url)
			
			//$('body').removeClass().addClass(settings.page);
			initializeModules();
			console.log('%c[BARBA]: new page ready', 'text-decoration:underline; color:green')
		});
		
		
		/**
		*	@desc changes the nav based on cross checking the url param
		* 	@param url: is the location url  
		*/
		function switchNav(url){
			
			$('.menu a').each(function(){
				if($(this).attr('href') == url) {
					$('.menu a.active').removeClass('active');
					$(this).addClass('active');
				}
			});
		}
		
		
		
		
		var FadeTransition = Barba.BaseTransition.extend({
		  start: function() {
		    /**
		     * This function is automatically called as soon the Transition starts
		     * this.newContainerLoading is a Promise for the loading of the new container
		     * (Barba.js also comes with an handy Promise polyfill!)
		     */

		    // As soon the loading is finished and the old page is faded out, let's fade the new page
		    Promise
		      .all([this.newContainerLoading, this.fadeOut()])
		      .then(this.fadeIn.bind(this));
		  },

		  fadeOut: function() {
			$('.wrapper').scrollTop(0);
			$('body').prepend('<div id="disable-scroll"></div>'); // adds an invisible div over everything until animation is finished
			return true;
		  },

		  fadeIn: function() {
		    /**
		     * this.newContainer is the HTMLElement of the new Container
		     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
		     * Please note, newContainer is available just after newContainerLoading is resolved!
		     */
			
			console.log('%c[BARBA]: normal transition', 'text-decoration:underline; color:green')
			  
		    var _this = this;
		    var $el = $(this.newContainer);
			var $main = $(this.oldContainer);
			
			var newHeight = 0, oldHeight = 0;
			
			for(var i=0; i<$el.find('main').children().length; i++) {
				//console.log( $el.find('main').children().eq(i).height() );
				newHeight += $el.find('main').children().eq(i).height();
			}
			
			for(var i=0; i<$main.find('main').children().length; i++) {
				//console.log( $el.find('main').children().eq(i).height() );
				oldHeight += $main.find('main').children().eq(i).height();
			}
			
			$main.addClass('animating');
			
		    $main.animate({ top: -oldHeight  }, settings.animationSpeed, "linear", function(){
		    	$('#disable-scroll').remove();
		    });
			
		    //$(this.oldContainer).hide();
			
			
		    $el.css({
		      visibility : 'visible',
		      top : oldHeight
		    });

		    $el.animate({ top: 0 }, settings.animationSpeed, "linear", function() {
		      /**
		       * Do not forget to call .done() as soon your transition is finished!
		       * .done() will automatically remove from the DOM the old Container
		       */

		      _this.done();
		    });
		  }
		});

		
		
		
		var NewsTransition = Barba.BaseTransition.extend({
		  start: function() {
		    /**
		     * This function is automatically called as soon the Transition starts
		     * this.newContainerLoading is a Promise for the loading of the new container
		     * (Barba.js also comes with an handy Promise polyfill!)
		     */

		    // As soon the loading is finished and the old page is faded out, let's fade the new page
		    Promise
		      .all([this.newContainerLoading, this.fadeOut()])
		      .then(this.fadeIn.bind(this));
		  },

		  fadeOut: function() {
			$('.wrapper').scrollTop(0);
			$('body').prepend('<div id="disable-scroll"></div>'); // adds an invisible div over everything until animation is finished
			return true;
		  },

		  fadeIn: function() {
		    /**
		     * this.newContainer is the HTMLElement of the new Container
		     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
		     * Please note, newContainer is available just after newContainerLoading is resolved!
		     */
			  
			console.log('%c[BARBA]: News transition', 'text-decoration:underline; color:green')

		    var _this = this;
		    var $el = $(this.newContainer);
			var $main = $(this.oldContainer);
			var $dummy = $('.dummy');
			var newHeight = 0, oldHeight = 0;
			
			$main.hide();
			
		    $el.css({
		      visibility : 'visible'
		    });
			
			for(var i=0; i<$el.find('main').children().length; i++) {
				//console.log( $el.find('main').children().eq(i).height() );
				newHeight += $el.find('main').children().eq(i).height();
			}
			
			for(var i=0; i<$main.find('main').children().length; i++) {
				//console.log( $el.find('main').children().eq(i).height() );
				oldHeight += $main.find('main').children().eq(i).height();
			}

			
			$('.news-link').addClass('disabled');
			$el.find('.news-article.active').find('.news-text').slideUp(0).slideDown(settings.animationSpeed/2);
			$el.find('.news-article.active').find('.news-link').removeClass('disabled');
		    
			
		    $el.animate({ top: 0 }, settings.animationSpeed, "linear", function() {
		      /**
		       * Do not forget to call .done() as soon your transition is finished!
		       * .done() will automatically remove from the DOM the old Container
		       */
				$('#disable-scroll').remove();
		      _this.done();
		    });
		  }
		});
		
		
		
		
	    /**
	    * loads the transition based on what page is loaded
	    */
		Barba.Pjax.getTransition = function() {
		 
			switch(barbaTransition) {
				case 'normal':
					return FadeTransition;
				break;
				
				case 'news':
					return NewsTransition;
				break;
				
			}
		  
		};

		
		
		init();
		
};
  