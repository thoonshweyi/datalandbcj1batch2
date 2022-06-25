$(document).ready(function(){
    

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
            $('.filters').filter('.'+getfiltervalue).show('slide',500);
            $('.filters').not('.'+getfiltervalue).hide('slide',500);
        }
    });
    // End Properties

});