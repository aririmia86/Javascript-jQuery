/**
* Module Dependencies
*/

import $ from 'jquery'
import page from 'page'

$('#app-body')
	.find('form')
	.submit(function (ev) {
		ev.preventDefault();

		// This es el elemento form del DOM. Al rodearlo de
		// $ lo convertimos en un jQuery Object
		var busqueda = $(this)
			.find('input[type="text"]')
			.val();

		page (`/search?q=${busqueda}`)
		
	})