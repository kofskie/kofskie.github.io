$(function () {







    let start;
    let elapsed = 0;
    let rafHandle;

    function hoverAnimationOak() {
        if (elapsed <= 100) {
            elapsed = new Date().getTime() - start;
            let val = elapsed / 100;

            $('.selector-block').css('grid-template-columns', `${1.0 + val}fr 1fr 1fr 1fr`);
            //console.log(1 + val);
            //console.log(elapsed);
            window.setTimeout(function () {
                rafHandle = window.requestAnimationFrame(hoverAnimationOak);
            }, 100 / 60); // about 60 FPS
        }
    }

    $('#select-oak').hover(function () {
        start = new Date().getTime();
        elapsed = 0;
        rafHandle = window.requestAnimationFrame(hoverAnimationOak);
    }, function () {
        // handle mouse leave animation here instead
        window.cancelAnimationFrame(rafHandle);
        elapsed = Infinity;
        $('.selector-block').css('grid-template-columns', `1fr 1fr 1fr 1fr`);
    })









    function hoverAnimationCherry() {
        if (elapsed <= 100) {
            elapsed = new Date().getTime() - start;
            let val = elapsed / 100;

            $('.selector-block').css('grid-template-columns', `1fr ${1.0 + val}fr 1fr 1fr`);
            //console.log(1 + val);
            //console.log(elapsed);
            window.setTimeout(function () {
                rafHandle = window.requestAnimationFrame(hoverAnimationCherry);
            }, 100 / 60); // about 60 FPS
        }
    }

    $('#select-cherry').hover(function () {
        start = new Date().getTime();
        elapsed = 0;
        rafHandle = window.requestAnimationFrame(hoverAnimationCherry);
    }, function () {
        // handle mouse leave animation here instead
        window.cancelAnimationFrame(rafHandle);
        elapsed = Infinity;
        $('.selector-block').css('grid-template-columns', `1fr 1fr 1fr 1fr`);
    })




    function hoverAnimationSpruce() {
        if (elapsed <= 100) {
            elapsed = new Date().getTime() - start;
            let val = elapsed / 100;

            $('.selector-block').css('grid-template-columns', `1fr 1fr ${1.0 + val}fr 1fr`);
            //console.log(1 + val);
            //console.log(elapsed);
            window.setTimeout(function () {
                rafHandle = window.requestAnimationFrame(hoverAnimationSpruce);
            }, 100 / 60); // about 60 FPS
        }
    }

    $('#select-spruce').hover(function () {
        start = new Date().getTime();
        elapsed = 0;
        rafHandle = window.requestAnimationFrame(hoverAnimationSpruce);
    }, function () {
        // handle mouse leave animation here instead
        window.cancelAnimationFrame(rafHandle);
        elapsed = Infinity;
        $('.selector-block').css('grid-template-columns', `1fr 1fr 1fr 1fr`);
    })




    function hoverAnimationPine() {
        if (elapsed <= 100) {
            elapsed = new Date().getTime() - start;
            let val = elapsed / 100;

            $('.selector-block').css('grid-template-columns', `1fr 1fr 1fr ${1.0 + val}fr`);
            //console.log(1 + val);
            //console.log(elapsed);
            window.setTimeout(function () {
                rafHandle = window.requestAnimationFrame(hoverAnimationPine);
            }, 100 / 60); // about 60 FPS
        }
    }

    $('#select-pine').hover(function () {
        start = new Date().getTime();
        elapsed = 0;
        rafHandle = window.requestAnimationFrame(hoverAnimationPine);
    }, function () {
        // handle mouse leave animation here instead
        window.cancelAnimationFrame(rafHandle);
        elapsed = Infinity;
        $('.selector-block').css('grid-template-columns', `1fr 1fr 1fr 1fr`);
    })


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

})