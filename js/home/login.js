define(['jquery','jqueryCookie','nprogress'], function($,undefined,nprogress) {

	var userInfo=null;
	try{
		userInfo=JSON.parse($.cookie('userInfo'))
	}catch (e) {
		userInfo={};
	}

	$('.login .avatar img').attr('src',userInfo.tc_avater? userInfo.tc_avater:'/img/default.png')


	$('#form-login').on('submit',function () {
        $.ajax({
            url:'/v6/login',
            type:'post',
			data:$(this).serialize(),
			success:function (data) {
				if(data.code===200){
					$.cookie('userInfo',JSON.stringify(data.result),{path:'/'});
					location.href='/';
				}
            }

        })
		return false;
    })
	nprogress.done();
});
