var settings = require( "modules/settings" ),
	Audio5js = require('audio5');


var audioHover = module.exports = function( el ) {
		var $el = $( el ),
		$window = $( window ),
		file = $el.data('audio'),
		ready = false,
		playing = false,
		audio,
		audioVol = 100,
		fadeInterval;
		
		$el.on('mouseover', elOver).on('mouseout', elOut);
		
		$('#audio').on('click', toggleAudio);
		
		function elOver(){
			if(ready && !playing && !settings.isMute) {
				 //fadeIn();
				 clearInterval(fadeInterval);
				 audioVol = 100;
				 audio.volume(100);
				 console.log('play SFX')
				 console.log(audioVol)
				 audio.seek(0);
				 audio.play();
			 }
		}
		
		function elOut(){
			//if(ready)
			playing = false;
			fadeOut();
		}
		
		function toggleAudio(){
			if(settings.isMute) {
				fadeOut();
			} else {
				fadeIn();
			}
		}
		
		function initAudio () {
			
			console.log( 'assets/audio/' + file )
			
		    audio = new Audio5js({
		      ready: function () {
				  ready = true;
				  this.load('assets/audio/' + file);
		        //this.play();
				//this.volume(0);
		      }
		    });
			
			audio.on('ended', function () { playing = false; }, this);

		}
		
		function fadeIn() {
			
			clearInterval(fadeInterval);
			
            fadeInterval = setInterval(function() { 
			
				if(audioVol < 100) {
					audioVol += 1;
				} else {
					audioVol = 100;
				}	
			
				
				audio.volume(getVolPercent(audioVol));
				
				if(audioVol == 100) {
					//console.log('clear int')
					clearInterval(fadeInterval);
					playing = true;
					return true;
				}	
			
			}, 16);
			
			
		}
		
		function fadeOut() {
			
			clearInterval(fadeInterval);
			
            fadeInterval = setInterval(function() { 
			
				if(audioVol > 0) {
					audioVol -= 1;
				} else {
					audioVol = 0;
				}	
			
				
				audio.volume(getVolPercent(audioVol));
				
				if(audioVol == 0) {
					//console.log('clear int')
					clearInterval(fadeInterval);
					playing = false;
					return true;
				}	
			
			}, 16);
			
			
		}
		
		function getVolPercent(_volume) {
			return _volume / 100;
		}
		
		
		initAudio();

		
};
  