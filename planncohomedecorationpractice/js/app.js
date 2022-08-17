$(document).ready(function(){
    
    // Start BackToTop Btn
    $('.back2topbtn').hide();

    $(window).scroll(function(){
        var getscrolltop = $(this).scrollTop();
        
        if(getscrolltop >= 370){
            $('.back2topbtn').fadeIn(1000);
        }else{
            $('.back2topbtn').fadeOut(1000);
        }
    });
    // End BackToTop Btn

    // Start Header
        // Start navbar

        $('.navbuttons').click(function(){
            $(this).toggleClass('crossxs');
        });

        $(window).scroll(function(){
            var getscrolltop = $(this).scrollTop();
            // console.log(getscrolltop);

            if(getscrolltop >= 200){
                $('.navbar').addClass('navmenus');
            }else{
                $('.navbar').removeClass('navmenus');
            }
        });
        // End navbar

    // End Header


    // Start Properties
    $('.perpertylists').click(function(){
        $(this).addClass('activeitems').siblings().removeClass('activeitems');

        var getfiltervalue = $(this).attr('data-filter');
        // console.log(filtervalue);

        if(getfiltervalue === 'all'){
            $('.filters').show('slide',500);
        }else{
            $('.filters').hide();
            $('.filters').filter('.'+getfiltervalue).show('slide',500);
            // $('.filters').not('.'+getfiltervalue).hide('slide',500);
        }
    });

    //for image overlay (or) lightbox2
    // https://lokeshdhakar.com/projects/lightbox2/#getting-started
    // #add data-lightbox = '' and data-title = '' inside a tag

    lightbox.option({
        positionFromTop : 200
    })

    // End Properties



    // Start Adv Section
    $(window).scroll(function(){
        var getscrolltop = $(this).scrollTop();
        console.log(getscrolltop);
        if(getscrolltop >= 1100){
            $('.advimages').addClass('fromlefts');
            $('.advtexts').addClass('fromrights');
        }else{
            $('.advimages').removeClass('fromlefts');
            $('.advtexts').removeClass('fromrights');

        }

    });
    // End Adv Section

    // Start Footer Section
    $('#getyear').text(new Date().getUTCFullYear());

    // End Footer Section

});