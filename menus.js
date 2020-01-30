$(function () {

    $('.resizable').resizable({
        handles: "e"
    });

    var isExpanded = true;

    $('.resizable').each(function () {
        $(this).resize(function (event) {
            if ($(this).width() <= 550) {
                switchMode(false, event.target.id);
            } else {
                switchMode(true, event.target.id);
            }
        })
    })

    function switchMode(mode, id) {
        if (mode && !isExpanded) {
            $(`#trigger-small-${id.charAt(id.length -1)}`).attr('media', '(max-width: 550px)');
            isExpanded = true;
            console.log("expanded mode " + id)

        } else if (!mode && isExpanded) {
            $(`#trigger-small-${id.charAt(id.length -1)}`).attr('media', 'all');
            isExpanded = false;
            console.log("mobile mode " + id)
        }
    }
})