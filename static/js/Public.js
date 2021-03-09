var getUrlParam = function getUrlParam(name) {
	//构造一个含有目标参数的正则表达式对象
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	//匹配目标参数
	var r = window.location.search.substr(1).match(reg);
	//返回参数
	if (r != null) {
		return unescape(r[2]);
	} else {
		return null;
	}
}
var ewindow = window.onload = function() {
	$.get('http://apoc.aikutest.com', {
		'm': 'wj',
		'c': 'wj',
		'a': 'answer',
		'id': getUrlParam('id'),
		'wid': getUrlParam('wid')
	}, function(data) {
		if (data.io) {
			answer = JSON.parse(data.data)
			console.log(answer)
			init();
			layui.use(['element', 'rate'], function() {
				var element = layui.element;
				var rate = layui.rate;
				rate.render({
					elem: '#test1',
					value: 2.5 //初始值
						,
					half: true //开启半星
				})
				element.on('nav(demo)', function(elem) {
					layer.msg(elem.text());
				});
			});
		} else {
			console.debug(data.data);
		}
	}, 'json');
};


var einit = function einit(){
	$.get('http://apoc.aikutest.com', {
		'm': 'wj',
		'c': 'wj',
		'a': 'answer',
		'id': getUrlParam('id'),
		'wid': getUrlParam('wid')
	}, function(data) {
		if (data.io) {
			answer = JSON.parse(data.data)
		} else {
			console.debug(data.data);
		}
	}, 'json');
}
