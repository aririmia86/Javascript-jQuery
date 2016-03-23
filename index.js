$(function () {
	/**
	* Submit search form
	*/
	$('#app-body')
		.find('form')
		.submit(function (ev) {
			ev.preventDefault();
			// This es el elemento form del DOM. Al rodearlo de
			// $ lo convertimos en un jQuery Object
			var $busqueda = $(this)
				.find('input[type="text"]')
				.val();
			alert("Se ha buscado " + $busqueda);
		})

	var template = '<article class="tv-show">' + 
					'<div class="left img-container">' + 
						'<img src=":img:" alt=":img alt:">' +
					'</div>' +
					'<div class="right info">' +
						'<h1>:name:</h1>' +
						'<p>:summary:</p>' +
					'</div>' +
				'</article>';
	// Request AJAX a API de TVMaze
	// Metodo por defecto GET
	$.ajax('http://api.tvmaze.com/shows', {
		'success': function (shows, textStatus, xhr) {
			var $container = $('#app-body').find('.tv-shows');
			// forEach recibe por parametro una funcion que se
			// llama por cada elemento
			shows.forEach(function (show){
				var article = template
					.replace(':name:', show.name)
					.replace(':img:', show.image.medium)
					.replace(':summary:', show.summary)
					.replace(':img alt:', show.name + " Logo");
				// Seleccion de jQuery
				$container.append($(article));
			})
		}
	})
})
