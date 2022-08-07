$(document).ready(function(){
    // console.log('hi');


    // Start Header Section
        // Start Banner Section
            // $('.carousel').carousel({
            //     interval : 1000
            // });
    // End Banner Section

    // End Header Section

    // Start Info Section
    $(window).scroll(function(){
        let getscrollpoint = $(this).scrollTop();
        

        if(getscrollpoint >= 220){
            $('.infotexts').addClass('fromlefts');
            $('.infopics').addClass('fromrights');
        }else{
            $('.infotexts').removeClass('fromlefts');
            $('.infopics').removeClass('fromrights');
        }
    });
    // End Info Section

    // Start ADV Section
    $('#videos').click(function(){
        var getmodal = $(this).data('bs-target');
        var getvideosrc = $(this).data('video');
        var vidiorulwithauto = getvideosrc + "?autoplay=1";

        $(getmodal + ' iframe').attr('src',vidiorulwithauto);
    
    
        //close btn
        $(getmodal + ' button.btn-close').click(function(){
            $(getmodal + ' iframe').attr('src',getvideosrc);
        });

        //overlay
        $(getmodal).click('hidden.bs.modal',function(){
            $(getmodal + ' iframe').attr('src',getvideosrc);
        });
    });
    // End ADV Section

    // Start Premises
    $('#lightslider').lightSlider({
        // auto: true,
        item: 4,
        loop: true,
        slideMove: 1,
        speed: 600,
    }).play();
    // End Premises


    // Start Pricing 
    $(window).scroll(function(){
        let getscroll = $(this).scrollTop();
        // console.log(getscroll);

        if(getscroll >= 2450){
            $('.cardones').addClass('movelefts');
            $('.cardtwos').addClass('movebottoms');
            $('.cardthrees').addClass('moverights');
        }else{
            $('.cardones').removeClass('movelefts');
            $('.cardtwos').removeClass('movebottoms');
            $('.cardthrees').removeClass('moverights');
        }
    });
    // End Pricing


    // Start Join Us Section
    $('#accordion').accordion();
    // End Join Us Section


    // Start Footer Section
    $('#getyear').text(new Date().getUTCFullYear());
    // End Footer Section


    // Start Progress

    
    $(window).scroll(function(){
        var getprogress = $('#progresses');
        var getprogressval = $('#progressvalues');

        var getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        // By Jquery
        // var getscrollheight = $(document).height();
        // // console.log(getscrollheight);
        // var getclientheight = $(window).height();
        // // console.log(getclientheight);
        // var calcheight = getscrollheight - getclientheight;
        // // var getfinalheight = Math.round(getscrolltop * 100 / calcheight);
        // var getfinalheight = Math.round(getscrolltop / calcheight * 100);
       
        // By Javascript
        var getscrollheight = document.documentElement.scrollHeight;
        // console.log(getscrollheight);
        var getclientheight = document.documentElement.clientHeight;
        // console.log(getclientheight);
        var calcheight = getscrollheight - getclientheight;
        var getfinalheight = Math.round(getscrolltop / calcheight * 100);


        getprogressval.text(`${getfinalheight}%`);
        getprogress.css({
            'background' : `conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
        });

        // st * 100 / (pjheight - cvheight)
    });




    



    // End Progress
});
