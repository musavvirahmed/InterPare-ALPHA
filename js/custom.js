  $(window).on('load', function(){
    $("#subscriber-search").twentytwenty({
    default_offset_pct: 0.6, // How much of the before image is visible when the page loads
    orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
    // no_overlay: true, //Do not show the overlay with before and after
    before_label: 'Showing All Subscribers', // Set a custom before label
    after_label: 'Search Field Activated', // Set a custom after label
  });
});


$(window).on('load', function(){
  $("#account-menu").twentytwenty({
  default_offset_pct: 0.5, // How much of the before image is visible when the page loads
  orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
  // no_overlay: true, //Do not show the overlay with before and after
  before_label: 'Showing All Subscribers', // Set a custom before label
  after_label: 'My Account Dropdown', // Set a custom after label
});
});
