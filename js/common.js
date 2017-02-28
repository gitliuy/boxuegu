define(['jquery', 'jqueryCookie'], function ($, nprogress, undefined) {
    //ajax请求loading
    $(document).ajaxStart(function () {
        $('.overlay').show();
    }).ajaxStop(function () {
        $('.overlay').hide();
    })
    



    //左侧栏下拉列表
    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });


    //退出功能
    $('#logout').on('click', function () {
        $.post('/v6/logout',function (data) {
            if(data.code==200){
                location.href='/html/home/login.html'
            }
        });

    });



    var pathname=window.location.pathname;
    $('.navs a').removeClass('active').filter('[href="'+pathname+'"]').addClass('active').parents('ul').show();



    var userInfo=null;
    try {
        userInfo=JSON.parse($.cookie('userInfo'))
    }catch (e){
        userInfo={};
    }

    $('.aside .profile h4').html(userInfo.tc_name?userInfo.tc_name:'dagenimeinga');
    $('.aside .profile img').attr('src',userInfo.tc_avatar?userInfo.tc_avatar:'/img/default.png');



})
