var settings = require( "modules/settings" ),
	Audio5js = require('audio5');


var audioHover = module.exports = function( el ) {
		var $el = $( el ),
		$window = $( window ),
		file = $el.data('audio'),
		ready = false,
		playing = false,
		audio,
		audioVol = 100;
		
		$el.on('mouseover', elOver).on('mouseout', elOut);
		
		function elOver(){
			if(ready && !playing && !settings.isMute) {
				 audioVol = 100;
				 audio.volume(100);
				 audio.play();
				 playing = true;
			 }
		}
		
		function elOut(){
			//if(ready)
			fadeOut();
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
		
		function fadeOut() {
			
            fadeInterval = setInterval(function() { 
			
				if(audioVol > 0) {
					audioVol -= 1;
				} else {
					iaudioVol = 0;
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
  