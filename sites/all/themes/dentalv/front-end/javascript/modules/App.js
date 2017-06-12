import $ from 'jquery';
import jQuery from 'jquery';

window.jQuery = jQuery;
window.$      = $;

import { initDotSlider } from './sliders';
import { initMap } from './map';
import { burgerClick } from './clicks';

// require('headroom.js/dist/headroom');
// require('headroom.js/dist/jQuery.headroom');
require('bootstrap/js/tab');

// cache main
const $window = $(window);

// cache videos

import 'gsap';
import '../utils/anim';

const App = (() => {
  const init = () => { // init default stuff next
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

		// require modules
		require('./modals/current-doctor-modal.module');
		require('./modals/vacancy-response-modal.module');
		require('./modals/doctor-who-modal.module');
		require('./modals/feedback-mobile-modal.module');
		require('./modals/comment-modal.module');
		require('./modals/thanx-modal.module');
		require('./scroll-to.module');
		require('./search.module');
		require('./tab-image.module');
		require('./tab-image.module');
		require('./modals/gallery-modal.module');
		require('./w3-slider.module');
		require('./header-hide');
		require('./video-main.module');
		require('./scroll-magic.module');
		require('./about-slider.module');

		if (videoTriggerAimWidth < 768
			&& /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			setTimeout(function () {
				$('.my-trigger').trigger('click');
				$('.fluid-width-video-wrapper').addClass('mobile');
			}, 500);
		}
  }; // end app init


	const switchToMobile = () => {
		// console.log('switched to mobile');
	};

	const switchToDesktop = () => {
		// console.log('switched to desktop');
	};

														
	function hadleSingleDoctor() {
		// swop doctor bg stuff
		// cache doctors
		const $doctorAbout = $('body').find('.section-doctor');
		const $mobileBgHolder  = $doctorAbout.find('.header-doctor');
		const $desktopBgHolder = $('body').find('.wrapper.special');
		const $currentBgImage  = $mobileBgHolder.css('background-image');
		const width            = window.innerWidth
														|| document.documentElement.clientWidth 
														|| document.body.clientWidth;

		// full bg stuff
		if ($doctorAbout.length > 0) {
			// check if we are on doctor page and do work

			// fade out preloader — white screen
			$('.doctorPreloader').fadeOut();
			// if width bigger then 1025 put image on wrapper
			if (width >= 1025) {
				swopBgHolders();
			}

		/**
		 * putting image on wrapper
		 */

			function swopBgHolders() {
				const bg = $currentBgImage;

				$desktopBgHolder.css({ 'background-image': bg });
				$mobileBgHolder.css('background-image', 'none');
			}
		}
	}

	const setDefaultListeners = () => {
		$window.on('load', hadleSingleDoctor);
	};

	return {
		switchToDesktop,
		switchToMobile,
		init
	};
})();

export default App;
