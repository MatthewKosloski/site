$('.photoset-grid-lightbox').photosetGrid({
highresLinks: true,
rel: 'withhearts-gallery',
gutter: '10px',
onComplete: function(){
  $('.photoset-grid-lightbox').attr('style', '');
  $('.photoset-grid-lightbox a').colorbox({
      onLoad: function(){
        $('button#cboxClose').css({'display':'none'});
        $("button#cboxPrevious").css({'display':'none'});
        $("button#cboxNext").css({'display':'none'});
      },
      photo: true,
      scalePhotos: true,
      maxHeight:'90%',
      maxWidth:'90%'
  });
}
});