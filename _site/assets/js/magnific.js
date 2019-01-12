$(document).ready(function() {
  $('.gallery').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
                enabled:true
              }
        // other options
  });
  $('.popup-youtube').magnificPopup({
  		disableOn: 700,
  		type: 'iframe',
  		mainClass: 'mfp-fade',
  		removalDelay: 160,
  		preloader: false,

  		fixedContentPos: false
  	});
    $('.nav-link').click(function() {
    var id = $(this).attr('id');
    $('html, body').animate({
        scrollTop: ($('#' + id + '.section').offset().top)
    }, 1000);
});
});
