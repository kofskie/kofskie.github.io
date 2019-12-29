$(function () {

    // sets main header position to random
    var title = $('.about-section__header');

    var xIndex = Math.floor(Math.random() * 4);
    var yIndex = Math.floor(Math.random() * 4);

    var leftMargs = ['20%', '25%', '30%', '35%'];
    var topMargs = ['20%', '25%', '30%', '35%'];

    title.css({
        'left': leftMargs[xIndex],
        'top': topMargs[yIndex],
        'display': 'inline'
    });

    $('.section').css({
        'left': '0',
        'top': '0',
        'margin-left': '0',
        'margin-top': '0'
    })

})