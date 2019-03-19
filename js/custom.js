  $(window).on('load', function(){
    $("#comparison1").twentytwenty({
    default_offset_pct: 0.6, // How much of the before image is visible when the page loads
    orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
    // no_overlay: true, //Do not show the overlay with before and after
    before_label: 'Current / Old Design', // Set a custom before label
    after_label: 'New Design', // Set a custom after label
  });
});

$(window).on('load', function(){
  $("#comparison2").twentytwenty({
  default_offset_pct: 0.6, // How much of the before image is visible when the page loads
  orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
  // no_overlay: true, //Do not show the overlay with before and after
  before_label: 'Current / Old Design', // Set a custom before label
  after_label: 'New Design', // Set a custom after label
});
});
