$(function() {
	window.name = Number(window.name) + 1;
	if (window.name === '1') {
		$('#loading')
			.find('.loading-top').addClass('loading-top-animate')
			.next().addClass('loading-middle-animate')
			.next().addClass('loading-bottom-animate');
		setTimeout(function() {
			$('#loading').remove()
		}, 800)
	} else {
		$('#loading').remove()
	}
})