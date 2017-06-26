import 'jquery';

$(() => {
    // cache the DOM
    const Headroom = require('headroom.js');
    const elHead   = document.querySelector('#header');
    const instance = new Headroom(elHead);

    instance.init();
});
