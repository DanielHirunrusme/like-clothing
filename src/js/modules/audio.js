var settings = require( "modules/settings" ),
	throttle = require("modules/throttle"),
	Audio5js = require('audio5');


var audio = module.exports = function( el ) {
		var $el = $( el ),
		$window = $( window ),
		intro,
		introEnded = false,
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
		fadeInterval,
		init = false;
		init_1 = false, init_2 = false, init_3 = false;
		
		$el.on('click', toggleAudio);
		
		audio.init = function(){
			$window.on('resize', winResize);
			if(!settings.isMobile) {
				initAudio();
			}
		}
		
		function initAudio () {
			

			
		    intro = new Audio5js({
		      ready: function () {
		        this.load('assets/audio/intro.mp3');
		        this.play();
				init_1 = true;
				if(init_1 && init_2 && init_3) init = true;
				if(settings.isMute) this.volume(0);
		      }
		    });
			
			intro.on('ended', function () { introEnded = true; introAfter.play(); }, this);
			
		    introAfter = new Audio5js({
		      ready: function () {
		        this.load('assets/audio/intro-after.mp3');
				init_2 = true;
				if(init_1 && init_2 && init_3) init = true;
				if(settings.isMute) this.volume(0);
		      }
		    });
			
			introAfter.on('ended', function(){ introAfter.seek(0); introAfter.play() }, this);
			
		   credits = new Audio5js({
		      ready: function () {
		        this.load('assets/audio/credits.mp3');
				if(!settings.isMobile)this.play();
				init_3 = true;
				if(init_1 && init_2 && init_3) init = true;
				this.volume(0);
		      }
		    });
			
			credits.on('ended', function(){ credits.seek(0); credits.play() }, this);
		}
		
		function toggleAudio(){
			$el.toggleClass('active');
			
			if(!init && settings.isMobile) {
				initAudio();
				return false;
			} 
			
			
			
			if(!settings.isMute) {
				audioOn = false;
				settings.isMute = true;
				
				if(!settings.isMobile) {
					fadeOut();
				} else {
					intro.pause();
					introAfter.pause();
					credits.pause();
				}
				
			} else {
				audioOn = true;
				settings.isMute = false;
				
				if(!settings.isMobile) {
					fadeIn();
				} else {
					if(!introEnded) {
						intro.play();
					} else {
						introAfter.play();
					}
					
					//credits.play();
				}
				
			}
		}
		
		
		audio.setVolume = function(instance, _volume) {
				if(!init) return false;
				console.log('volume ' + _volume)
				if(!settings.isMute) clearInterval(fadeInterval);
				switch(instance) {
				case 'intro':
					introVol = _volume;
					console.log(settings.isMute)
					if(!settings.isMute) intro.volume(getVolPercent(_volume)); 
					break;
				case 'introAfter':
					introAfterVol = _volume;
					if(!settings.isMute) introAfter.volume(getVolPercent(_volume)); 
					break;
				case 'credits':
					creditsVol = _volume;
					if(!settings.isMute) credits.volume(getVolPercent(_volume)); 
					break;
				}
			
			//console.log('_volume ' + _volume);
		}
		
		function fadeIn() {
			if(settings.isMute) {
				return true;
			} 
			
			clearInterval(fadeInterval);
			
			var fadeInIntroVol = intro.volume() * 100,
				fadeInIntroAfterVol = introAfter.volume() * 100,
				fadeInCreditsVol = credits.volume() * 100;
			
            fadeInterval = setInterval(function() { 
				
				if(intro.volume() < introVol) {
					fadeInIntroVol += 1;
					//intro.volume(intro.volume() + 1)
				} else {
					fadeInIntroVol = introVol;
					//intro.volume(introVol)
				}	
			
				if(introAfter.volume() < introAfterVol) {
					//introAfter.volume(introAfter.volume() + 1)
					fadeInIntroAfterVol += 1;
				} else {
					//intro.volume(introAfterVol)
					fadeInIntroAfterVol = introAfterVol;
				}	
			
				if(credits.volume() < creditsVol) {
					//credits.volume(credits.volume() + 1)
					fadeInCreditsVol += 1;
				} else {
					//intro.volume(creditsVol)
					fadeInCreditsVol = creditsVol;
				}
			
				console.log(fadeInIntroVol);
				
				intro.volume(getVolPercent(fadeInIntroVol));
				introAfter.volume(getVolPercent(fadeInIntroAfterVol));
				credits.volume(getVolPercent(fadeInCreditsVol));
				
				if(fadeInIntroVol == introVol && fadeInIntroAfterVol == introAfterVol && fadeInCreditsVol == creditsVol) {
					//console.log('clear int')
					clearInterval(fadeInterval);
					return true;
				}	
			
			}, 16);
			
		}
		
		
		function fadeOut() {
			
			clearInterval(fadeInterval);
			
			var fadeIntroVol = intro.volume() * 100,
				fadeIntroAfterVol = introAfter.volume() * 100,
				fadeCreditsVol = credits.volume() * 100;
			
            fadeInterval = setInterval(function() { 
			
				if(fadeIntroVol > 0) {
					fadeIntroVol -= 1;
				} else {
					fadeIntroVol = 0;
				}	
			
				if(fadeIntroAfterVol  > 0) {
					fadeIntroAfterVol  -= 1;
				} else {
					fadeIntroAfterVol  = 0;
				}	
			
				if(fadeCreditsVol > 0) {
					fadeCreditsVol -= 1;
				} else {
					fadeCreditsVol = 0;
				}
			
				console.log( intro.volume() )
				intro.volume(getVolPercent(fadeIntroVol));
				introAfter.volume(getVolPercent(fadeIntroAfterVol));
				credits.volume(getVolPercent(fadeCreditsVol));
				
				if(fadeIntroVol == 0 && fadeIntroAfterVol == 0 && fadeCreditsVol == 0) {
					//console.log('clear int')
					clearInterval(fadeInterval);
					return true;
				}	
			
			}, 16);
			
			
		}
		
		function getVolPercent(_volume) {
			vol = _volume / 100;
			vol = vol > 100 ? 100 : vol;
			return vol;
		}
		
	
		
		function winResize(){
			
			if( $window.height() * 1.5 < $window.width() ) {
				$('body').addClass('landscape-format');
			} else {
				$('body').removeClass('landscape-format')
			}
				
		}

		
		
		
};
  