
import $ from "jquery";
require('bootstrap/js/modal');

$(()=>{
    const cerrentDoctorModule = (()=>{
        "use strict";   

        /**
         * cache the DOM
         */ 
        const $body = $("body");
        
        const $feedBack = $body.find("#feedBack");
        const $button = $body.find(".feedBackBtn");


        /**
         * bind event
         */
        $button.on("click", handler)

        // //define handler
        function handler(){
            $feedBack.modal();
        }


    })()


});