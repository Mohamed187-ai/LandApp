$(window).on("load", function(){
    $(".preloader").fadeOut();
});
$(document).ready(function() {
    // navbar shrink
    $(window).on("scroll", function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink");
        }
        else{
            $(".navbar").removeClass("navbar-shrink");
        }
    });
    // video Popup
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function(){
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src", "");
        }
        else{
            $(".video-popup").addClass("open");
            if($("#player-1").attr("src"=="")){
                $("#player-1").attr("src", videoSrc);
            }
        }
    })
    // feature carousel
    $('.features-carousel').owlCarousel({
        loop:true,
        margin: 0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });
    // screen carousel
    $('.screen-carousel').owlCarousel({
        loop:true,
        margin: 0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    });
    // TEST CAROUSEL
    $('.test-carousel').owlCarousel({
        loop:true,
        margin: 0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });
    // team Carousel
    $('.team-carousel').owlCarousel({
        loop:true,
        margin: 0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });
    // Scrollit
    $.scrollIt({
        topOffset: -50
    });
    // navbar collapse
    $(".nav-link").on("click", function(){
        $(".navbar-collapse").collapse("hied");
    });
    // dark mode
    function toggleTheme(){
        if(localStorage.getItem("Mo") !== null){
            if(localStorage.getItem("Mo") == "dark"){
                $("body").addClass("dark");
            }
            else{
                $("body").removeClass("dark");
            }
        }
        updateIcon();
    }
    toggleTheme();
    $(".toggle-theme").on("click", function(){
        $("body").toggleClass("dark");
        if($("body").hasClass("dark")){
            localStorage.setItem("Mo", "dark");
        }
        else{
            localStorage.setItem("Mo", "light");
        }
        updateIcon();
    });
    function updateIcon(){
        if($("body").hasClass("dark")){
            $(".toggle-theme i").removeClass("fa-cloud-moon");
            $(".toggle-theme i").addClass("fa-sun");
        }else{
            $(".toggle-theme i").addClass("fa-cloud-moon");
            $(".toggle-theme i").removeClass("fa-sun");
        }
    }
});