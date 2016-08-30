'use strict'
var fs = require('fs');
fs.stat('output.txt',function(err,stat){
	if(err) {
		console.log(err);
	} else {
		console.log('isFile: '+stat.isFile());
		console.log('isDirectory: '+stat.isDirectory());
		if(stat.isFile()) {
			//获取文件大小
			console.log("size: "+stat.size);
			//获取文件创建时间
			console.log('birth time: '+stat.birthtime);
			//获取文件上次修改时间
			console.log("modified time: "+stat.mtime);
		}
	}
})