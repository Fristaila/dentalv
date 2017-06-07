/**
 * require your modules here
 */
import App from './modules/App';
import $ from 'jquery';
// import './bower_components/jquery.mb.ytplayer/src/jquery.mb.YTPlayer.src';



const $window = $(window);

import {
	staticInit,
	deviceType,
	checkDeviceType
} from './utils/mq';

(() => {
	// const DentalApp = new App;
	const MQ = deviceType();
	let isMobile = true;
	let isDesktop = false;

	function switchDeviceType(mq) {
		if (mq === 'desktop' && isDesktop) {
			isDesktop = false;
			isMobile = true;
		} else if (mq === 'mobile' && isMobile) {
			isMobile = false;
			isDesktop = true;
		}
	}

	staticInit(MQ, App.switchToDesktop, App.switchToMobile);

	/**
	 * my swop bg flag for check ones running swop
	 */
	let executed = false;
	let flag = true;
	const $doctorAbout = $("body").find(".section-doctor");
	
	let swopBgService = require("./modules/full-bg.module");
	$window.on('resize', () => {
		const mq = deviceType();
		swopBgService = require("./modules/full-bg.module");

		checkDeviceType(
			mq,
			isMobile,
			isDesktop, [App.switchToDesktop, App.switchToMobile]
		);
		switchDeviceType(mq);
		

		if($doctorAbout.length > 0){
			let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			
			if (swopBgService.checkWidth(width)) {
				if (!executed) {
					executed = true;
					flag = false;
					swopBgService.swopBgHolders();
					// console.log("swop to big")

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

	});

	App.init();
})();