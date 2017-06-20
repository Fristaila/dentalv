import $ from 'jquery'

const $window = $(window);
const $scrollParallax = $('#scrollParallax');

const requestAnimationFrame = window.requestAnimationFrame
															|| window.mozRequestAnimationFrame
															|| window.webkitRequestAnimationFrame
															|| window.msRequestAnimationFrame;

window.requestAnimationFrame = requestAnimationFrame;

export function scrollParallax() {

	const elementHeight = $scrollParallax.innerHeight();

	if ($scrollParallax.length) {

		$window.on('scroll', function() {

			const scroll = $window.scrollTop();
			const val = 'translateY(-'+scroll+'px)';

			if (scroll <= elementHeight) {
				requestAnimationFrame(() => {
					$scrollParallax.css({
						'transform': val,
						'-webkit-transform': val,
						'-moz-transform': val,
						'-ms-transform': val
					})
				});
			}

		});

	}

}
