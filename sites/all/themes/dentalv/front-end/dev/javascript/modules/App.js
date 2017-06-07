import $ from 'jquery';
import jQuery from 'jquery';

window.jQuery = jQuery;
window.$ = $;

import {
	mainSlider,
	destroyMainSlider,
	initDotSlider
} from './sliders';

import {
	initMap
} from './map';

import {
	burgerClick
} from './clicks'

// require('headroom.js/dist/headroom');
// require('headroom.js/dist/jQuery.headroom');
require('bootstrap/js/tab');

//cache main
const $window = $(window);
const $body = $('body');
const $html =  $('html');

//cache header
const $header = $body.find(".header_inner");

//cache doctors
const $doctorAbout = $body.find(".section-doctor");
const $mobileBgHolder = $doctorAbout.find(".header-doctor");
const $desctopBgHolder = $body.find(".wrapper.special");
const $currentBgImage = $mobileBgHolder.css("background-image");

//cache videos
const $videoAboutWrap = $body.find(".video-about");
const VIDEO_ID = 'videoAbout';
const $player =  $(`#${VIDEO_ID}`);

import "gsap";
import "../utils/anim";

const App = (() => {
  const init = () => {
	  const videoTriggerAimWidth = require('../utils/width-informer.service')();

		// Sliders
		initDotSlider('.articles-slider', '.article', 3);
		initDotSlider('.reviews-slider', '.review', 2);

		// Clicks
		burgerClick();

		if ($('#map').length) {
			initMap('#map');
		}

		setDefaultListeners();

		//carrent doctor appointment modal stuff
		require("./modals/current-doctor-modal.module");
		//vacancy response modal stuff
		require("./modals/vacancy-response-modal.module");
		//doctor who modal stuff
		require("./modals/doctor-who-modal.module");
		//feedback mobile modal stuff
		require("./modals/feedback-mobile-modal.module");
		//comment modal stuff
		require("./modals/comment-modal.module");
		//thanx modal stuff
		require("./modals/thanx-modal.module");
		//scroll to map stuff
		require("./scroll-to.module");
		//search stuff
		require("./search.module");
		//tab images stuff
		require("./tab-image.module");
		//gallery modal stuff
		require("./tab-image.module");
		//gallery modal stuff
		require("./modals/gallery-modal.module");
		//w3 slider stuff
		require("./w3-slider.module");
		//header hide on mobile
		require("./header-hide");

		require("./video-main.module");


		// require("./coub-play.module");

		if (videoTriggerAimWidth < 768 && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	
			setTimeout(function(){
				$(".my-trigger").trigger("click");
				$(".fluid-width-video-wrapper").addClass('mobile');
			}, 500)


		}
		
		require('./scroll-magic.module');

		require("./about-slider.module");


		//full bg stuff
		if($doctorAbout.length > 0){
			const $mobileBgHolder = $doctorAbout.find(".header-doctor");
			const $desctopBgHolder = $body.find(".wrapper.special");
			const $currentBgImage = $mobileBgHolder.css("background-image");


			let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

			if(width >= 1025){
				swopBgHolders();
			}

			function swopBgHolders() {
					let bg = $currentBgImage;
					$desctopBgHolder.css({
							"background-image": bg
					});
					$mobileBgHolder.css("background-image", "none");
			}


		}

  };


	const switchToMobile = () => {
		console.log('switched to mobile');
	};

	const switchToDesktop = () => {
		console.log('switched to desktop');

	};
	const setDefaultListeners = () => {
		$window.on('load', function () {
		})
	};

	//
	// const handleResize = () => {
	// 	console.log('resize');
	// };
	//
	// const handleLoad = () => {
	// 	console.log('resize');
	// };
	//
	// const destroy = () => {
	// 	console.log('destroy');
	// };

	// const handleScroll = () => {
	// 	console.log('scroll');
	// };
	return {
		switchToDesktop,
		switchToMobile,
		init
	}
})();

export default App;