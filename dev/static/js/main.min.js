$(document).ready(function () {
    svg4everybody({});

    //
    $('.video__link').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,
        fixedContentPos: true
    });
    // 

    $(".rules__mask").slideDown(9000, function() {
        $("#load_limit").slideDown(500);
    }); 
    
});
new WOW().init();