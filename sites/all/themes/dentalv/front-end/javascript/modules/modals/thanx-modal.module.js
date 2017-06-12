import $ from 'jquery';
require('bootstrap/js/modal');

$(() => {
    const cerrentDoctorModule = (() => {
        // cache the DOM
        const $body = $('body');

        $body.find('#thanxModal');
    })();
});
