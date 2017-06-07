import $ from 'jquery';
import jQuery from 'jquery';

$(() => {
  (() => {
    "use strict";

    //cache the DOM
    const $navTop = $("#header");
    const $window = $(window);
    const $document = $(document);
    
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    $window.on("scroll", checkScroll);

    function checkScroll(){
      if (($document.scrollTop() > 50) && isMobile) {
        $navTop.css({ "display": "none" });
      } else {
        $navTop.css({ "display": "block" });
      }
    }



  })()
});
