$(function () {


    var title = $('.about-section__container');

    var xIndex = Math.floor(Math.random() * 4);
    var yIndex = Math.floor(Math.random() * 4);

    var leftMargs = ['20%', '25%', '30%', '35%'];
    var topMargs = ['25%', '30%', '35%', '40%'];

    title.css({
        'left': leftMargs[xIndex],
        'top': topMargs[yIndex],
        'visibility': 'visible'
    });

    $('.section').css({
        'left': '0',
        'top': '0'
    })

})