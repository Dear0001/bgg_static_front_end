
// drodown animation jquery test
 // jquery with for search bar mobile
 $(".fa").click(function(){
    $(".icon").toggleClass("active");
    $("input[type=text]").toggleClass("active");
})
//scroll to the top hide icon
jQuery(document).ready(function() { 
    fadeMenuWrap(); 
    jQuery(window).scroll(fadeMenuWrap);
});
function fadeMenuWrap() { 
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop; 
    if(scrollPos==0){
        $(".icon").removeClass("hide_icon");
        // $(".icon").removeClass("sticky");
        $(".icon-title-wrapper").removeClass("rePrepare");
        $(".category_img").removeClass("hide");
        $(".category_pro_img").addClass("hide");
        $('.nav_bar_component').removeClass('nav_bar_component_scroll')
    }
    else if (scrollPos > 0) { 
        $('.nav_bar_component').addClass('nav_bar_component_scroll')
        // $('.nav_bar_component').addClass('sticky')
        $(".icon").addClass("hide_icon");
        $(".icon-title-wrapper").addClass("rePrepare");
        $(".category_img").addClass("hide");
        $(".category_pro_img").removeClass("hide");
    } else { 
        $('.nav_bar_component').addClass('nav_bar_component_scroll')
        // $('.nav_bar_component').addClass('sticky')
        $(".icon").addClass("hide_icon");
        $(".icon-title-wrapper").addClass("rePrepare");
        $(".category_img").addClass("hide");
        $(".category_pro_img").removeClass("hide");
    } 
} 