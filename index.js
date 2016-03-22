// Se lanza una vez cargado todo el DOM, incluido imagenes y assets
// Puede tardar bastante
/*
window.onload = function () {
	alert('loaded');
}
*/

// Mejor usar esta porque se lanza antes, funcion de jQuery
// Otras formas
//$(document).ready(function(){})
//$().ready(function(){})
$(function(){
	// Mejor hacer seleccion con ID ya que internamente jQuery
	// llama a getElemByID y luego buscar el elemento que
	// necesitamos. Es mas rapido que
	//$('#app-header h1')
	$('#app-header').find('h1');

	// Creacion de elementos con jQuery
	var $a = $('<a>', {
		href: 'http://platzi.com',
		target: '_blank',
		html: 'Ir a Platzi'
	})
	$('#app-body').append($a);

	// Metodo Getter (opera sobre el primer elemento, aunque
	// haya mas en la seleccion)
	console.log($a.attr('href'));

	// Metodo Setter (opera sobre todos los elementos, si hay
	// mas de uno en la seleccion)
	$a.attr('href', 'http://www.google.com')
	console.log($a.attr('href'));

	var $h1 = $('h1');

	$h1.addClass('danger');

	setTimeout(function() {
		$h1.toggleClass('danger');
	}, 1500);

	// No es lo mismo un jQuery Object que un elemento del DOM
	var $h1 = $('h1');
	var $h1b = $('h1');
	console.log('$h1 === $h1b: ', $h1 === $h1b);
	console.log('$h1[0] === $h1b[0]: ', $h1[0] === $h1b[0]);

	var $h1 = $('h1');
	$h1.css({
		'font-size': '70px'
	});
})

// Si hay prototype y jQuery se pueden pisar entre ellos
// Se arregla asi
/*
$.noConflict();
jQuery(document).ready(function($){
	$ //contexto de jQuery
})
$ //contexto de Prototype
*/
//$() o jQuery() es lo mismo

// A una variable se le puede asignar una function
/*
var alerta = function (mensaje) {
	alert(mensaje);
}
alerta('Hola Platzi');
*/