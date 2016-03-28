/**
* Module Dependencies
*/

import $ from 'jquery'
import $container from '../container'

var template = `<article class="tv-show"> 
				<div class="left img-container"> 
					<img src=":img:" alt=":img alt:">
				</div>
				<div class="right info">
					<h1>:name:</h1>
					<p>:summary:</p>
					<button class="like">Heart</button>
				</div>
			</article>`

// Si no hay mas funciones para exportar se pone default
export default function renderShows (shows) {
	$container.find('.loader').remove();
	// forEach recibe por parametro una funcion que se
	// llama por cada elemento
	shows.forEach(function (show){
		var article = template
			.replace(':name:', show.name)
			.replace(':img:', show.image ? show.image.medium : '')
			.replace(':summary:', show.summary)
			.replace(':img alt:', show.name + " Logo");
		// Conversion a jQuery Object
		var $article = $(article);
		// Seleccion de jQuery
		$container.append($article.fadeIn(2000));
	})
}