import $ from 'jquery';

import "../bower_components/slick-carousel/slick/slick";

export function mainSlider() {
	$('.about-slider').slick({

		slide: '.triple-block',
		slidesToShow: 1,
		slidesToScroll: 1,
		swipe: true,
		arrows: false,
		dots: true,
		infinite: true
	});
}

export function destroyMainSlider() {
	$('.about-slider').slick('unslick');
}

export function initDotSlider(selector, item, count) {
	$(selector).slick({
		slides: item,
		slidesToShow: count,
		slidesToScroll: 1,
		dots: false,
		infinite: true,
		draggable: true,
		prevArrow: '<a href="#" class="slick-prev"><span class="icon-arrow-left"></span></a>',
		nextArrow: '<a href="#" class="slick-next"><span class="icon-arrow-right"></span></a>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slides: item,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
					infinite: true
				}
			}
		]
	});
}