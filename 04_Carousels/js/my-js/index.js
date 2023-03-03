$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items : 4,
        margin : 12,
        loop : true,
        nav : true,
        autoplay : true,
        autoplayTimeout : 2000,
        stagePadding : 50,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });
});