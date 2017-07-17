$(document).ready(function() {
  
  new WOW().init();

  $('#fullpage').fullpage({
    scrollBar: true,
    navigation: true,
    navigationTooltips: ['Home', 'About', 'Portfolio', 'Contact'],
    loopBottom: true,
    sectionSelector: 'section'
  });
  
  int = -1;
  color_array = ['#fff','#fff','#fff','#fff','#fff','#fff'];

  $('section').each(function(){
    int++
    $(this).addClass('grid-item-' + int).css('background-color', color_array[int]);
  });
});

// #1abc9c
// #fff
// #9b59b6
// #3498db
// #f1c40f
// #16a085