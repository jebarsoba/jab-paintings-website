$( document ).ready(function() {
  $('#gallery-main').on('slid.bs.carousel', function (e) {
    const numberOfImagesPerCarouselItem = $('#gallery-thumbnails').children('.carousel-inner').children('.item').first().find('.paintings').length;
    const targetItem = $(e.relatedTarget).index();

    const thumbnailsItem = Math.trunc( targetItem / numberOfImagesPerCarouselItem );

    $('#gallery-thumbnails').carousel(thumbnailsItem);
  })
});
