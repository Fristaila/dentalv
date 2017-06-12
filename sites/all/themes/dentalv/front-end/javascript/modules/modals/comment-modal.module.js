
import $ from "jquery";
require('bootstrap/js/modal');

$(() => {
    const cerrentDoctorModule = (() => {
        // cache the DOM
        const $body             = $('body');
        const $comment          = $body.find('#comment');
        const $button           = $body.find('.commentBtn');
        const $buttonWhoComment = $comment.find('.doctor-who-item');

        // bind event
        $button.on("click", handler);

        // define handler
        function handler() {
            $comment.modal();
        }

         $buttonWhoComment.on('click', function () {
             $buttonWhoComment.removeClass('active');
             const $self          = $(this);
             const $currentDoctor = $self.find('.who-name');

             $self.addClass('active');
             $self.parents('form').find(':submit').val($currentDoctor.text());
         });
    })();
});
