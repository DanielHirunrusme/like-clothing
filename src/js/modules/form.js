
var form = module.exports = function( ) {
	
	var $window = $(window);
	
	// sync input values
	$('input').on('keydown', function(){
		$('input.bottom-input').val( $('input.top-input').val() )
	});
	
	$window.on('mousewheel touchmove', function(event){
		//$('input').blur();
	});
	
};
