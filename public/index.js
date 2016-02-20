$(document).on("ready", function(){
  $("#scroll-to-passion").click(function() {
    $('html, body').animate({
        scrollTop: $("#passions-container").offset().top
    }, 1000);
  });
  $("#scroll-to-proyects").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects-container").offset().top
    }, 1000);
  });
  $("#scroll-to-contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact-me-container").offset().top
    }, 1000);
  });
  var email = $("#inputEmail").val();
  var message = $("#inputMEssage").val();
})