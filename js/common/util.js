/**
 * Created by Administrator on 2017/3/2.
 */
define([], {
    getQueryString: function (key) {
        //ȥ���ַ�������ĸ��   ���ַ�������1��ʼ�������
        var search = location.search.slice(1);
        //ʹ��&�ַ����õ�ÿһ��key=val
        var searchArr = search.split('&');

        var tempArr = null;
        var searchObj = {};

        //���������е�ÿһ��key=val�ַ�����ʹ��=������
        //Ȼ����keyΪ����valΪֵ��ӵ�searchObj������

        for (var i = 0, len = searchArr.length; i < len;i++){
            tempArr=searchArr[i].split('=');
            searchObj[tempArr[0]]=tempArr[1];
        }
        //�в�������ָ��ֵ��û�в�������ȫ��ֵ
        return arguments.length?searchObj[key]:searchObj;
    }

})