$(function() {

    $('.resizable').resizable({
        handles: "e"
    });

    var isExpanded = true;

    $('.resizable').resize(function() {
        if($('.resizable').width() <= 550) {
            switchMode(false);
        } else {
            switchMode(true);
        }
    })

    function switchMode(mode) {
        if (mode && !isExpanded) {
            $('#trigger-small').attr('media', '(max-width: 550px)');
            isExpanded = true;

        } else if(!mode && isExpanded) {
            $('#trigger-small').attr('media', 'all');
            isExpanded = false;
        }
    }
})