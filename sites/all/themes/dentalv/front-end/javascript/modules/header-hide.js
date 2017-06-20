import $ from 'jquery';

$(() => {
  (() => {
    // cache the DOM
    const $navTop   = $('#header');
    const $window   = $(window);
    const $document = $(document);
    const width     = require('../utils/width-informer.service')();
    const isMobile  = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    $window.on('scroll', handler);

    function handler() {
      if (($document.scrollTop() > 50) && isMobile && (width <= 992)) {
        $navTop.css({ 'display': 'none' });
      } else {
        $navTop.css({ 'display': 'block' });
      }
    }
  })();
});
