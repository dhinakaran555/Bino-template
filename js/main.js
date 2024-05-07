$(document).ready(function () {

    // menu active
    $(".nav-item .nav-link").click(function () {
        $(".nav-item .nav-link").removeClass("active");
        $(this).addClass("active");
    });

    // drop-down click
    $(".nav-item.dropdown").click(function () {
        $(".submenu").toggleClass("active");
        $(this).toggleClass("active");
    });

    // menu-btn click
    $(document).ready(function () {
        $("#menu-btn").click(function () {
            $(".navbar").toggleClass("active");
        });
    });

    // key active
    $(document).ready(function () {
        $('.key-link').click(function () {
            var value = $(this).attr('data-filter');
            if (value == 'all') {
                $('.box3').show('1000');
            } else {
                $('.box3').hide('1000');
                $('.box3.' + value).show('1000');
            }
        });

        $(".key-item .key-link").click(function () {
            $(".key-item .key-link").removeClass("active");
            $(this).addClass("active");
        });
    });


    // scroll top 

    // hero slider
    $("#carousel1").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        // autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });

    $("#carousel2").owlCarousel({
        items: 1,
        loop: true,
        // nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });


    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // scroll

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".to-top").addClass("active");
        } else {
            $(".to-top").removeClass("active");
        }
    });

    $(".to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });





    new WOW().init();
});



