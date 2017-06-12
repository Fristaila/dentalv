
import $ from 'jquery';
require('bootstrap/js/modal');

$(() => {
    const cerrentDoctorModule = (() => {
         // cache the DOM
        const $body           = $('body');
        const $modal          = $body.find('#doctorWhoAppiontment');
        const $buttonOpen     = $body.find('.doctorWhoBtn');
        const $buttoWhoDoctor = $modal.find('.doctor-who-item');

        // bind event
         $buttonOpen.on('click', function (e) {
            e.preventDefault();
            $modal.modal();
         });

         $buttoWhoDoctor.on('click', function () {
             $buttoWhoDoctor.removeClass('active');
             const $self          = $(this);
             const $currentDoctor = $self.find('.who-name');

             $self.addClass('active');
             $self.parents('form').find(':submit').val($currentDoctor.text());
         });
    })();
});
