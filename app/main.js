$(document).ready(function() {
  $("#sidebar").click(function() {
      $("#active").toggleClass("active");
  });
});

$('.ricoursechoose li').click(function() {
  var myCourseReedSlider = $(this).data("slider");
  $('.slider-reed-info').not('.' + myCourseReedSlider).removeClass('show-reed-info');
  $('#reedInfoChooseHelpdesk').removeClass('activeric');
  $('#activeReedinfocourse').removeClass('aricclass');
  $('.' + myCourseReedSlider).addClass('show-reed-info');
});

$(document).ready(function() {
  $('a[href*="#"]').click(function(e) {
    e.preventDefault();
    
    var blockID = $(this).attr('href');
    var offset = $(blockID).offset().top;
    
    $('html, body').animate({
      scrollTop: offset
    }, 1000);
  });
});