import $ from "jquery";
import "../utils/mark";

$(()=>{

  const searchModule = (function(){
    const $container = $("body").find(".section-price");
    const $input = $container.find("input[name='search']");
    const $context = $container.find(".service-list .service-item");

    $input.on("input", function() {
      let term = $(this).val();
      $context.show().unmark();
      if (term) {
        $context.mark(term, {
          done: function() {
            $context.not(":has(mark)").hide();
          }
        });
      }
    });

  })()





})



