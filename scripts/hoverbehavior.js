$(function () {
    $('#select-oak').hover(function () {
        $('.selector-block').css('grid-template-columns', '2fr 1fr 1fr 1fr');
    }, function () {
        $('.selector-block').css('grid-template-columns', '1fr 1fr 1fr 1fr')
    })

    $('#select-cherry').hover(function () {
        $('.selector-block').css('grid-template-columns', '1fr 2fr 1fr 1fr');
    }, function () {
        $('.selector-block').css('grid-template-columns', '1fr 1fr 1fr 1fr')
    })

    $('#select-spruce').hover(function () {
        $('.selector-block').css('grid-template-columns', '1fr 1fr 2fr 1fr');
    }, function () {
        $('.selector-block').css('grid-template-columns', '1fr 1fr 1fr 1fr')
    })

    $('#select-pine').hover(function () {
        $('.selector-block').css('grid-template-columns', '1fr 1fr 1fr 2fr');
    }, function () {
        $('.selector-block').css('grid-template-columns', '1fr 1fr 1fr 1fr')
    })
})