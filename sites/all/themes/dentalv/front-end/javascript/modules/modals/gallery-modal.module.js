
import $ from "jquery";
require('bootstrap/js/modal');

$(()=>{
    const cerrentDoctorModule = (()=>{
        "use strict";   

        /**
         * cache the DOM
         */ 
        const $body = $("body");
        
        const $galleryModal = $body.find("#galleryModal");
        const $button = $body.find(".chief-img-cover");


        /**
         * bind event
         */
        $button.on("click", handler)

        //define handler
        function handler(){
            $galleryModal.modal();
        }

    })()


});