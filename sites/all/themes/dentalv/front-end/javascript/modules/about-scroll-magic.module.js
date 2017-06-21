const aboutScrollMagicModule = (() => {
  const Scrollmagic = require('scrollmagic');
  require('../utils/addindicators');

  const controller = new Scrollmagic.Controller();
  const $container = $('.section-about');
  const $triples = $container.find('.triple-block');
  $triples.each(function () {
    console.log(this.children);
    console.log(this.children[0].children[0].children[0]);
    const trig = this.children[0].children[0].children[0];
    const scene = new Scrollmagic.Scene({
      triggerElement: trig,
      triggerHook: .7
    })
      .setClassToggle(this, 'fade-in')
      // .addIndicators()
      .addTo(controller);
  });

})();
