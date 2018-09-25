$(document).ready(function () {

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll > 300) {
            $("nav").css("background", "grey");
            $("nav>ul>li>a").css("color" , "white");
            $("#logo").attr("src","images/logo-white.png");
        }
        else{
            $("nav").css("background", "transparent");
            $("nav>ul>li>a").css("color", "black");
            $("#logo").attr("src", "images/logo-dark.png");
        }
    })


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll > 500) {
            $("#myBtn").css("display", "block");
            
        } else {
            $("#myBtn").css("display", "none");
        }
    })

    $('#card-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('#card-carousel').on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });

    $('#carouselslide').owlCarousel({
        loop: true,
        rtl: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $('#carouselslide').on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });


    $('#team-carousel').owlCarousel({
        loop: true,
        rtl: true,
        margin: 20,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $('#team-carousel').on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });


    $(".blog-card").hover(function () {
        $("a", this).css("color", "yellow");
        $("img", this).css("transform", "scale(" + 1.1 + ")");
    }, function () {

        $("a", this).css("color", "black");
        $("img", this).css("transform", "scale(" + 1 + "," + 1 + ")");
    });

    $(".label").hover(function () {
            $(this).css("background-color", "yellow", "important");
            $(this).css("color", "white");
        }, function () {
            $(this).css("background-color", "white", "important");
            $(this).css("color", "black");

        }

    )

    $("[data-fancybox]").fancybox({
        arrows: true,
        infobar: true,
        thumbs: false,
    });
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}