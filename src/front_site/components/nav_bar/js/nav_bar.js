
//drodown animation jquery test
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
        $(".icon").removeClass("sticky");
        $(".icon-title-wrapper").removeClass("rePrepare");
    }
    else if (scrollPos > 300) { 
        $('.nav_wrapper').addClass('sticky')
        $(".icon").addClass("hide_icon");
        $(".icon-title-wrapper").addClass("rePrepare");
    } else { 
        $('.nav_wrapper').addClass('sticky')
        $(".icon").addClass("hide_icon");
        $(".icon-title-wrapper").addClass("rePrepare");
    } 
} 