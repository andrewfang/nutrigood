//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 500) {
        $(".navbar-fixed-top").addClass("navSolid");
        $("#logoImage").attr("src", "../assets/logoWhite.png");
    } else {
        $(".navbar-fixed-top").removeClass("navSolid");
        $("#logoImage").attr("src", "../assets/logoGreen.png");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});
