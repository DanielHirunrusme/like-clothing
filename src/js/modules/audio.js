var settings = require( "modules/settings" ),
	throttle = require("modules/throttle"),
	Audio5js = require('audio5');


var audio = module.exports = function( el ) {
		var $el = $( el ),
		$window = $( window ),
		intro,
		audioOn = true,
		introAfter,
		vol = 100,
		credits,
		introVol  = 100,
		introAfterVol = 100,
		creditsVol = 0,
		introVolTemp  = 100,
		introAfterVolTemp = 100,
		creditsVolTemp = 0,
		fadeInterval;
		
		$el.on('click', toggleAudio);
		
		audio.init = function(){
			$window.on('resize', winResize);
			initAudio();
		}
		
		function initAudio () {
		    intro = new Audio5js({
		      ready: function () {
		        this.load('assets/audio/intro.mp3');
		        this.play();
				this.volume(0);
		      }
		    });
			
			intro.on('ended', function () { introAfter.play(); }, this);
			
		    introAfter = new Audio5js({
		      ready: function () {
		        this.load('assets/audio/intro-after.mp3');
				this.volume(0);
		      }
		    });
			
			introAfter.on('ended', function(){ introAfter.seek(0); introAfter.play() }, this);
			
		   credits = new Audio5js({
		      ready: function () {
		        this.load('assets/audio/credits.mp3');
				this.play();
				this.volume(0);
		      }
		    });
			
			credits.on('ended', function(){ credits.seek(0); credits.play() }, this);
		}
		
		function toggleAudio(){
			$el.toggleClass('active');
			
			if(audioOn) {
				audioOn = false;
				fadeOut();
			} else {
				audioOn = true;
				fadeIn();
			}
		}
		
		
		audio.setVolume = function(instance, _volume) {
			
				switch(instance) {
				case 'intro':
					introVol = _volume;
					//if(audioOn) intro.volume(getVolPercent(_volume)); 
					break;
				case 'introAfter':
					introAfterVol = _volume;
					//if(audioOn) introAfter.volume(getVolPercent(_volume)); 
					break;
				case 'credits':
					creditsVol = _volume;
					//if(audioOn) credits.volume(getVolPercent(_volume)); 
					break;
				}
			
			//console.log('_volume ' + _volume);
		}
		
		function fadeIn() {
			
            fadeInterval = setInterval(function() { 
				
				if(intro.volume() < introVol) {
					intro.volume(intro.volume() + 1)
				} else {
					intro.volume(introVol)
				}	
			
				if(introAfter.volume() < introAfterVol) {
					introAfter.volume(introAfter.volume() + 1)
				} else {
					intro.volume(introAfterVol)
				}	
			
				if(credits.volume() < creditsVol) {
					credits.volume(credits.volume() + 1)
				} else {
					intro.volume(creditsVol)
				}
			
				//console.log(introAfterVol)
				//intro.volume(getVolPercent(introVol));
				//introAfter.volume(getVolPercent(introAfterVol));
				//credits.volume(getVolPercent(creditsVol));
				
				if(intro.volume() == introVol && introAfter.volume() == introAfterVol && credits.volume() == creditsVol) {
					//console.log('clear int')
					clearInterval(fadeInterval);
					return true;
				}	
			
			}, 16);
			
		}
		
		
		function fadeOut() {
			
            fadeInterval = setInterval(function() { 
			
				if(introVol > 0) {
					introVol -= 1;
				} else {
					introVol = 0;
				}	
			
				if(introAfterVol > 0) {
					introAfterVol -= 1;
				} else {
					introAfterVol = 0;
				}	
			
				if(creditsVol > 0) {
					creditsVol -= 1;
				} else {
					creditsVol = 0;
				}
			
				//console.log(introAfterVol)
				intro.volume(getVolPercent(introVol));
				introAfter.volume(getVolPercent(introAfterVol));
				credits.volume(getVolPercent(creditsVol));
				
				if(introVol == 0 && introAfterVol == 0 && creditsVol == 0) {
					//console.log('clear int')
					clearInterval(fadeInterval);
					return true;
				}	
			
			}, 16);
			
			
		}
		
		function getVolPercent(_volume) {
			return _volume / 100;
		}
		
	
		
		function winResize(){
			
			if( $window.height() * 1.5 < $window.width() ) {
				$('body').addClass('landscape-format');
			} else {
				$('body').removeClass('landscape-format')
			}
				
		}

		
		
		
};
  