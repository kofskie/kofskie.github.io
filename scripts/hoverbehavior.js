$(function () {

    let start;
    let elapsed = 0;
    let rafHandle;

    let medQ = window.matchMedia("(max-width: 900px)");
    window.addEventListener("resize", checkGrid);

    function checkGrid() {

        let medQC = window.matchMedia("(max-width: 900px)");
        if (!medQC.matches) {
            $('.selector-block').css('grid-template-columns', `1fr 1fr 1fr 1fr`);
        } else {
            $('.selector-block').css('grid-template-columns', `1fr 1fr`);
        }
    }

    function hoverAnimationOak() {
        if (elapsed <= 100) {
            elapsed = new Date().getTime() - start;
            let val = elapsed / 100;

            if (!medQ.matches) {
                $('.selector-block').css('grid-template-columns', `${1.0 + val}fr 1fr 1fr 1fr`);
            } else {
                $('.selector-block').css('grid-template-columns', `${1.0 + val}fr 1fr`);
            }
            //console.log(1 + val); 
            //console.log(elapsed);
            window.setTimeout(function () {
                rafHandle = window.requestAnimationFrame(hoverAnimationOak);
            }, 100 / 60); // about 60 FPS
        }
    }

    $('#select-oak').mouseenter(function () {

        // nested hover function to ensure filters aren't lost when mouse target is
        // an item inside the selector element
        $('#select-oak img').css('filter', 'blur(2px) brightness(60%)');
        $('#select-oak img').css('transform', 'scale(1)');
        $('#select-oak img').css('transition', 'ease-in-out 0.3s');

        // BORDER AND TEXT MANIPULATION
        // $('#inner-oak').css('border-top', '10px solid rgb(27, 43, 25)');
        // $('#inner-oak').css('border-bottom', '10px solid rgb(27, 43, 25)');

        // $('#inner-oak').css('left', '14vw');
        // $('#inner-oak').css('top', '31vh');
        // $('#inner-oak').css('font-size', '7em')
        start = new Date().getTime();
        elapsed = 0;
        rafHandle = window.requestAnimationFrame(hoverAnimationOak);
    });
    $('#select-oak').mouseleave(function (e) {
        // $('#inner-oak').css('left', '7vw');
        // $('#inner-oak').css('top', '35vh');
        // $('#inner-oak').css('font-size', '6em')

        $('#select-oak img').css('filter', 'blur(5px) brightness(30%)')
        $('#select-oak img').css('transform', 'scale(1.05)')

        // TODO: animate mouse leave here
        window.cancelAnimationFrame(rafHandle);
        elapsed = Infinity;
        if (!medQ.matches) {
            $('.selector-block').css('grid-template-columns', '1fr 1fr 1fr 1fr');
        } else {
            $('.selector-block').css('grid-template-columns', '1fr 1fr');
        }
    })

    function hoverAnimationRedwood() {
        if (elapsed <= 100) {
            elapsed = new Date().getTime() - start;
            let val = elapsed / 100;

            if (!medQ.matches) {
                $('.selector-block').css('grid-template-columns', `1fr ${1.0 + val}fr 1fr 1fr`);
            } else {
                $('.selector-block').css('grid-template-columns', `1fr ${1.0 + val}fr`);
            }
            //console.log(1 + val);
            //console.log(elapsed);
            window.setTimeout(function () {
                rafHandle = window.requestAnimationFrame(hoverAnimationRedwood);
            }, 100 / 60); // about 60 FPS
        }
    }

    $('#select-redwood').mouseenter(function () {

        $('#select-redwood img').css('filter', 'blur(2px) brightness(60%)');
        $('#select-redwood img').css('transform', 'scale(1.1)');
        $('#select-redwood img').css('transition', 'ease-in-out 0.3s');

        start = new Date().getTime();
        elapsed = 0;
        rafHandle = window.requestAnimationFrame(hoverAnimationRedwood);
    });

    $('#select-redwood').mouseleave(function () {

        $('#select-redwood img').css('filter', 'blur(5px) brightness(30%)');
        $('#select-redwood img').css('transform', 'scale(1.15)');

        // handle mouse leave animation
        window.cancelAnimationFrame(rafHandle);
        elapsed = Infinity;
        if (!medQ.matches) {
            $('.selector-block').css('grid-template-columns', '1fr 1fr 1fr 1fr');
        } else {
            $('.selector-block').css('grid-template-columns', '1fr 1fr');
        }
    })


    function hoverAnimationBirch() {
        if (elapsed <= 100) {
            elapsed = new Date().getTime() - start;
            let val = elapsed / 100;

            if (!medQ.matches) {
                $('.selector-block').css('grid-template-columns', `1fr 1fr ${1.0 + val}fr 1fr`);
            } else {
                $('.selector-block').css('grid-template-columns', `${1.0 + val}fr 1fr`);
            }
            //console.log(1 + val);
            //console.log(elapsed);
            window.setTimeout(function () {
                rafHandle = window.requestAnimationFrame(hoverAnimationBirch);
            }, 100 / 60); // about 60 FPS
        }
    }

    $('#select-birch').mouseenter(function () {

        $('#select-birch img').css('filter', 'blur(2px) brightness(60%)');
        $('#select-birch img').css('transform', 'scale(1.06)');
        $('#select-birch img').css('transition', 'ease-in-out 0.3s');

        start = new Date().getTime();
        elapsed = 0;
        rafHandle = window.requestAnimationFrame(hoverAnimationBirch);
    });

    $('#select-birch').mouseleave(function () {

        $('#select-birch img').css('filter', 'blur(5px) brightness(30%)');
        $('#select-birch img').css('transform', 'scale(1.11)');

        // handle mouse leave animation here instead
        window.cancelAnimationFrame(rafHandle);
        elapsed = Infinity;

        if (!medQ.matches) {
            $('.selector-block').css('grid-template-columns', `1fr 1fr 1fr 1fr`);
        } else {
            $('.selector-block').css('grid-template-columns', `1fr 1fr`);
        }
    })




    function hoverAnimationPine() {
        if (elapsed <= 100) {
            elapsed = new Date().getTime() - start;
            let val = elapsed / 100;

            if (!medQ.matches) {
                $('.selector-block').css('grid-template-columns', `1fr 1fr 1fr ${1.0 + val}fr`);
            } else {
                $('.selector-block').css('grid-template-columns', `1fr ${1.0 + val}fr`);
            }
            //console.log(1 + val);
            //console.log(elapsed);
            window.setTimeout(function () {
                rafHandle = window.requestAnimationFrame(hoverAnimationPine);
            }, 100 / 60); // about 60 FPS
        }
    }

    $('#select-pine').mouseenter(function () {

        $('#select-pine img').css('filter', 'blur(2px) brightness(60%)');
        $('#select-pine img').css('transform', 'scale(1.06)');
        $('#select-pine img').css('transition', 'ease-in-out 0.3s');

        start = new Date().getTime();
        elapsed = 0;
        rafHandle = window.requestAnimationFrame(hoverAnimationPine);
    });

    $('#select-pine').mouseleave(function () {

        $('#select-pine img').css('filter', 'blur(5px) brightness(30%)');
        $('#select-pine img').css('transform', 'scale(1.11)');

        // handle mouse leave animation here instead
        window.cancelAnimationFrame(rafHandle);
        elapsed = Infinity;
        if (!medQ.matches) {
            $('.selector-block').css('grid-template-columns', '1fr 1fr 1fr 1fr');
        } else {
            $('.selector-block').css('grid-template-columns', '1fr 1fr');
        }
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