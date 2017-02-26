define(['jquery','nprogress'],function ($,nprogress) {

    nprogress.start();

    nprogress.done();

    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });
})
