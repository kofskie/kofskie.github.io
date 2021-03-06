$(function () {

    var breakpointEnablePos = window.matchMedia("(min-width: 1024px)");

    if(breakpointEnablePos.matches) {
        var title = $('.about-section__container');
        var textContainer = $('.about-section__para-container');

        var xIndex = Math.floor(Math.random() * 4);
        var yIndex = Math.floor(Math.random() * 4);

        var leftMargs = [10, 15, 20, 25];
        var topMargs = ['20%', '25%', '30%', '35%'];

        title.css({
            'left': `${leftMargs[xIndex]}%`,
            'top': topMargs[yIndex],
            'visibility': 'visible'
        });
        var textContainerWidth = 105 - leftMargs[xIndex];
        textContainer.css({
            'width': `${textContainerWidth}%`,
            'visibility': 'visible',
            'animation': 'header-opac-in 0.2s forwards'
        })
    }
})

// TODO: add seperate text paragraph element and position it appropriately...