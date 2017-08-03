var settings = require('modules/settings'),
	audio = require("modules/audio"),
	YouTubePlayer = require("youtube-player"),
	controlScroll = require("modules/control-scroll");

var youtube = module.exports = function( el ) {
		var $el = $( el ),
		$window = $( window ),
    isPlaying = false,
    isFirstTime = true;
		
		console.log('%c [youtube.js]', 'color:blue;');
		
		//AFQ0iO9NPnU
		player = YouTubePlayer('player', { 
			videoId: 'AFQ0iO9NPnU',
			playerVars: { 'autoplay': 0, 'controls': 1, 'rel' : 0, 'color': 'white', 'showinfo': 0 }
		});
		
    settings.ytPlayer = player;

		player.stopVideo();
		
		$window.on('resize', winPlayerResize);
		
		
		player.on('stateChange', function(event){
			console.log(event.data)
			
			switch(event.data) {
				case 0:
				//ended
          isPlaying = false;
					controlScroll.initAutoScroll();
          $('.preview').show();
					audio.fadeIn();
          isFirstTime = true;
				break;
				
				case 1:
				//playing
          isPlaying = true;
					controlScroll.removeAutoScroll();
          settings.isMuteYT = !settings.isMute ? false : true;
          if(isFirstTime) {
            isFirstTime = false;
            audio.fadeOut();
          } else {
            audio.muteAll();
          }
					
				break;
				
				case 2:
				//pause
          isPlaying = false;
					controlScroll.initAutoScroll();
          //console.log('audio is: ' + settings.isMute)
          if(!settings.isMuteYT) {
            audio.fadeIn();
          }
					//audio.fadeIn();
				break;
				
				case 3:
				//buffering
				break;
				
				case 5:
					//video cued
					player.playerVars = {'rel': 0};
					setPlayerActions();
					sizePlayer();
				break;
			}
			
		    // event.data 
		});
    
    youtube.stopYTVideo = function(){
      if(isPlaying) stopVideo();
    }
		
		function setPlayerActions(){
			$('.preview').on('click', playVideo);
		}
		
		function playVideo(){
      console.log('play video')
      player.seekTo(0);
			player.playVideo();
			$('.preview').fadeOut();
			controlScroll.stopAutoScroll();
		}
		
		function stopVideo(){
      
			player.stopVideo();
		}
		
		function sizePlayer(){
      $('#player-holder').css('height', $('#player').width() * .5625);
			$('#player').css('height', $('#player').width() * .5625);
			$('.youtube-container').css('height', $('#player').width() * .5625);
		}
		
		function winPlayerResize(){
      console.log('size player')
			sizePlayer();
		}
  	  	
			
};
  