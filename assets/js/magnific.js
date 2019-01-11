$(document).ready(function() {
  $('.gallery-form').magnificPopup({
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
});
