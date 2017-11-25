$( document ).ready(function() {
  $('#gallery-main').on('slid.bs.carousel', function (e) {
    const numberOfImagesPerCarouselItem = 4;
    const targetItem = $(e.relatedTarget).index();

    const thumbnailsItem = Math.trunc( targetItem / numberOfImagesPerCarouselItem );

    $('#gallery-thumbnails').carousel(thumbnailsItem);
  })
});
