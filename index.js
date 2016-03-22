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
	// Elemento del DOM
	var header = document.getElementById('#app-header');
	// $header es un jQuery Object (Mas funcionalidades)
	var $header = $(header);

	var title = $('h1', header);
	var title = $('h1', $header[0]);
	console.log(title);
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