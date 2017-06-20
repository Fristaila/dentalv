
import $ from 'jquery';
require('bootstrap/js/modal');

$(() => {
    const cerrentDoctorModule = (() => {
         // cache the DOM
        const $body           = $('body');
        const $modal          = $body.find('#doctorWhoAppiontment');
        const $buttonOpen     = $body.find('.doctorWhoBtn');
        const $buttoWhoDoctor = $modal.find('.form-type-radio');
        const $radios         = $buttoWhoDoctor.find('input');

        $radios.first().attr('checked', 'checked');
        $buttoWhoDoctor.first().addClass('active');
        // bind event
         $buttonOpen.on('click', function (e) {
            e.preventDefault();
            $modal.modal();
         });

         $buttoWhoDoctor.on('click', function () {
             $buttoWhoDoctor.removeClass('active');
             const $self          = $(this);
             const $currentDoctor = $self.find('.who-name');
            
             $radios.removeAttr('checked');
             $self.find('input').attr('checked', 'checked');
             $buttoWhoDoctor.removeClass('active');
             $self.addClass('active');
             $self.parents('form').find(':submit').val($currentDoctor.text());
         });
    })();
});
