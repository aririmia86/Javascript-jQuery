/**
* Module Dependencies
*/

import $ from 'jquery'

var $container = $('#app-body').find('.tv-shows')

// Burbujeo de eventos para capturar los eventos sobre los
// botones de me gusta
$container.on('click', 'button.like', function  (argument) {
	// This en este contexto es el boton sobre el que se
	// hizo like
	var $this = $(this);
	// Animacion con jQuery
	//$this.animate({'fontSize': '30px'},'fast');
	// Closest busca en el DOM el elemento padre que cumple
	// la condicion
	$this.closest('.tv-show').toggleClass('liked');
});

export default $container