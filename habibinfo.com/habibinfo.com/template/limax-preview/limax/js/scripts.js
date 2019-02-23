(function($) {
    'use strict';

    // All JavaScript pluging initialization code here

        $(".scroll-btn").on('click', function() {
        $('html,body').animate({
            scrollTop: $("#about").offset().top
        },1250, 'easeInOutExpo');
    });

    //Scroll to bottom
    $(function() {
        $(".navbar-nav a, .scroll-icon a, .button-group a").bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // Navigation hide on scroll on mobile screen
    $(window).on('scroll', function() {
        $('.navbar-collapse').collapse('hide')
    });

    // Portfolio section 
    $('.portfolio-section').imagesLoaded(function() {
        // Portfolio activation
        var $grid = $('.portfolio-grid').isotope({
            itemSelector: '.portfolio-item',
            percentPosition: true,
        });

        // Portfolio filtering activation
        $('.portfolio-filter li a').on('click', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        // filter menu class addition  
        $('.portfolio-filter li').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

        // LOAD MORE BUTTON FOR PORTFOLIO
        $('.pagination-area').on('click', '.load-more', function(event) {
            $('.portfolio-item').removeClass('hidden');
            var $grid = $('.portfolio-grid').isotope();
            $(this).hide();
            $('.pagination-area .load-more-wrapper').append('<a class="button btn-white-left btn-white-bg" href="javascript:void(0)">No More Items</a>')
            event.preventDefault();
        });
    });

    /* ---------------------------------------------
     MASONRY STYLE BLOG.
    ------------------------------------------------ */
    var $blogContainer = $('.blog-masonry');
    if ($.fn.imagesLoaded && $blogContainer.length > 0) {
        imagesLoaded($blogContainer, function() {
            setTimeout(function() {
                $blogContainer.isotope({
                    itemSelector: '.post-grid-item',
                    layoutMode: 'masonry'
                });
            }, 500);

        });
    }

    /*------------------------------------------------
     Magnific pop-up for video gallery section
    -------------------------------------------------- */
    $('.vendorx-gallery').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        gallery: {
            enabled: true,
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('data-title');
            }
        }
    });

    /*------------------------------------------------
     Magnific pop-up for video gallery section
    -------------------------------------------------- */
    $('.post-thumbnail a').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        gallery: {
            enabled: true,
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('data-title');
            }
        }
    });

    /*------------------------------------------------
     Magnific pop-up for video gallery section
    -------------------------------------------------- */
    $('.portfolio-thumbnail-wrapper a').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        gallery: {
            enabled: true,
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('data-title');
            }
        }
    });

    /* ---------------------------------------------
     Slider area
    --------------------------------------------- */
    $(".navigation-style-1").slick({
        autoplay: true,
        speed: 1000,
        autoplayspeed: 10000,
        dots: true,
        arrows: false,
        easing: 'linear',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    /* ---------------------------------------------
     Client Logo Slide
    --------------------------------------------- */
    $('.featured-client-list').slick({
        dots: false,
        speed: 10000,
        autoplaySpeed: 50,
        arrows: false,
        autoplay: true,
        loop: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                speed: 500,
                autoplaySpeed: 1000
            }
        }]
    });

    /* ---------------------------------------------
     Testimonial Slide
    --------------------------------------------- */
    $('.testimonial-slide').slick({
        dots: false,
        arrows: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        infinite: true,
        loop: true,
        slidesToShow: 2,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                speed: 1000,
                autoplaySpeed: 3000
            }
        }]
    });

    /* ---------------------------------------------
     Single Post Slide
    --------------------------------------------- */
    $('.post-thumbnail').slick({
        dots: false,
        arrows: true,
        autoplay: false,
        loop: true,
        infinite: true,
        slidesToShow: 1,
        fade: true,
        easing: 'linear'
    });

    /* ---------------------------------------------
     SIngle Portfolio Slide
    --------------------------------------------- */
    $('.portfolio-thumbnail-wrapper').slick({
        dots: false,
        arrows: true,
        autoplay: false,
        loop: true,
        infinite: true,
        slidesToShow: 1,
        fade: true,
        easing: 'linear'
    });

    /*--------------------------------
    Video slider
    -----------------------------------*/
    $('#video-slide').YTPlayer({
        fitToBackground: true,
        videoId: 'XeyZIAGmcy0',
        playerVars: {
            modestbranding: 0,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            branding: 0,
            rel: 0,
            autohide: 0,
            start: 0
        }
    });
    /*--------------------------------
    Video slider 2
    -----------------------------------*/
    $('#video-slide-2').YTPlayer({
        fitToBackground: true,
        videoId: 'KQj2oGReqJU',
        playerVars: {
            modestbranding: 0,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            branding: 0,
            rel: 0,
            autohide: 0,
            start: 0
        }
    });

    // WoW JS Activation
    var wowInit = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        scrollContainer: null
    });
    wowInit.init();

    /* ---------------------------------------------
     counter activation
    --------------------------------------------- */
    $('.counter').counter();

    /* ---------------------------------------------
     Back to Top
    --------------------------------------------- */
    $('body').append('<a id="back-to-top" class="to-top-btn" href="#"><i class="ti-arrow-up"></i></a>');
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('to-top-show');
                } else {
                    $('#back-to-top').removeClass('to-top-show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#back-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 1250, 'easeInOutExpo');
        });
    };

})(jQuery)