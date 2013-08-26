$(document).ready(function(){
	init();
	sliderBanner();
	receitas();
});

$(window).resize(function(){
});

function receitas() {
	$("#galeriaReceitas").mCustomScrollbar({
		scrollButtons:{
			enable: false
		},
		horizontalScroll: true,
		advanced:{
			autoExpandHorizontalScroll: true,
			updateOnContentResize: true
		},
		mouseWheel: false
	});
}


// BANNER
function sliderBanner(){
	$('#slideshow').cycle({
		fx:     'fade',
		speed:   370,
		timeout: 8000,
		pager:  '#nav',
		after: function(currSlideElement, nextSlideElement){
			var currentSlide = $(nextSlideElement).attr("id");
			animaSlide(currentSlide);
		},
		before: function(currSlideElement, nextSlideElement){
			var currentSlide = $(currSlideElement).attr("id");
			animaSlideSaida(currentSlide);
		},
		cleartypeNoBg: true,
		cleartype: !$.support.opacity
	});
}

function animaSlide(ele){
	switch(ele){
		case 'slide1': sliderUm('entrada');
		break;

		case 'slide2': sliderDois('entrada');
		break;

		case 'slide3': sliderTres('entrada');
		break;
	}
}

function animaSlideSaida(ele){
	switch(ele){
		case 'slide1': sliderUm('saida');
		break;

		case 'slide2': sliderDois('saida');
		break;

		case 'slide3': sliderTres('saida');
		break;
	}
}



function sliderUm(tipo){
	switch(tipo){
		case 'entrada':
		$('.sliderUm').find('.txtTem').animate({
			marginLeft: 0,
			opacity: 1
		}, 700, 'easeOutCubic');

		$(".sliderUm .liServicos").each(function(index){
			var ele = $(this);
			setTimeout(function(){
				ele.stop().animate({
				marginLeft: 30,
				opacity: 1
				}, 500, 'easeOutBack');
			}, 180 * index);
		});

		$('.sliderUm').find('.imagemSlider').delay(180).animate({
			right: 320,
			opacity: 1
		}, 700, 'easeOutCubic');

		break;

		case 'saida':
		$('.sliderUm').find('.txtTem').animate({
			marginLeft: -130,
			opacity: 0
		}, 500, 'easeOutBack');


		$(".sliderUm .liServicos").each(function(index){
			var ele = $(this);
			setTimeout(function(){
				ele.stop().animate({
				marginLeft: -20,
				opacity: 0
				}, 100, 'easeOutBack');
			}, 100 * index);
		});


		$('.sliderUm').find('.imagemSlider').delay(100).animate({
			right: 40,
			opacity: 0
		}, 500, 'easeOutBack');

		break;
	}
}


function sliderDois(tipo){
	switch(tipo){
		case 'entrada':
		$('.sliderDois').find('.txtslider').animate({
			left: 85,
			opacity: 1
		}, 700, 'easeOutCubic');

		$('.sliderDois').find('.imagemSlider').delay(180).animate({
			right: 10,
			opacity: 1
		}, 700, 'easeOutCubic');

		break;

		case 'saida':
		$('.sliderDois').find('.txtslider').animate({
			left: 0,
			opacity: 0
		}, 500, 'easeOutBack');

		$('.sliderDois').find('.imagemSlider').delay(100).animate({
			right: 40,
			opacity: 0
		}, 500, 'easeOutBack');

		break;
	}
}


function sliderTres(tipo){
	switch(tipo){
		case 'entrada':
		$('.sliderTres').find('.txtslider').animate({
			left: 130,
			opacity: 1
		}, 700, 'easeOutCubic');

		$('.sliderTres').find('.imagemSlider').delay(100).animate({
			right: 240,
			opacity: 1
		}, 700, 'easeOutCubic');

		break;

		case 'saida':
		$('.sliderTres').find('.txtslider').animate({
			left: 50,
			opacity: 0
		}, 500, 'linear');

		$('.sliderTres').find('.imagemSlider').delay(180).animate({
			right: 40,
			opacity: 0
		}, 500, 'linear');

		break;
	}
}