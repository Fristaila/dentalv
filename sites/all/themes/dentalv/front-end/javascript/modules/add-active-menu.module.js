import $ from 'jquery';

$(() => {
  const addActiveMenu = (() => {
    // cache the DOM
    const $mainMenu = $('.header-menu');
    const $menuItem = $mainMenu.find('a');

    $menuItem.each(() => {
      // get url and check consisting hre in an it
      const location            = window.location.href;
      const locationConsistHref = location.indexOf(this.href);

      // if consist add active to the parent
      if (locationConsistHref > -1) {
        $(this).parent('li').addClass('active');
      }
    });
  })();
});
