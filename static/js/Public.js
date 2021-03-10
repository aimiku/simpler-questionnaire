function getUrlParam(name) {
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
function getAnswer(id,wid) {
	$.get('http://apoc.aikutest.com', {
		'm': 'wj',
		'c': 'wj',
		'a': 'answer',
		'id': id,
		'wid': wid
	}, function(data) {
		if (data.io) {
			answer = JSON.parse(data.data);
		} else {
			console.log(data.data);
			return null;
		}
	}, 'json');
	return answer;
}

function raterInit(){
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
}

function wxsdk(url) {
	var appid = 'wx7f142ce5ed1b539a';
	var sign;
	$.get('http://apoc.aikutest.com/?m=wechat&c=api&a=jsapi_signature&url='+encodeURIComponent(url), {}, function (data) {

		sign = data.data;
	}, 'json');
	console.log('2');
	return sign;
}