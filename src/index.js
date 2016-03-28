/**
* Module Dependencies
*/

import $ from 'jquery'
import page from 'page'
import { getShows, searchShows } from './tvmaze-api-client'
import renderShows from './render'
import $container from './container'
import './search-form'
import qs from 'qs'

page ('/', function (ctx, next) {
	$container.find('.tv-show').remove();
	if(!localStorage.shows) {
		getShows(function  (shows) {
			$container.find('.loader').remove();
			// En localStorage se guardan Strings
			// Conversion de JSON a String
			localStorage.shows = JSON.stringify(shows);
			renderShows(shows);
		})
	} else {
		// Conversion de String a JSON
		renderShows(JSON.parse(localStorage.shows));
	}
})

page('/search', function(ctx, next) {
	$container.find('.tv-show').remove();
	var $loader = $('<div class="loader"></div>');
	$loader.appendTo($container);
	const busqueda = qs.parse(ctx.querystring)
	searchShows(busqueda.q, function (res) {
		$loader.remove();
		// map llama a la función callback provista
		// una vez por elemento de un array, en orden,
		// y construye un nuevo array con los resultados
		var shows = res.map(function (element) {
			return element.show;
		})
		renderShows(shows);
	})
})

page()