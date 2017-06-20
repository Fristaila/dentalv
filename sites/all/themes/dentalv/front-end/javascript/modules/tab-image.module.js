import $ from 'jquery';

$(() => {
  const tabImagesModule = (() => {
    // cache the DOM
    const $galleryComponent = $('.gallery-component');
    const $chiefImage       = $galleryComponent.find('.tabCover');
    const $thumbs           = $galleryComponent.find('.tabInvoke');

    $thumbs.first().addClass('active'); 

    $thumbs.on('click', function () {
        const $self        = $(this);
        const currentImage = $self.attr('data-image');
        
        $chiefImage.addClass('closed');
        $thumbs.removeClass('active');
        $(`.cover${currentImage}`).removeClass('closed');
        $self.addClass('active');
    });
  })();
});
