$(function () {
    $('#select-oak').hover(function () {
        $('.selector-block').css('grid-template-columns', '2fr 1fr 1fr 1fr');
    }, function () {
        $('.selector-block').css('grid-template-columns', '1fr 1fr 1fr 1fr');
    });

    $('#select-cherry').hover(function () {
        $('.selector-block').css('grid-template-columns', '1fr 2fr 1fr 1fr');
    }, function () {
        $('.selector-block').css('grid-template-columns', '1fr 1fr 1fr 1fr');
    });

    $('#select-spruce').hover(function () {
        $('.selector-block').css('grid-template-columns', '1fr 1fr 2fr 1fr');
    }, function () {
        $('.selector-block').css('grid-template-columns', '1fr 1fr 1fr 1fr');
    });

    $('#select-pine').hover(function () {
        $('.selector-block').css('grid-template-columns', '1fr 1fr 1fr 2fr');
    }, function () {
        $('.selector-block').css('grid-template-columns', '1fr 1fr 1fr 1fr');
    });

    var isSelected = false;

    $(document).click(function (e) {
        // something besides window is clicked
        if (!$(".info-window").is(e.target) && $(".info-window").has(e.target).length == 0 && isSelected == true) {
            $(".info-window").hide();

            $("body :not(.info-window):not(.background-head)").css("filter", "none");
            $(".background-image").css("filter", "none");
            isSelected = false;

        } else if ($("#about-link").is(e.target)) {
            $(".info-window").css("display", "block");

            $("#background-image").css("filter", "blur(10px)");
            // $("#background-image").css("transform", "scale(1.01)");

            // $("body :not(.info-window):not(.info-window h3):not(.selector-tag)").css("filter", "blur(5px)");
            // $("#selector-tag-text").css("filter", "blur(5px)");
            isSelected = true;
        }
    });

    /*     $(document).click(function (e) {
        if (!$(".info-window").is(e.target) && $(".info-window").has(e.target).length == 0 && isSelected == true) {
            $(".info-window").hide();

            $("body :not(.info-window):not(.background-head)").css("filter", "none");
            $(".background-head").css("filter", "none");
            isSelected = false;

        } else if ($("#select-oak").is(e.target)) {
            $(".info-window").css("display", "block");

            $("body :not(.info-window):not(.selector-tag):not()").css("filter", "blur(5px)");
            $("#selector-tag-text").css("filter", "blur(5px)");
            isSelected = true;
        }
    }); */

})