"use strict";


/* page loader*/
$(window).on('load', function () {
    // Animate loader off screen
    $(".loader").fadeOut("slow");
});
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 70) { // Set position from top to add class
        $('.navbar').addClass("shrink");

        $('.navbar .navbar-brand> img').attr('src', 'assets/images/logo-dark.png');
        $('.navbar .navbar-brand.green_logo> img').attr('src', 'assets/images/logo-green-dark.png');
        $('.navbar .navbar-brand.pink_logo> img').attr('src', 'assets/images/logo-pink-dark.png');
        $('.navbar .navbar-brand.orange_logo> img').attr('src', 'assets/images/logo-orange-dark.png');
        $('.navbar .navbar-brand.orange_logo_rtl> img').attr('src', 'assets/images/logo-arabic-dark.png');
        $('.navbar .navbar-brand.yellow_logo_crypto> img').attr('src', 'assets/images/logo_dark_crypto.png');
        $('.navbar .navbar-brand.yellow_logo> img').attr('src', 'assets/images/logo-yellow-dark.png');

        $('.index-light .navbar .navbar-brand> img').attr('src', 'assets/images/logo-dark.png');
        $('.index-light .navbar .navbar-brand.green_logo> img').attr('src', 'assets/images/logo-green-dark.png');
        $('.index-light .navbar .navbar-brand.yellow_logo> img').attr('src', 'assets/images/logo-yellow-dark.png');
        $('.index-light .navbar .navbar-brand.pink_logo> img').attr('src', 'assets/images/logo-pink-dark.png');
        $('.index-light .navbar .navbar-brand.orange_logo> img').attr('src', 'assets/images/logo-orange-dark.png');

        $('.active-navbar .navbar .navbar-brand> img').attr('src', 'assets/images/logo-dark.png');
        $('.active-navbar .navbar .navbar-brand.green_logo> img').attr('src', 'assets/images/logo-green-dark.png');
        $('.active-navbar .navbar .navbar-brand.pink_logo> img').attr('src', 'assets/images/logo-pink-dark.png');
        $('.active-navbar .navbar .navbar-brand.orange_logo> img').attr('src', 'assets/images/logo-orange-dark.png');
        $('.active-navbar .navbar .navbar-brand.yellow_logo> img').attr('src', 'assets/images/logo-yellow-dark.png');

        $('.index-only-side-nav .navbar  .navbar-brand').addClass("display_none");
        $('.index-only-side-nav .navbar').removeClass("shrink");

    }
    else {
        $('.navbar').removeClass("shrink");

        $('.navbar .navbar-brand> img').attr('src', 'assets/images/logo.png');
        $('.navbar .navbar-brand.green_logo> img').attr('src', 'assets/images/logo-green.png');
        $('.navbar .navbar-brand.pink_logo> img').attr('src', 'assets/images/logo-pink.png');
        $('.navbar .navbar-brand.orange_logo> img').attr('src', 'assets/images/logo-orange.png');
        $('.navbar .navbar-brand.orange_logo_rtl> img').attr('src', 'assets/images/logo-arabic-light.png');
        $('.navbar .navbar-brand.yellow_logo_crypto> img').attr('src', 'assets/images/logo_crypto.png');
        $('.navbar .navbar-brand.yellow_logo> img').attr('src', 'assets/images/logo-yellow.png');


        $('.index-light .navbar .navbar-brand> img').attr('src', 'assets/images/logo-dark.png');
        $('.index-light .navbar .navbar-brand.green_logo> img').attr('src', 'assets/images/logo-green-dark.png');
        $('.index-light .navbar .navbar-brand.yellow_logo> img').attr('src', 'assets/images/logo-yellow-dark.png');
        $('.index-light .navbar .navbar-brand.pink_logo> img').attr('src', 'assets/images/logo-pink-dark.png');
        $('.index-light .navbar .navbar-brand.orange_logo> img').attr('src', 'assets/images/logo-orange-dark.png');

        $('.active-navbar .navbar .navbar-brand> img').attr('src', 'assets/images/logo-dark.png');
        $('.active-navbar .navbar .navbar-brand.green_logo> img').attr('src', 'assets/images/logo-green-dark.png');
        $('.active-navbar .navbar .navbar-brand.pink_logo> img').attr('src', 'assets/images/logo-pink-dark.png');
        $('.active-navbar .navbar .navbar-brand.orange_logo> img').attr('src', 'assets/images/logo-orange-dark.png');
        $('.active-navbar .navbar .navbar-brand.yellow_logo> img').attr('src', 'assets/images/logo-yellow-dark.png');

        $('.active-navbar .navbar').addClass("shrink");

        $('.index-only-side-nav .navbar  .navbar-brand').removeClass("display_none");
        $('.index-only-side-nav .navbar').removeClass("shrink");
    }
});

/* Initializing Particles Plugin */

if ($("body").hasClass("particles_special_id")) {
    window.onload = function() {
        Particles.init({
            selector: '.particles_bg',
            color: '#ffffff',
            connectParticles: true,
            sizeVariations: 7,
            maxParticles: 140,
        });
    };
}

if ($("body").hasClass("404-body-style")){
    var tpj=jQuery;
    var revapi16;
    tpj(document).ready(function() {
        if(tpj("#rev_slider_16_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_16_1");
        }else{
            revapi16 = tpj("#rev_slider_16_1").show().revolution({
                sliderType:"hero",
                jsFileLocation:"revolution/js/",
                sliderLayout:"fullscreen",
                dottedOverlay:"none",
                delay:9000,
                particles: {startSlide: "first", endSlide: "last", zIndex: "8",
                    particles: {
                        number: {value: 200}, color: {value: "#ffffff"},
                        shape: {
                            type: "circle", stroke: {width: 0, color: "#ffffff", opacity: 1},
                            image: {src: ""}
                        },
                        opacity: {value: 1, random: true, min: 0.5, anim: {enable: true, speed: 1, opacity_min: 0, sync: false}},
                        size: {value: 2, random: true, min: 0.5, anim: {enable: true, speed: 10, size_min: 1, sync: false}},
                        line_linked: {enable: false, distance: 150, color: "#ffffff", opacity: 0.4, width: 1},
                        move: {enable: true, speed: 1, direction: "none", random: false, min_speed: 1, straight: true, out_mode: "out"}},
                    interactivity: {
                        events: {onhover: {enable: true, mode: "bubble"}, onclick: {enable: false, mode: "repulse"}},
                        modes: {grab: {distance: 400, line_linked: {opacity: 0.5}}, bubble: {distance: 400, size: 0, opacity: 1}, repulse: {distance: 200}}
                    }
                },
                navigation: {
                },
                responsiveLevels:[1240,1024,778,480],
                visibilityLevels:[1240,1024,778,480],
                gridwidth:[1240,1024,778,480],
                gridheight:[868,768,960,720],
                lazyType:"none",
                parallax: {
                    type:"mouse",
                    origo:"slidercenter",
                    speed:2000,
                    levels:[2,4,6,4,5,30,35,40,45,46,47,48,49,50,51,55],
                },
                shadow:0,
                spinner:"off",
                autoHeight:"off",
                fullScreenAutoWidth:"off",
                fullScreenAlignForce:"off",
                fullScreenOffsetContainer: "",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    disableFocusListener:false,
                }
            });
        }

        RsParticlesAddOn(revapi16);
    });	/*ready*/
}


//Contact Us
$("#submit_btn").click(function() {
    //get input field values
    //alert("hello");
     $('#submit_handle').click();
    var user_name = $('input[name=name]').val();
    var user_email = $('input[name=email]').val();
    //var user_subject      = $('input[name=subject]').val();
    var user_message = $('textarea[name=message]').val();

    //simple validation at client's end
    var post_data, output;
    var proceed = true;
    if (user_name == "") {
        proceed = false;
    }
    if (user_email == "") {
        proceed = false;
    }

    if (user_message == "") {
        proceed = false;
    }

    //everything looks good! proceed...
    if (proceed) {
        //data to be sent to server
        post_data = { 'userName': user_name, 'userEmail': user_email, 'userMessage': user_message };

        //Ajax post data to server
        $.post('contact.php', post_data, function(response) {

            //load json data from server and output message
            if (response.type == 'error') {
                output = '<div class="alert-danger" style="padding:10px; margin-bottom:25px;">' + response.text + '</div>';
            } else {
                output = '<div class="alert-success" style="padding:10px; margin-bottom:25px;">' + response.text + '</div>';

                //reset values in all input fields
                $('.form_class input').val('');
                $('.form_class textarea').val('');
            }

            $("#result").hide().html(output).slideDown();
        }, 'json');

    }
});

//reset previously set border colors and hide all message on .keyup()
$(".form_class input, .form_class textarea").keyup(function() {
    $("#result").slideUp();
});

$(".scroll").on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({scrollTop: $(this.hash).offset().top}, 1000);
});


//scroll nav
$(window).on('scroll',function () {
    if($(this).scrollTop()  > 200){
        $('.special-nav').addClass("fixing_navbar_after_scrolling");
        $('.special-nav').removeClass("special_nav_styling");
    }
    else {
        $('.special-nav').removeClass("fixing_navbar_after_scrolling");
        $('.special-nav').addClass("special_nav_styling");
    }
})

/* Countdown Timer */


// fixing nav on top on scrolliing
var $fixednav = $(".bottom_navbar .navbar");
$(window).on("scroll",function () {
    var $heightcalc = $(window).height() - $fixednav.height();
    if($(this).scrollTop() > $heightcalc){
        $fixednav.addClass("navbar-fixed-top");
        $fixednav.addClass("bottom_auto");
    }else {
        $fixednav.removeClass("navbar-fixed-top");
        $fixednav.removeClass("bottom_auto");
    }
});

// Push Menus
var $menuLeft = $(".pushmenu-left");
var $menuRight = $(".pushmenu-right");
var $toggleleft = $(".menu_bars.left");
var $toggleright = $(".menu_bars.right");
$toggleright.on("click", function() {
    $('.menu_bars').toggleClass("active");
    $menuRight.toggleClass("pushmenu-open");
    $("body").toggleClass("pushmenu-push-toLeft");
    $(".navbar").toggleClass("navbar-right_open");
    return false;
});

$('.push_nav li a').on('click', function(){
    $toggleright.toggleClass("active");
    $menuRight.toggleClass("pushmenu-open");
    $("body").toggleClass("pushmenu-push-toLeft");
    $(".navbar").toggleClass("navbar-right_open");
    return true;
});

// Customer Feedback Slider
var swiper = new Swiper('.main_slider', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
});



// Customer Feedback Slider
var swiper = new Swiper('.customer_feedback_slider', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
});



// Columned Portfolio Slider
var swiper = new Swiper('.parallax-columned-slider-inner', {
    slidesPerView: 4,
    spaceBetween: 0,

    breakpoints: {
        1250: {
            slidesPerView: 3,
        },
        1050: {
            slidesPerView: 2,
        },
        550: {
            slidesPerView: 1,
        }
    }
});

// Personal Main Slider
var swiper = new Swiper('.personal_slider', {

});

/* Partners Slider  */
var swiper = new Swiper('.sponsors_slider', {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    autoplay: 2000,
    // Responsive breakpoints
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    },
});



// Blog Slider
var swiper = new Swiper('.blog_slider_main', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    loop: true,
    breakpoints: {
        1050: {
            slidesPerView: 2,
        },
        550: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});

// Team Slider
var swiper = new Swiper('.team_slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        1050: {
            slidesPerView: 2,
        },
        550: {
            slidesPerView: 1,
            spaceBetween: 30,
        }
    }

});

//scroll sections on clicking Links

$(".scroll").on('click', function(event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 750);
});

/* Count down Timer */
/* Countdown Timer */

if ($("body").hasClass("countdown")){
    $('.count_down').downCount({
        date: '01/2/2019 12:00:00',
        offset: +10
    }, function () {
        // alert('WOOT WOOT, done!');
    });
};


// gradient layout

function checkGradeient() {
    //gradient animations
    var colors = new Array(
        [62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]);

    var step = 0;
    //color table indices for:
    // current color left
    // next color left
    // current color right

    // next color right
    var colorIndices = [0, 1, 2, 3];

    //transition speed
    var gradientSpeed = 0.002;

    function updateGradient() {

        if ($ === undefined) return;

        var c0_0 = colors[colorIndices[0]];
        var c0_1 = colors[colorIndices[1]];
        var c1_0 = colors[colorIndices[2]];
        var c1_1 = colors[colorIndices[3]];

        var istep = 1 - step;
        var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
        var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
        var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
        var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

        var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
        var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
        var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
        var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

        $('#gradient').css({
            background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
        }).css({
            background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
        });

        step += gradientSpeed;
        if (step >= 1) {
            step %= 1;
            colorIndices[0] = colorIndices[1];
            colorIndices[2] = colorIndices[3];

            //pick two new target color indices
            //do not pick the same as the current one
            colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
            colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

        }
    }

    setInterval(updateGradient, 10);
}

if ($('body').hasClass("gradient_version")) {
    checkGradeient()
}



