$('#about-button').on('click or keypress', function(event) {
  $('html, body').animate({
    scrollTop: $("#about-me").offset().top - 60
  }, 300);
})

$('#portfolio-button').on('click or keypress', function(event) {
  $('html, body').animate({
    scrollTop: $("#portfolio").offset().top - 60
  }, 300);
})

$('#contact-button').on('click or keypress', function(event) {
  $('html, body').animate({
    scrollTop: $("#contact").offset().top - 60
  }, 300);
})

$('#amphibian-live').on('click or keypress', event => {
  window.location.href = "https://tsputzke.github.io/QuizApp/";
})

$('#amphibian-github').on('click or keypress', event => {
  window.location.href = "https://github.com/tsputzke/QuizApp";
})