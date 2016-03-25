$(function () {
	var $container = $('#app-body').find('.tv-shows');
	var template = '<article class="tv-show">' + 
					'<div class="left img-container">' + 
						'<img src=":img:" alt=":img alt:">' +
					'</div>' +
					'<div class="right info">' +
						'<h1>:name:</h1>' +
						'<p>:summary:</p>' +
					'</div>' +
				'</article>';
	function renderShows (shows) {
		// forEach recibe por parametro una funcion que se
		// llama por cada elemento
		shows.forEach(function (show){
			var article = template
				.replace(':name:', show.name)
				.replace(':img:', show.image.medium)
				.replace(':summary:', show.summary)
				.replace(':img alt:', show.name + " Logo");
			// Conversion a jQuery Object
			var $article = $(article);
			// Lo ocultamos por defecto
			$article.hide();
			// Seleccion de jQuery
			$container.append($article);
			$article.show(1500);
		})
	}
	/**
	* Submit search form
	*/
	$('#app-body')
		.find('form')
		.submit(function (ev) {
			ev.preventDefault();
			// This es el elemento form del DOM. Al rodearlo de
			// $ lo convertimos en un jQuery Object
			var busqueda = $(this)
				.find('input[type="text"]')
				.val();
			$container.find('.tv-show').remove();
			var $loader = $('<div class="loader"></div>');
			$loader.appendTo($container);
			$.ajax({
				url: 'http://api.tvmaze.com/search/shows',
				data: { q: busqueda},
				success: function (res, textStatus, xhr){
					console.log(res);
					$loader.remove();
					// map llama a la función callback provista
					// una vez por elemento de un array, en orden,
					// y construye un nuevo array con los resultados
					var shows = res.map(function (element) {
						return element.show;
					})
					console.log(shows);
					renderShows(shows);
				}
			})
		})
	/*
	// Request AJAX a API de TVMaze
	// Metodo por defecto GET
	$.ajax('http://api.tvmaze.com/shows', {
		'success': function (shows, textStatus, xhr) {
			$container.find('.loader').remove();
			// forEach recibe por parametro una funcion que se
			// llama por cada elemento
			renderShows(shows);
		}
	})
	*/
	// Request AJAX mediante Promises
	$.ajax('http://api.tvmaze.com/shows')
		.then(function (shows) {
			$container.find('.loader').remove();
			renderShows(shows);
		});
})
