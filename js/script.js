$(document).ready(function() {
  initScrollTo();
  if (window.location.pathname != "/") {
    doScrollTo(window.location.pathname.substring(1));
  }
});

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
  }, 1000);
  history.replaceState(null, null, destination);
}
