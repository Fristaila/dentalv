import $ from 'jquery';
require('bootstrap/js/modal');

$(() => {
    const carrentDoctorModule = (() => {
        // cache the DOM
        const $body   = $('body');
        const $modals = $body.find('.modal');
        const $thanx  = $body.find('#thanxModal');

        function closeAllModals() {
            $modals.each(function () {
                $(this).modal('hide');
            });
        }

        function openThanx() {
            closeAllModals();
            $thanx.modal();
        }

        return {
            openThanx
        };
    })();
    module.exports = carrentDoctorModule.openThanx;
});
