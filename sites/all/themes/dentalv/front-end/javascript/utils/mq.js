/**
 * Created by enakin on 4/3/2017.
 */
function deviceType() {
	return window
		.getComputedStyle(document.querySelector('body'), '::before')
		.getPropertyValue('content').replace(/'/g, '').replace(/"/g, '');
}

function checkDeviceType(MQ, isMobile, isDesktop, arrCbs) {
	if (MQ === 'desktop' && isDesktop) {
		arrCbs[0]();
	} else if (MQ === 'mobile' && isMobile) {
		arrCbs[1]();
	}
}

function staticInit(mq, firstFunc, secFunc) {
	if (mq === 'desktop') {
		firstFunc();
	} else if (mq === 'mobile') {
		secFunc();
	}
}

export { staticInit, deviceType, checkDeviceType };