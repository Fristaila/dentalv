

const scrollMagicModule = (()=>{
		const ScrollMagic = require('scrollmagic');
		const width       = require('../utils/width-informer.service');
		const controller  = new ScrollMagic.Controller();

			// define movement of panels
			if(width() > 1024){
				if($('#scrollParallax').length > 0){
					const wipeAnimation = new TimelineMax()
						.to("#scrollParallax", 1, {y: "-105%", ease: Linear.easeNone}) // in from top
						.to("#slideContainer", 1, {x: "-50%"});
					// create scene to pin and link animation
					const scene = new ScrollMagic.Scene({
						triggerElement: "#pinContainer",
						triggerHook: "onLeave",
						duration: "300%"
					})
						.setPin("#pinContainer")
						.setTween(wipeAnimation)
						.addTo(controller);
				}
			}
			function disableController(){
				controller.destroy($('#scrollParallax'));
				$('#scrollParallax').addClass("destroied");
				$('.about-slider').attr('style', '');
				$('.about-slider').addClass("destroied");
			}
			return {
				disableController
			}    
})()


const resizeScenetModule = (()=>{
		const width       = require('../utils/width-informer.service');
		let   flagInit    = false;
		let   flagDestroy = false;

        window.addEventListener('resize', function(){
			if(!flagInit){
					// $('.coub-i').css("background-color", "#000000");
					$('.short-about').addClass('resized');
					scrollMagicModule.disableController();
					flagInit    = true;
					flagDestroy = false;
			}
			if(!flagDestroy){
				if(width() > 992){
					flagDestroy = true;
					flagInit    = false;
				}
			}
        }, false);
})()
