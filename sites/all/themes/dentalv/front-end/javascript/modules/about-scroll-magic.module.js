const aboutScrollMagicModule = (() => {
  const Scrollmagic = require('scrollmagic');

  require('../utils/addindicators');

  const controller = new Scrollmagic.Controller();
  const $container = $('.section-about');
  const $triples   = $container.find('.triple-block');

  $triples.each(function () {
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
