// grab jquery
import $ from 'jquery';

// define onload module
$(() => {
    const fullBgModule = (() => {
        // cache the DOM
        const $body            = $('body');
        const $doctorAbout     = $body.find('.section-doctor');
        const $mobileBgHolder  = $doctorAbout.find('.header-doctor');
        const $desctopBgHolder = $body.find('.wrapper.special');
        const $currentBgImage  = $mobileBgHolder.attr('rel');
        
        function swopBgHolders() {
            const bg = $currentBgImage;

            $desctopBgHolder.css({ 'background-image': bg });
            $mobileBgHolder.css('background-image', 'none');
        }

        function viseVersa() {
            const bg = $currentBgImage;

            $desctopBgHolder.css({ 'background-image': 'none' });
            $mobileBgHolder.css('background-image', bg);
        }

        function checkWidth(width) {
            if (width >= 1025) { return true; }
            else { return false; }
        }

        return {
            checkWidth,
            swopBgHolders,
            viseVersa
        };
    })();

    module.exports = {
        checkWidth: fullBgModule.checkWidth,
        swopBgHolders: fullBgModule.swopBgHolders,
        viseVersa: fullBgModule.viseVersa
    };
});
