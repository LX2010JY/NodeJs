'use strict'
//这是一个同步读取的方法
var fs = require('fs');
try{
	var data = fs.readFileSync('../test1/REAwDME.md','utf-8');
	console.log(data);
} catch(err) {
	console.log(err);
}