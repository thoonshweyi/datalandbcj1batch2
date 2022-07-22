$(document).ready(function(){

    // Start Header

    // Start navbar
    $('.navbuttons').click(function(){
        $('.navbuttons').toggleClass('navactives');
    });
    // End navbar


    // Start banner
    // $('#checkininputs,#checkoutinputs').datepicker({
    //     minDate : 'today'
    // });

    $('#checkininputs').datepicker({
        minDate : 'today',
        dateFormat : 'dd/mm/yy',
        onClose : function(selectdate){
            $('#checkoutinputs').datepicker('option','minDate',selectdate);
        }
    });

    $('#checkoutinputs').datepicker({
        minDate : 'today',
        dateFormat : 'dd/mm/yy',
        onClose : function(selectdate){
            $('#checkininputs').datepicker('option','maxDate',selectdate);
        }    
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

    //Start AboutUs Section
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
    // End AboutUs Section


    // Start Subscribe Section
    
    $('.contactimg:first').mousemove(function(e){
        over(e,$('.contactimg:first'));
    });
    
    $('.contactimg:last').mousemove(function(e){
        over(e,$('.contactimg:last'));

    });

    $('.contactimg').mouseleave(function(){
        $('.contactimg').css({
            'transform' : 'rotateY(0deg)'
        });
    });
 
    function over(e,ele){
        var WIDTH = e.target.clientWidth;
        var offsetX = ele.offset().left;
        var clientX = e.clientX;

        var x = clientX - offsetX;


        if(x < WIDTH / 2){
            $('.contactimg').css({
                'transform' : 'rotateY(10deg)'
            });
            $('.contactimg:last').css({
                'left' : '-50px'
            });
        }else{
            $('.contactimg').css({
                'transform' : 'rotateY(-10deg)'
            });
            $('.contactimg:last').css({
                'left' : '50px'
            });
        }
    }
    // End Subscribe Section
});