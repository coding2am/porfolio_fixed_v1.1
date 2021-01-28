$(document).ready(function(){
    //scroll to fill color in nav
    $(window).scroll(function(){
        
        if(this.scrollY > 20)
        {
            $(".navigation_bar").addClass("sticky");
        }
        else
        {
            $(".navigation_bar").removeClass("sticky");
        }
        if(this.scrollY > 500)
        {
            $(".scroll-up-btn").addClass("show");
        }
        else{
            $(".scroll-up-btn").removeClass("show");
        }
    });

    // slide-up-script
    $(".scroll-up-btn").click(function(){
        $('html').animate({scrollTop:0});
    });

    // typing-script
    var typed = new Typed(".typing",{
        strings:["Web Developer","UI/UX Designer","Active Coder","Bat Man"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    var typed = new Typed(".typing-2",{
        strings:["Free Lancer","Web Developer","UI/UX Designer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });



    //toggle menu nav bar
    $('.menu-btn').click(function(){
         $(".navigation_bar .menu").toggleClass("active");
         $(".menu-btn i").toggleClass("active");
    });
   
    //owl carousel
    $(".carousel").owlCarousel({
        margin:20,
        loop:true,
        // autoplayTimeOut: 100,
        // autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
            
        }
    });
});