


$(document).ready(function(){

	$('.small-arrow-up').click(function(event){
		event.preventDefault();
		var n = $(document).height();
		$('html, body').animate({scrollTop: 0}, 1000);
	});

	$('#arrow1').click(function(event) {
    // Preventing default action of the event
    event.preventDefault();
    // Getting the height of the document
    var n = $(document).height();
    $('html, body').animate({ scrollTop: 1925 }, 7000);
//                                       |    |
//                                       |    --- duration (milliseconds) 
//                                       ---- distance from the top
});

	$('#arrow2').click(function(event){
		event.preventDefault();
		var n = $(document).height();
		$('html, body').animate({scrollTop: 2775}, 2000);
	});

	$('#arrow3').click(function(event){
		event.preventDefault();
		var n = $(document).height();
		$('html, body').animate({scrollTop: 4675}, 7000);
	});

	$('#arrow4').click(function(event){
		event.preventDefault();
		var n = $(document).height();
		$('html, body').animate({scrollTop: 5750}, 4000);
	});



$('#TCG-Panel').click(function(event){
		$("#TCG-Panel").animate({ marginLeft: '75'}, 500);
		$("#RB-Panel").animate({ marginLeft: '225'}, 500);
		$("#Orbana-Panel").animate({ marginLeft: '375'}, 500);
		
	});

$('#RB-Panel').click(function(event){
		$("#TCG-Panel").animate({ marginLeft: '-773'}, 500);
		$("#RB-Panel").animate({ marginLeft: '225'}, 500);
		$("#Orbana-Panel").animate({ marginLeft: '375'}, 500);
		
	});

$('#Orbana-Panel').click(function(event){
		$("#TCG-Panel").animate({ marginLeft: '-900'}, 500);
		$("#RB-Panel").animate({ marginLeft: '-750'}, 500);
		$("#Orbana-Panel").animate({ marginLeft: '245'}, 500);
		
	});



})



