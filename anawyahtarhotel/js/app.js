$(document).ready(function(){

    // Start Header

    // Start navbar
    $('.navbuttons').click(function(){
        $('.navbuttons').toggleClass('navactives');
    });
    // End navbar


    // Start banner
    $('#checkininputs,#checkoutinputs').flatpickr({
        minDate : 'today'
    });

    var guestinput = $('#guestinputs');

    $('.upbtns').click(function(e){
        e.preventDefault();
        // console.log(guestinput.val());
        var guestnumber = parseInt(guestinput.val());

        if(guestnumber < 9){
            guestinput.val(++guestnumber);
        }
    });

    $('.downbtns').click(function(e){
        e.preventDefault();
        var guestnumber = parseInt(guestinput.val());
        
        if(guestnumber > 1){
            guestinput.val(--guestnumber);
        }

    });
    // End banner

    // End Header

    //Start Adv Section
    $(window).scroll(function(){
        var getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);
        if(getscrolltop >= 100){
            $('.hexagonboxes.one').addClass('fromlefts');
            $('.hexagonboxes.two').addClass('fromtops');
            $('.hexagonboxes.three').addClass('fromrights');
            $('.hexagonboxes.four').addClass('frombottoms');
            $('.hexagonboxes.five').addClass('frombottoms');
        }else{
            $('.hexagonboxes.one').removeClass('fromlefts');
            $('.hexagonboxes.two').removeClass('fromtops');
            $('.hexagonboxes.three').removeClass('fromrights');
            $('.hexagonboxes.four').removeClass('frombottoms');
            $('.hexagonboxes.five').removeClass('frombottoms');
        }
    });
    // End Adv Section
});