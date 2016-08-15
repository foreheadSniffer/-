;(function($) {

	$('#slideShow').on('slid.bs.carousel', function(e) {
		$('#slider-counter').text($(this).find('.active').index()+1);
	});

	$('#signup-dropdown').on('click', function() {
		$('#signup-modal').toggle();
	});

	$(document).on('click', function(e){
		if(!$(e.target).closest('#signup-modal:visible').length > 0 && $(e.target).closest('#signup-dropdown').length === 0) {
			$('#signup-modal').hide();
		}
	});



	function animatecontent(ele,modifier){
	      var sl = ele.scrollLeft();
	      ele.animate({scrollLeft: sl + (modifier * 120)}, 500, 'linear',function(){
	            if(hover){
	                animatecontent(ele,modifier);
	            }
	        });
	};

	var hover=false;
	$('.horizontal-slider .carousel-control').each(function(){
	    var modifier = ($(this).hasClass('right')) ? 1 : -1;
	    var sib = ('.slides');
	    $(this).hover(function() {
	        hover=true;
			$(this).siblings(sib).stop();
	      	animatecontent($(this).siblings(sib),modifier);     
		}, function() {
	        hover=false;
	        $(this).siblings(sib).stop();
	    });
	});

	$('.horizontal-slider').hover(function() {
		console.log($(this).find('a.left'));
		$(this).find('a.left').toggle();
	});

})(jQuery)