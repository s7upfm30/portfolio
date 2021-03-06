$(function () {
  $('.page-top').hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.page-top').fadeIn(1000);
    } else {
      $('.page-top').fadeOut(1000);
    }
  });

  $('.page-top').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 500);
    return false;
  });
  $('a[href^="#"]').on('click', function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 100;
    $("html, body").animate({ scrollTop: position }, 550, "swing");
    return false;
  });
  $('.content a[href]').on('click', function (event) {
    $('#input').trigger('click');
  });

  ScrollReveal().reveal('.title__logo', {
    duration: 4000,
    origin: 'left',
    distance: '50px',
    reset: false
  });
  ScrollReveal().reveal('.career__list', {
    duration: 2000,
    origin: 'left',
    distance: '50px',
    reset: false
  });

  ScrollReveal().reveal('.services-list', { 
    duration: 2000, 
    origin: 'left', 
    distance: '100px',
    reset: false  
  });
  ScrollReveal().reveal('.skills-list', { 
    duration: 2000, 
    origin: 'right', 
    distance: '100px',
    reset: false   
  });

});