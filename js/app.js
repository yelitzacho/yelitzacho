$(document).foundation();

$(document).ready(function() {
  $('.hamburguer-btn').click(function() {
    $(this).toggleClass('on');
  });
});

function animateHamburger() {
  $('.hamburguer-btn').toggleClass('open');
}
function slideMenu(){
  $('.navbar').toggleClass('open');
}

$('.hamburguer-btn').click(function(){
  animateHamburger();
  slideMenu();
});