$(function () {
    let l2PosX = $("#layer-2").offset().left,
        l2PosY = $("#layer-2").offset().top;

    let l3PosX = $("#layer-3").offset().left,
        l3PosY = $("#layer-3").offset().top;

    let l4PosX = $("#layer-4").offset().left,
        l4PosY = $("#layer-4").offset().top;

    // l2PosX -= l2PosX * 0.015
    // l2PosY -= l2PosY * 0.015

    // l3PosX -= l3PosX * 0.03
    // l3PosY -= l3PosY * 0.03

    // l4PosX -= l4PosX * 0.045
    // l4PosY -= l4PosY * 0.045

    $("#layer-2").css({
        "left": l2PosX,
        "top": l2PosY
    })
    $("#layer-3").css({
        "left": l3PosX,
        "top": l3PosY
    })
    $("#layer-4").css({
        "left": l4PosX,
        "top": l4PosY
    })

    let init = false;

    let startX = 0;
    let startY = 0;

    let posX = 0;
    let posY = 0;

    $(document).on("mousemove", function (event) {

        if (init) {

            posX = posX - startX;
            posY = posY - startY;

            $("#layer-2").css({
                "left": l2PosX - (posX * .016),
                "top": l2PosY - (posY * .016)
            })
            $("#layer-3").css({
                "left": l3PosX - (posX * .03),
                "top": l3PosY - (posY * .03)
            })
            $("#layer-4").css({
                "left": l4PosX - (posX * .045),
                "top": l4PosY - (posY * .045)
            })

            $("")

            console.log(posX);

            posX = event.pageX;
            posY = event.pageY;
        } else {
            startX = event.pageX;
            startY = event.pageY;

            posX = event.pageX;
            posY = event.pageY;
        }

        init = true;
    })
})