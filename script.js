$(document).ready(function(){
    $(window).scroll(function(){
        
            $('.navbar').addClass("sticky");
       
        
        
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    
});