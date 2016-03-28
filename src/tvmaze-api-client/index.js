/**
* Module Dependencies
*/

import $ from 'jquery'

// Exportacion de funcion
export function getShows(fn) {
	$.ajax('http://api.tvmaze.com/shows', {
		success: function (shows, textStatus, xhr) {
			fn(shows)
		}
	})
}

export function searchShows(busqueda, fn) {
	$.ajax('http://api.tvmaze.com/search/shows', {
		data: { q: busqueda},
		success: function (res, textStatus, xhr){
			fn(res)
		}
	})
}

