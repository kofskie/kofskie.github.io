$(function () {

    let medQMed = window.matchMedia("(max-width: 1000px)");

    if (medQMed.matches) {
        // $('.selector-block a').on("click", calculateHeight);
    } else {
        $('.selector-block a').on("click", calculateWidth);
        $(window).on("resize", calculateWidth);
    }

    function calculateHeight() {
        var tagW = $('.tags').height() * 1.05;

        $('.tags a').css("width", `${tagW}px`);
    };

    function calculateWidth() {
        var tagW = $('.tags').width() * 1.05;

        $('.tags a').css("width", `${tagW}px`);
    };
})