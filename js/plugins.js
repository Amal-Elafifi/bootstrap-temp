/* global, $, jquery, niceScroll */
$(document).ready(function(){

    // show color options on clicking the gear
    $(".gear-check").click(function(){
        $(".color-options").fadeToggle();
    })

    // change the option colors in option box
    var colorLi = $(".color-options ul li");
    colorLi.eq(0).css("backgroundColor"," rgb(204, 3, 3)").end()
           .eq(1).css("backgroundColor", "#379237").end()
           .eq(2).css("backgroundColor", "#9A1663").end()
           .eq(3).css("backgroundColor", "#F15412").end()
           .eq(4).css("backgroundColor", "#7B1FA2").end()
           .eq(5).css("backgroundColor", "#2FA4FF").end()
           .eq(6).css("backgroundColor", "#EC407A");

    colorLi.click(function(){
        $(`link[href*="theme"]`).attr("href", $(this).attr("data-value"))      
    })

    $("html").niceScroll();
    $(`.carousel`).carousel({
        interval: 6000
    });


    var scrollButton = $(".up-btn");
    // scrolling up effect
    $(window).scroll(function(){
        console.log($(this).scrollTop());
        if($(this).scrollTop() >= 700){
            scrollButton.fadeIn(500);
        }else {
            scrollButton.fadeOut(500)
        }
    })
    scrollButton.click(function(){
        $("html, body").animate({
            scrollTop: "0"
        }, 600);
    })


});

// show the loading screen
$(window).load(function(){
    $(".loading-screen").fadeOut(5000, function(){
        $("body").css("overflow", "auto");
        $(this).remove();
    });
    
})



