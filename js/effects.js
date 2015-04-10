$(document).ready(function() {

	$('.index-head').mouseenter(function(){
		$('.index-head img').attr('src', 'img/arrow-red.png');

	});
	
	$('.index-head').mouseleave(function(){
		$('.index-head img').attr('src', 'img/arrow.png');

	});

	$('.index-head').click(function(){
		 event.preventDefault();
    	var n = $(document).height();
    	$('html, body').animate({ scrollTop: 900 }, 800);

	});

	//NAV

})