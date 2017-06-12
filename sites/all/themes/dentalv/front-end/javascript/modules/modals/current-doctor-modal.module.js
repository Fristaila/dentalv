
import $ from 'jquery';
require('bootstrap/js/modal');

$(() => {
    const cerrentDoctorModule = (() => {
        // cache the DOM
        const $body                     = $("body");
        const $currentDoctorAppointment = $body.find('#currentDoctorAppointment');
        const $button                   = $body.find('.currentDocAppoint');

        // bind event         
        $button.on('click', handler);

        // define handler
        function handler(e) {
            e.preventDefault();
            $currentDoctorAppointment.modal();
        }
    })();
});
