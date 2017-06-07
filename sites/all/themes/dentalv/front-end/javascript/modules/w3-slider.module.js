import jQuery from "jquery";


jQuery(() => {
  const w3SliderModule = (() => {
    "use strict";

  function Slider(slider){

    this.slides = slider.find('.slidesImages');
    this.dots = slider.find('.thumsDots');


    this.slideIndex = 1;

    const self = this;

    this.showDivs = function(n) {

      if (n > self.slides.length) { self.slideIndex = 1 }
        if (n < 1) { self.slideIndex = self.slides.length }
          
          self.slides.each(function(){
            jQuery(this).css({'display':'none'});
          });

          self.dots.each(function(){
            jQuery(this).removeClass("active");
          });

          self.slides.eq(self.slideIndex - 1).fadeIn(200);
          self.dots.eq(self.slideIndex - 1).addClass("active");
          
        }




    this.plusDivs = function(n) {
      self.showDivs(self.slideIndex += n);
    }

    this.currentDiv = function(n) {
      self.showDivs(self.slideIndex = n);
    }

  }
  const jQtabCover = jQuery('.tabCover');
  
  const jQslider = jQuery('.gallery-modal');
  const slider = new Slider(jQslider);
  jQslider.find('.icon-arrow-left').on('click', function(){
    slider.plusDivs(-1);
  });
  jQslider.find('.icon-arrow-right').on('click', function(){
    slider.plusDivs(1);
  });
  jQslider.find('.thumsDots').on('click', function(){
    const current = parseFloat(jQuery(this).attr('data-currentDiv'));
    slider.currentDiv(current);
  });

  jQtabCover.on('click', function(){
    const current = parseFloat(jQuery(this).attr('data-gallery'));
    slider.currentDiv(current);
  });







  })()
})