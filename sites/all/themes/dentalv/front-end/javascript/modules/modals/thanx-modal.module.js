import $ from 'jquery';
import Cookies from 'js-cookie';
require('bootstrap/js/modal');

$(() => {
    const thanxModalModule = (() => {
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
            const thank = 'thank_show';

            if (Cookies.get(thank) != null) {
                Cookies.set(thank, '0', { path: '/', expires: -10 });
                $thanx.modal();
            }
        }

        return {
            openThanx
        };
    })();
    module.exports = thanxModalModule.openThanx;
    thanxModalModule.openThanx();
});
