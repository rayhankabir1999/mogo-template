$(window).scroll(function(){

    var scrolling = $(this).scrollTop();
    if(scrolling > 1){
    
        $(".navbar").addClass("nav_bg");
    
    }else{
        $(".navbar").removeClass("nav_bg");
    }
    
    });
    


// counter up
$('.count').counterUp({
    delay: 5,
    time: 2000
});

// slick slider
$('.team_slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1                              
            }
        }
    ]
});