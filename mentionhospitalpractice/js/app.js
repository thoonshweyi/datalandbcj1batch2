$(document).ready(function(){
    // Start Banner Section
    $('.carousel').carousel({
        interval : 1000
    });
    // End Banner Section


    // Start Info Section
    $(window).scroll(function(){
        var getscrolltop = $(this).scrollTop;
        console.log(getscrolltop);
    });
    // End Info Section

    // Start Premises Section
    $('#lightslider').lightSlider({
        auto : true,
        item : 4,
        loop : true,
        speed : 600,
        slideMove : 1
    });
    // End premises Section
});