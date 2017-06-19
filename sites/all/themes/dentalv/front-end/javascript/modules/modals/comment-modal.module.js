
import $ from "jquery";
require('bootstrap/js/modal');

$(() => {
    const cerrentDoctorModule = (() => {
        // cache the DOM
        const $body             = $('body');
        const $comment          = $body.find('#comment');
        const $button           = $body.find('.commentBtn');
        const $buttonWhoComment = $comment.find('.form-type-radio');
        const $radios = $buttonWhoComment.find('input');

        // set default
        $buttonWhoComment.first().addClass('active');
        $radios.first().attr('checked', 'checked');

        // bind event
        $button.on('click', handler);

        // define handler
        function handler() {
            $comment.modal();
        }

         $buttonWhoComment.on('click', function () {
             $buttonWhoComment.removeClass('active');
             $radios.removeAttr('checked');
             const $self          = $(this);
             const $currentDoctor = $self.find('.who-name');

             $self.addClass('active');
             $self.find('input').attr('checked', 'checked');
             $self.parents('form').find(':submit').val($currentDoctor.text());
         });
    })();
});
