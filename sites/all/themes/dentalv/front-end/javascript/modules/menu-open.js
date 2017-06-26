import $ from 'jquery';

$(() => {
	const openMenuModule = (() => {
		// cache the DOM
		const $body          = $('body');
		const $burgerTrigger = $body.find('.burger__trigger');

		// bind events
		$burgerTrigger.on('click', handler);

		// define handler
		function handler(e) {
			e.preventDefault();
			$body.toggleClass('opened-menu');
		}
	})();
});
