'use strict'
//使用内置模块 fs 读取文件内容
var fs = require('fs');

//回调函数中，第一个参数err代表错误信息，第二个参数代表返回结果
fs.readFile('../test1/README.md','utf-8',function(err,data){
	if(err) {
		console.log(err);
	} else {
		console.log(data);
	}

});