//fs服务图片二进制文件
'use strict'
var fs = require('fs');
var text = 'global';

//读取二进制文件，data返回一个buffer对象，在node中，buffer是一个包含0个或者任意个字节的数组
fs.readFile('180.jpg',function(err,data){
	if(err) {
		console.log(err);
	} else {
		console.log(data);
		text = data;
		console.log(data.length+'bytes');
	}
});
//data.toString()将buffer转换为string
process.on('exit',function(code){
	console.log(text.toString('utf-8'));
})