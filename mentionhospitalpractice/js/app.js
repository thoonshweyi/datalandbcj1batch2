$(document).ready(function(){
    // Start Banner Section
    $('.carousel').carousel({
        interval : 1000
    });
    // End Banner Section


    // Start Info Section
    $(window).scroll(function(){
        var getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);
        if(getscrolltop >= 400){
            $('.infotexts').addClass('fromlefts');
            $('.infoimgs').addClass('fromrights');
        }else{
            $('.infotexts').removeClass('fromlefts');
            $('.infoimgs').removeClass('fromrights');
        }
        
    });
    // End Info Section

    // Start Video Section
    $('#playbtns').click(function(){
        var modal = $(this).data('bs-target');
        var vdsrc = $(this).data('video');
        var vdsrcwithauto = vdsrc+"?autoplay=1";

        $(modal + " iframe").attr('src',vdsrcwithauto);


        //modal dismiss event
        $(modal).click('hidden-bs-modal',function(){
            $(modal + " iframe").attr('src','');
        });
    });


    // End Video Section

    // Start Premises Section
    $('#lightslider').lightSlider({
        auto : true,
        item : 4,
        loop : true,
        speed : 600,
        slideMove : 1
    });
    // End premises Section

    // Start Pricing Section
    $(window).scroll(function(){
        var getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        if(getscrolltop >= 2400){
            $('.cardones').addClass('movelefts');
            $('.cardtwos').addClass('movebottoms');
            $('.cardthrees').addClass('moverights');
        }else{
            $('.cardones').removeClass('movelefts');
            $('.cardtwos').removeClass('movebottoms');
            $('.cardthrees').removeClass('moverights');
        }
    });
    // End Pricing Section

    // Start Join Us Section
    $('#accordion').accordion();
    // End Join Us Section

    // Start Footer Section
    $('#getyear').text(new Date().getUTCFullYear())
    // End Footer Section


    // Start Progress
    $(window).scroll(function(){
        // cp = st/(pjj - clih);
        
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(document).height();
        var clientHeight = $(window).height();

        var calheight = scrollHeight - clientHeight;

        var currentpoint = Math.round((scrollTop / calheight) * 100);

        // console.log(currentpoint);

        $('.progressvalues').text(currentpoint+"%");
        $('.progresses').css({
            'background' : `conic-gradient(steelblue ${currentpoint}%,#fff ${currentpoint}%)`
        });
    });
    // End Progress
});