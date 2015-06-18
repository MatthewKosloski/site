$('.photoset-grid-lightbox').photosetGrid({
  highresLinks: true,
  rel: 'withhearts-gallery',
  gutter: '2px',

  onComplete: function(){
    $('.photoset-grid-lightbox').attr('style', '');
    $('.photoset-grid-lightbox a').colorbox({
      scrolling: false,
      photo: true,
      scalePhotos: true,
      maxHeight:'90%',
      maxWidth:'90%',
      onOpen: function(){
        $("body").css({"overflow":"hidden"});
      },
      onClosed: function(){
        $("body").css({"overflow":"visible"});
      }
    });
  }
});