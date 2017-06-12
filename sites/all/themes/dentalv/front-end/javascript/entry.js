/**
 * require your modules here
 */
import App from './modules/App';
import $ from 'jquery';

const $window = $(window);

import { staticInit, deviceType, checkDeviceType } from './utils/mq';

(function (jQ) {
	Drupal.behaviors.dental_min_script = {
		attach: function (context, settings) {
			(() => {
				// const DentalApp = new App;
				const MQ        = deviceType();
				let   isMobile  = true;
				let   isDesktop = false;

				function switchDeviceType(mq) {
					if (mq === 'desktop' && isDesktop) {
						isDesktop = false;
						isMobile  = true;
					} else if (mq === 'mobile' && isMobile) {
						isMobile  = false;
						isDesktop = true;
					}
				}

				staticInit(MQ, App.switchToDesktop, App.switchToMobile);

				/**
				 * my swop bg flag for check ones running swop
				 */
				let executed = false;
				let flag = true;
				const $doctorAbout = $('body').find('.section-doctor');

				let swopBgService = require('./modules/full-bg.module');

				/**
				 * swop bg from header to main and vise versa
				 * @param {object} swopBgService 
				 */
				function resizeHandler(swopBgService) {
					if ($doctorAbout.length > 0) {
						const width = window.innerWidth 
												|| document.documentElement.clientWidth
												|| document.body.clientWidth;

						if (swopBgService.checkWidth(width)) {
							if (!executed) {
								executed = true;
								flag     = false;

								swopBgService.swopBgHolders();
							}
						} else {
							if (!flag) {
								flag = true;
								executed = false;
								swopBgService.viseVersa();
								// console.log("swop to small")
							}
						}
					}
				}

				$window.on('resize', () => {
					const mq = deviceType();

					checkDeviceType(mq, isMobile, isDesktop, [App.switchToDesktop, App.switchToMobile]);
					switchDeviceType(mq);

					swopBgService = require('./modules/full-bg.module');
					resizeHandler(swopBgService);
				});

				App.init();
			})();
		}
	};
}(jQuery, Drupal));
