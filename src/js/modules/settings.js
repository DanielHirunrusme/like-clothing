/**
 * Global settings shared by all modules
 * @type {Object}
 */

function checkMobile(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		return true;
	} else {
		return false;
	}
}



var settings = module.exports = {
	breakpoints: {
		xs: 481,
		s: 769,
		m: 1000,
		ml: 999,
		l: 1281,
		xl: 1441,
		xxl: 1921
	},
	siteURL:$('body').data('site-url'),
	scrollContainer: 0,
	animationSpeed: 400,
	animationType: "linear",
	animating: false,
	unique: true,
	scroller: null,
	isMute:false,
  ytPlayer: false,
  isMuteYT: false,
	isMobile: checkMobile(),
	page: '',
};

settings.isMobile = settings.isMobile;
settings.breakpoints = settings.breakpoints;
settings.animationSpeed = settings.animationSpeed;
settings.animationType = settings.animationType;
settings.scrollPos = settings.scrollPos;
settings.scrollContainer = settings.scrollContainer;
settings.animating = settings.animating;
settings.unique = settings.unique;
settings.isMute = settings.isMute;
settings.ytPlayer = settings.ytPlayer;
settings.isMuteYT = settings.isMuteYT;
settings.scroller = settings.scroller;
