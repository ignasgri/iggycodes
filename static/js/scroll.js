$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.box').offset().top }, 'slow');
      return false;
    });
  });