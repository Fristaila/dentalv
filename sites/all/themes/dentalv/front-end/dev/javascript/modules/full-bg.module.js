/**
 * grab dependencies
 */
import $ from "jquery";
/**
 * define module
 */
$(() => {
    const fullBgModule = (() => {
        "use strict";

        /** 
         * cache the DOM
         */
        const $body = $("body");
        const $doctorAbout = $body.find(".section-doctor");
        const $mobileBgHolder = $doctorAbout.find(".header-doctor");
        const $desctopBgHolder = $body.find(".wrapper.special");
        const $currentBgImage = $mobileBgHolder.attr("rel");
        /**
         * bind events
         */

        function swopBgHolders() {
            let bg = $currentBgImage;
            $desctopBgHolder.css({
                "background-image": bg
            });
            $mobileBgHolder.css("background-image", "none");
        }

        function viseVersa() {
            let bg = $currentBgImage;
            $desctopBgHolder.css({
                "background-image": "none"
            });
            $mobileBgHolder.css("background-image", bg);
        }
        //  swopBgHolders();
        //const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        function checkWidth(width) {
            if (width >= 1025)
                return true;
            else
                return false;
        }


        return {
            checkWidth,
            swopBgHolders,
            viseVersa
        }


    })()


    module.exports = {
        checkWidth: fullBgModule.checkWidth,
        swopBgHolders: fullBgModule.swopBgHolders,
        viseVersa: fullBgModule.viseVersa
    }
    

})