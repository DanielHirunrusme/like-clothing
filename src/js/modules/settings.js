/**
 * Global settings shared by all modules
 * @type {Object}
 */


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
	isMobile: false,
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
