import $ from 'jquery';

const $body = $('body');
const $burgerTrigger = $body.find('.burger__trigger');

export function burgerClick() {
	$burgerTrigger.on('click', function(e) {
		e.preventDefault();
		$body.toggleClass('opened-menu');
	});
}

