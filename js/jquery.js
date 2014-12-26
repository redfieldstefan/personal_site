


$(document).ready(function(){


//Menu buttons

var navOpen = false;

	$('.menu-title').click(function(){
		if (!navOpen) {
			$('nav').animate({marginTop: '0'}, 500);
			$('.menu-trigger').css({display: "none"});
			$('.menu-trigger2').css({display: "inline"});
		
			navOpen = true;
		} else {
			$('nav').animate({marginTop: '-450'}, 500);
			$('.menu-trigger').css({display: "inline"});
			$('.menu-trigger2').css({display: "none"});
			navOpen = false;
		};
	});


 $('.menu li:nth-child(1)').click(function(event) {
    // Preventing default action of the event
    event.preventDefault();
    // Getting the height of the document
    var n = $(document).height();
    $('html, body').animate({ scrollTop: 0 }, 800);

    	
});

 $('.menu li:nth-child(2)').click(function(event) {
    // Preventing default action of the event
    event.preventDefault();
    // Getting the height of the document
    var n = $(document).height();
    $('html, body').animate({ scrollTop: 1975 }, 800);
	
});

  $('.menu li:nth-child(3)').click(function(event) {
    // Preventing default action of the event
    event.preventDefault();
    // Getting the height of the document
    var n = $(document).height();
    $('html, body').animate({ scrollTop: 2810 }, 800);
	
});

    $('.menu li:nth-child(4)').click(function(event) {
    // Preventing default action of the event
    event.preventDefault();
    // Getting the height of the document
    var n = $(document).height();
    $('html, body').animate({ scrollTop: 4700 }, 800);
	
});

    $('.menu li:nth-child(5)').click(function(event) {
    // Preventing default action of the event
    event.preventDefault();
    // Getting the height of the document
    var n = $(document).height();
    $('html, body').animate({ scrollTop: 5750 }, 800);
	
});


//Arrow Buttons

	$('#arrow1').click(function(event) {
    // Preventing default action of the event
    event.preventDefault();
    // Getting the height of the document
    var n = $(document).height();
    $('html, body').animate({ scrollTop: 1975 }, 7000);
//                                       |    |
//                                       |    --- duration (milliseconds) 
//                                       ---- distance from the top
});

	$('#arrow2').click(function(event){
		event.preventDefault();
		var n = $(document).height();
		$('html, body').animate({scrollTop: 2810}, 2000);
	});

	$('#arrow3').click(function(event){
		event.preventDefault();
		var n = $(document).height();
		$('html, body').animate({scrollTop: 4700}, 7000);
	});

	$('#arrow4').click(function(event){
		event.preventDefault();
		var n = $(document).height();
		$('html, body').animate({scrollTop: 5750}, 4000);
	});



//Work Panels

	var panelOneOpen=false;
	var panelTwoOpen=false;
	var panelThreeOpen=false;
	

$('#TCG-Panel').click(function(event){

	if(!panelOneOpen){	
		$("#TCG-Panel").animate({ marginLeft: '0'}, 500);
		$("#RB-Panel").animate({ marginLeft: '100'}, 500);
		$("#Orbana-Panel").animate({ marginLeft: '200'}, 500);
		panelOneOpen = true;
		panelTwoOpen = false;
		panelThreeOpen = false;
	
		}

	else {
		$("#TCG-Panel").animate({ marginLeft: '-950'}, 500);
		$("#RB-Panel").animate({ marginLeft: '100'}, 500);
		$("#Orbana-Panel").animate({ marginLeft: '200'}, 500);
		panelOneOpen = false;
		panelTwoOpen = true;
		panelThreeOpen= true;
		
		};
	});

$('#RB-Panel').click(function(event){
		

		if(!panelTwoOpen){
		$("#TCG-Panel").animate({ marginLeft: '-950'}, 500);
		$("#RB-Panel").animate({ marginLeft: '100'}, 500);
		$("#Orbana-Panel").animate({ marginLeft: '200'}, 500);
		panelOneOpen=false;
		panelTwoOpen=true;
		panelThreeOpen=false;
		}
		else {
		$("#TCG-Panel").animate({ marginLeft: '-950'}, 500);
		$("#RB-Panel").animate({ marginLeft: '-850'}, 500);
		$("#Orbana-Panel").animate({ marginLeft: '200'}, 500);
		panelOneOpen = false;
		panelTwoOpen=false;
		panelThreeOpen= true;

		}
	});

$('#Orbana-Panel').click(function(event){
		if (!panelThreeOpen) {
		$("#TCG-Panel").animate({ marginLeft: '-950'}, 500);
		$("#RB-Panel").animate({ marginLeft: '-850'}, 500);
		$("#Orbana-Panel").animate({ marginLeft: '200'}, 500);

		panelThreeOpen = true;
		}
		else{
			$("#TCG-Panel").animate({ marginLeft: '-950'}, 500);
			$("#RB-Panel").animate({ marginLeft: '-850'}, 500);
			$("#Orbana-Panel").animate({ marginLeft: '-750'}, 500);

			panelOneOpen = false;
			panelTwoOpen=false;
			panelThreeOpen = false;
		}
	});



//Projects panels

	var panelOneOpen=false;
	var panelTwoOpen=false;
	var panelThreeOpen=false;
	

$('#seedToTableSisters').click(function(event){

	if(!panelOneOpen){	
		$("#seedToTableSisters").animate({ marginLeft: '200'}, 500);
		$("#mixAndStones").animate({ marginLeft: '86%'}, 500);
		$("#bareFrontier").animate({ marginLeft: '93%'}, 500);
		panelOneOpen = true;
		panelTwoOpen = false;
		panelThreeOpen = false;
	
		}

	else {
		$("#seedToTableSisters").animate({ marginLeft: '79%'}, 500);
		$("#mixAndStones").animate({ marginLeft: '86%'}, 500);
		$("#bareFrontier").animate({ marginLeft: '93%'}, 500);
		panelOneOpen = false;
		panelTwoOpen = false;
		panelThreeOpen= false;
		
		};
	});

$('#mixAndStones').click(function(event){
		

		if(!panelTwoOpen){
		$("#seedToTableSisters").animate({ marginLeft: '200'}, 500);
		$("#mixAndStones").animate({ marginLeft: '300'}, 500);
		$("#bareFrontier").animate({ marginLeft: '93%'}, 500);
		panelOneOpen=false;
		panelTwoOpen=true;
		panelThreeOpen=false;
		}
		else {
		$("#seedToTableSisters").animate({ marginLeft: '200'}, 500);
		$("#mixAndStones").animate({ marginLeft: '86%'}, 500);
		$("#bareFrontier").animate({ marginLeft: '93%'}, 500);
		panelOneOpen = true;
		panelTwoOpen=false;
		panelThreeOpen= false;

		}
	});

$('#bareFrontier').click(function(event){
		if (!panelThreeOpen) {
		$("#seedToTableSisters").animate({ marginLeft: '200'}, 500);
		$("#mixAndStones").animate({ marginLeft: '300'}, 500);
		$("#bareFrontier").animate({ marginLeft: '400'}, 500);
		panelOneOpen = false
		panelTwoOpen =false
		panelThreeOpen = true;
		}
		else{
			$("#seedToTableSisters").animate({ marginLeft: '200'}, 500);
			$("#mixAndStones").animate({ marginLeft: '300'}, 500);
			$("#bareFrontier").animate({ marginLeft: '93%'}, 500);

			panelOneOpen = false;
			panelTwoOpen=true;
			panelThreeOpen = false;
		}
	});


})



