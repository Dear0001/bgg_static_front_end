AOS.init({
    disable: function () {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
    },
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 100,
    delay: 200,
    duration: 1000,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
});
$(document).ready(function () {
    var currentSlideIndex = 0;
    var slideCount = 0;
    var isNext = false;

    $(".waterless-formula-slide").on(
        "init reInit",
        function (event, slick) {
            currentSlideIndex = 0;
            slideCount = slick.slideCount;

            var firstSlide = $(this).find(
                ".slick-list .slick-track [data-slick-index='" +
                currentSlideIndex +
                "']"
            );
            firstSlide.find(".card-body")
                .addClass("_fadeInUp")
                .css("opacity", 1);

            checkDisabledPrevButton();
            if (!isMobile()) {
                $(this).find(".slick-dots li")
                .attr("data-aos", "waterless-formula-move-50")
                .attr("data-aos-anchor","#waterless_01")
                .attr("data-aos-delay", "200")
                .attr("data-aos-once", "true");
            }
        }
    );

    $(".waterless-formula-slide").on(
        "afterChange",
        function (event, slick, _currentSlideIndex) {
            currentSlideIndex = _currentSlideIndex;

            checkDisabledNextButton();
            checkDisabledPrevButton();
            rotateLeaves();
        }
    );

    $(".waterless-formula-slide").on(
        "beforeChange",
        function (event, slick, currentSlide, nextSlide) {
            var oldCurrentSlideElement = $(this).find(
                ".slick-list .slick-track .slick-slide"
            );
            oldCurrentSlideElement.find(".card-body")
            .addClass('fade-out')
            .removeClass("_fadeInUp");
            
            var newCurrentSlideElement = isNext ? $(this).find(
                ".slick-list .slick-track .slick-active + div"
            ): $(this).find(".slick-list .slick-track div[data-slick-index='"+ nextSlide +"']");

            newCurrentSlideElement
                .find(".card-body")
                .removeClass('fade-out')
                .addClass("_fadeInUp");

            if (nextSlide === slideCount - 1) {
                $(this)
                    .find(".slick-list .slick-track")
                    .delay(1000)
                    .addClass("is-last-slide");

                return;
            }

            $(this)
                .find(".slick-list .slick-track")
                .delay(1000)
                .removeClass("is-last-slide");
        }
    );

    $(".waterless-formula-slide").slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        swipe: true,
        arrows: false,
        useCSS: true,
    });

    function rotateLeaves() {
        var currentSlide = currentSlideIndex + 1;

        if (currentSlide % 2 === 0) {
            $(".wrap-leaves")
                .find("img")
                .addClass("rotateYLeftRight")
                .removeClass("rotateYRightLeft");

            return;
        }

        $(".wrap-leaves")
            .find("img")
            .removeClass("rotateYLeftRight")
            .addClass("rotateYRightLeft");
    }

    function checkDisabledNextButton() {
        if (currentSlideIndex >= slideCount - 1) {
            $("#custom_slick_next").addClass("disabled");

            return;
        }

        $("#custom_slick_next").removeClass("disabled");
    }

    function checkDisabledPrevButton() {
        if (currentSlideIndex === 0) {
            $("#custom_slick_prev").addClass("disabled");

            return;
        }

        $("#custom_slick_prev").removeClass("disabled");
    }

    function isMobile() {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
    }

    $("#custom_slick_next").click(function () {
        if (currentSlideIndex < slideCount - 1) {
            isNext = true;
            $(".waterless-formula-slide").slick("slickNext");
        }
    });

    $("#custom_slick_prev").click(function () {
        if (currentSlideIndex > 0) {
            isNext = false;
            $(".waterless-formula-slide").slick("slickPrev");
        }
    });

    $('.indroduction-home-banner .arrow-down').on('click', function(e) {
        $('html, body').animate({
            scrollTop: $(window).height() + 61
        }, 1200);
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var topIngredientText = $("#custom_id_05").offset().top;

        if(scroll >= topIngredientText && (!$("#custom_id_01").hasClass('ingredient-aos-animate')) && (!$("#custom_id_01").hasClass('ingredient-aos-animate-move-down'))) {
            setTimeout(function(){
                $("#custom_id_01").addClass("ingredient-aos-animate");
                $("#aos_indredient_slick_05").addClass("ingredient-aos-animate");
                setTimeout(() => {
                    $("#custom_id_02").addClass("ingredient-aos-animate")
                    setTimeout(function(){
                        $("#custom_id_04").addClass("ingredient-aos-animate")
                        setTimeout(() => {
                            var height = $("#aos_indredient_02").height() - 600;
                            $("#aos_indredient_03").addClass("ingredient-aos-animate");
                            $("#aos_indredient_02").css("height", height + "px");
                        }, 250);
                    }, 150);
                }, 100)
            }, 0);
        } else if(scroll < topIngredientText && $("#custom_id_01").hasClass('ingredient-aos-animate')) {
            setTimeout(function(){
                $("#custom_id_01").addClass("ingredient-aos-animate-move-down").removeClass("ingredient-aos-animate");
                $("#aos_indredient_slick_05").addClass("ingredient-aos-animate-move-down").removeClass("ingredient-aos-animate");
                setTimeout(() => {
                    $("#custom_id_02").addClass("ingredient-aos-animate-move-down").removeClass("ingredient-aos-animate")
                    setTimeout(function(){
                        $("#custom_id_04").addClass("ingredient-aos-animate-move-down").removeClass("ingredient-aos-animate")
                        setTimeout(() => {
                            $("#aos_indredient_03").addClass("ingredient-aos-animate-move-down").removeClass("ingredient-aos-animate");
                            var height = $("#aos_indredient_02").height() + 600;
                            $("#aos_indredient_02").css("height", height + "px");
                        }, 250);
                    }, 150);
                }, 100)
            }, 0);
        } 
    }); 
});