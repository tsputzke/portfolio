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

$('#email').on('click or keypress', event => {
  window.location.href = "mailto:tsputzke@gmail.com";
})

$('#linkedIn').on('click or keypress', event => {
  window.location.href = "https://www.linkedin.com/in/timothy-putzke-0534b4a8/";
})

$('#github').on('click or keypress', event => {
  window.location.href = "https://github.com/tsputzke";
})

// Portfolio

$('#amphibian-live').on('click or keypress', event => {
  window.location.href = "https://tsputzke.github.io/QuizApp/";
})

$('#amphibian-github').on('click or keypress', event => {
  window.location.href = "https://github.com/tsputzke/QuizApp";
})

$('#booksplorer-live').on('click or keypress', event => {
  window.location.href = "https://tsputzke.github.io/Booksplorer/";
})

$('#booksplorer-github').on('click or keypress', event => {
  window.location.href = "https://github.com/tsputzke/Booksplorer";
})