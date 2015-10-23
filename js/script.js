$(document).ready(function() {
  floatUp();

  initScrollTo();
  if (window.location.hash != "") {
    doScrollTo(window.location.hash.substring(1));
  }
});

var floatUp = function() {
  $("#h1name").animate({
    opacity: 1
  }, 2000, function(){
    $("#homePlayButton").animate({
      opacity: 1
    }, 1000, function(){ });
    
  });
}
var initScrollTo = function() {
  var navbuttons = $(".navbutton");
  for (idx in navbuttons) {
    id = navbuttons[idx].id;
    $("#" + id).click(function(event) {
      event.preventDefault();
      doScrollTo(this.id.substring(3));
    });
  }
}

var doScrollTo = function(destination) {
  $('html, body').animate({
      scrollTop: $("#" + destination).offset().top
  }, 1000, function() {
      window.location.hash = destination;
  });
}
