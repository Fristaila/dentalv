const aboutSliderModule = (()=>{
	let debounce = require('debounce');
	const width = require("../utils/width-informer.service");


function hasClass(element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

let flag = true;

//1024 width settings
let myOptions = {
									slide         : '.triple-block',
									slidesToShow  : 1,
									slidesToScroll: 1,
									centerMode    : false,
									swipe         : true,
									arrows        : false,
									dots          : true,
									infinite      : true,
									mobileFirst   : true,
									variableWidth : true

				}

		$('.about-slider').first().on('destroy', function (ev, slick) {
			let carousel = $(this),
				reinit = debounce(function () {
					/*
					* slick.activeBreakpoint will tell us the breakpoint
					* at which the carousel was destroyed.
					*/
					console.lo
					if (window.innerWidth < slick.activeBreakpoint) {
						console.log("here");
						return;
					}
					// Re-initialize with the old settings.
					carousel.slick(slick.options);

					// Remove this event listener.
					window.removeEventListener('resize', reinit);
				}, 500);

			// Assign our debounced callback to window.resize.
			window.addEventListener('resize', reinit);
		}).slick({
            mobileFirst: true,
			slide: '.triple-block',
			slidesToShow: 1,
			slidesToScroll: 1,
			swipe: true,
			arrows: false,
			dots: true,
			infinite: true,
			mobileFirst: true,
			variableWidth: false,
			responsive: [
				{
					breakpoint: 992,
					settings: "unslick"
				},
				{
					breakpoint: 1024,
					settings: myOptions
				}
			]
		});

	setTimeout(function(){
		if($("#scrollParallax").length > 0){
			if (!hasClass(document.getElementById("scrollParallax"), 'destroied') && width() >= 1024){
				$('.about-slider').slick('unslick');
			}
		}
	})

})()