$(function () {

    let medQMed = window.matchMedia("(max-width: 1000px)");

    var tagW2 = $('.tags').width();

    $('.tags a').css("width", `${tagW2}px`);

    if (medQMed.matches) {
        // $('.selector-block a').on("click", calculateHeight);
        // $(window).resize(function () {

        // });
    } else {
        $('.selector-block a').on("click", function () {
            var tagW2 = $('.tags').width();

            $('.tags a').css("width", `${tagW2}px`);
        });

        $(window).resize(function () {
            var tagW = $('.tags').width();

            $('.tags a').css("width", `${tagW}px`);
        });
    }

    var calculateHeight = function () {
        var tagH = $('.tags').height();

        $('.tags a').css("height", `${tagH}px`);
    };
});