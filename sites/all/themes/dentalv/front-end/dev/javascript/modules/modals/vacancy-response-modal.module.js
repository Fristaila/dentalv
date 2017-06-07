
import $ from "jquery";
require('bootstrap/js/modal');

$(()=>{
    const cerrentDoctorModule = (()=>{
        "use strict";   

        /**
         * cache the DOM
         */ 
        const $body = $("body");
        const $sectionAbout = $body.find(".section-about");

        const $modal = $sectionAbout.find("#vacancyResponse");
        const $button = $sectionAbout.find(".vacancyResponseBtn");
        const $carrentVacancy = $modal.find(".current-vacancy");
        const $submit = $modal.find(":submit");


        /**
         * bind event
         */
        $button.on("click", function(){
            $carrentVacancy.text("");
            $submit.val("");
            const $self = $(this);
            const vacancyTitle = $self.closest(".vacancy-list-item").find(".vacancy-title").text();
            $carrentVacancy.text(vacancyTitle.toLowerCase());
            $submit.val(vacancyTitle.toLowerCase());
            $modal.modal();
        })




    })()


});