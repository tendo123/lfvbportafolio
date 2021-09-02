$(document).ready(function(){
var acercaDe = $('#acerca-de').offset().top,
		habilidades = $('#habilidades').offset().top,
		trabajos = $('#trabajos').offset().top,
		contacto = $('#contacto').offset().top

	$('#btn-acerca-de').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop : 400
		},500);
	});

	$('#btn-habilidades').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop : habilidades
		},500);
	});

	$('#btn-trabajos').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop : trabajos
		},500);
	});

	$('#btn-contacto').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop : contacto
		},500);
	});

});
