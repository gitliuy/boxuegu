requirejs.config({
    baseUrl: '/',
    paths: {

        // 第三方库的路径配置
        jquery: 'lib/jquery/jquery.min',
        jqueryCookie: 'lib/jquery-coolie/jquery-coolie',
        nprogress:'lib/nprogress/nprogress',
        bootstrap: 'lib/bootstrap/js/bootstrap.min',
        echartsMin:'lib/echarts/echarts.min',



        // 自己写的路径配置
        common:'js/common',
        echarts:'js/echarts',
        //用户信息
        userList: 'js/user/list',
        userProfile: 'js/user/profile',

        //用户管理
        courseAdd:'js/course/add',
        courseAddStep1:'js/course/add_step1',
        courseAddStep2:'js/course/add_step2',
        courseAddStep3:'js/course/add_step3',
        courseCategory:'js/course/category',
        courseCategoryAdd:'js/course/category_add',
        courseList:'js/course/list',
        courseTopic:'js/course/topic',

        //个人中心
        homeLogin:'js/home/login',
        homeRepass:'js/home/repass',
        homeSetting:'js/home/setting',
        //讲师管理
        teacherAdd:'js/teach/add',
        teacherList:'js/teach/list',


    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});

// 所有的页面都需要这两个js，先加载他们。
require(['jquery', 'bootstrap','nprogress','common','echartsMin']);

/*
 *这里获取页面的pathname，然后对应的加载js。
 * */
(function(window) {

    var pathname = window.location.pathname;
    switch(pathname) {
        case '/index.html':
            require(['echarts']);
            break;
        case '/':
            require(['echarts']);
            break;

        case '/html/user/list.js':
            require(['userList']);
            break;
        case '/html/user/profile.html':
            require(['userProfile']);
            break;

        case '/html/course/add.html':
            require(['courseAdd']);
            break;
        case '/html/course/add_step1.html':
            require(['courseAddStep1']);
            break;
        case '/html/course/add_step2.html':
            require(['courseAddStep2']);
            break;
        case '/html/course/add_step3.html':
            require(['courseAddStep3']);
            break;
        case '/html/course/category.html':
            require(['courseCategory']);
            break;
        case '/html/course/category_add.html':
            require(['courseCategoryAdd']);
            break;
        case '/html/course/list.html':
            require(['courseList']);
            break;
        case '/html/course/topic.html':
            require(['courseTopic']);
            break;

        case '/html/home/login.html':
            require(['homeLogin']);
            break;
        case '/html/home/repass.html':
            require(['homeRepass']);
            break;
        case '/html/home/setting.html':
            require(['homeSetting']);
            break;

        case '/html/teacher/add.html':
            require(['teacherAdd']);
            break;
        case '/html/teacher/list.html':
            require(['teacherList']);
            break;
    }


})(window);
