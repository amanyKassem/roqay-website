(function ($) {
    "use strict";
    $('.aside-menu-link ').on('click', function () {
        $('aside').toggleClass('closed', 1000)
    });
    $('aside').on('click', function (e) {
        if (e.target !== this)
            return;
        $(this).addClass('closed', 1000)
    });
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 0) {
            $(".main-nav ").addClass("sticky-menu").animate({
                top: 0,
            }, 4000)
        } else {
            $(".main-nav ").removeClass("sticky-menu").animate({
                top: 0,
            }, 4000)
        }
    });
    let rtl = !1;
    if ($("body").css("direction") == "rtl") {
        rtl = !0
    }
    $('.partners-slider').owlCarousel({
        loop: !0,
        margin: 0,
        rtl: rtl,
        nav: !0,
        dots: !1,
        autoplay: !0,
        autoplayTimeout: 2000,
        autoplayHoverPause: !1,
        items: 3,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 3,
            }
        },
        navText: [" <i class='las la-angle-left'></i> ", " <i class='las la-angle-right'></i> ", ],
    });
    $('.services-slider').owlCarousel({
        loop: !0,
        margin: 0,
        rtl: rtl,
        dots: !0,
        nav: !0,
        items: 3,
        autoplay: !0,
        autoplayTimeout: 2000,
        autoplayHoverPause: !1,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                dots: !1
            },
            600: {
                items: 1,
            },
            1000: {
                items: 3,
            }
        },
        navText: [" <i class='las la-angle-left'></i> ", " <i class='las la-angle-right'></i> ", ],
    });
    $('.products-slider , .testimonial-slider').owlCarousel({
        loop: !0,
        margin: 0,
        center: !0,
        rtl: rtl,
        dots: !0,
        nav: !0,
        items: 1,
        autoplay: !0,
        autoplayTimeout: 2000,
        autoplayHoverPause: !1,
        navText: [" <i class='las la-angle-left'></i> ", " <i class='las la-angle-right'></i> ", ],
        responsive: {
            0: {
                dots: !1
            },
        },
    });
    $('.projectSlider').owlCarousel({
        loop: !0,
        margin: 20,
        center: !0,
        rtl: rtl,
        dots: !0,
        nav: !0,
        items: 3,
        autoplay: !0,
        autoplayTimeout: 2000,
        autoplayHoverPause: !1,
        navText: [" <i class='las la-angle-left'></i> ", " <i class='las la-angle-right'></i> ", ],
        responsive: {
            0: {
                items: 1,
                dots: !1
            },
            600: {
                items: 2,
                center: !1
            },
            1000: {
                items: 3,
            }
        },
    });
    var scrollButton = $("#scroll-top");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 700) {
            scrollButton.fadeIn(1000)
        } else {
            scrollButton.fadeOut(1000)
        }
    });
    scrollButton.on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 600)
    });

    function initiateAnimation() {
        AOS.init({
            easing: 'ease-in-out-sine',
            duration: 800,
        })
    }
    initiateAnimation();
    $(".inputFileCustom").on('change', function (e) {
        var fileName = e.target.files[0].name;
        $(this).parent().find(".inputFileCustomLabel").find("span").text(fileName)
    })
})(jQuery)