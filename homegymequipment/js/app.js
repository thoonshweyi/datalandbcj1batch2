// Start js Area
    // Start Header Section
    // Start navbar Section
    var navbutton = document.querySelector('.navbuttons');
    navbutton.addEventListener('click',function(){
        navbutton.classList.toggle('shows');
    });
    // End navbar Section

    // Start Video Section
    var playbtns = document.querySelector('.playbtns');
    var vdmodal = document.getElementById('vdmodal');
    playbtns.addEventListener('click',function(){
        var vdsrc = this.getAttribute('data-video-src');
        var vdsrcwithauto = vdsrc+"?autoplay=1";
        vdmodal.querySelector('iframe').src = vdsrcwithauto;
    });

    vdmodal.addEventListener('click',function(e){
        // console.log('hi');
        if(e.target === vdmodal || e.target.classList.contains('btn-close')){
            vdmodal.querySelector('iframe').src = '';
        }
    });
    // End Video Section

    // Start Counter Section
    const countervalues = document.querySelectorAll('.countervalue');

    countervalues.forEach(function(countervalue){
        const gettarget = Number(countervalue.getAttribute('data-target'));
        // console.log(gettarget,typeof gettarget);
        const incvalue = Math.ceil(gettarget/10);
        // console.log(incvalue);

        var updatecounter = function(){
            var currentvalue = Number(countervalue.textContent);
            if(currentvalue < gettarget){
                countervalue.textContent = currentvalue + incvalue;
                setTimeout(updatecounter, 500);
            }
        }
        updatecounter();
    });
    // End Counter Section

    // Start Footer Section
    document.getElementById('getyear').textContent = new Date().getUTCFullYear();


    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });
    // End Footer Section

// End js Area


// Start jQuery Area
$(document).ready(function(){

    
});
// End jQuery Area