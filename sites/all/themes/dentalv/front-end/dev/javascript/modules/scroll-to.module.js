import $ from "jquery";

$(()=>{
  (()=>{
    "use strict";
    //cache the DOM
    const $blockContacts = $(".block-contacts");
    const $scrollTo = $blockContacts.find(".scrollTo");
    const $body = $("html, body");



    //bind events
    $scrollTo.on("click", function(event){
      event.preventDefault();
      //cache this
      const $self = $(this);


      const _id = $self.attr("href");
      const whereTo = $(_id).offset();
      $body.animate({
        scrollTop: whereTo.top
      }, 500);

    });

  })()
})