'use strict';
var fs = require('fs');
var rs = fs.createReadStream('../test1/README.md','utf-8');

//data代表有数据传过来了，可以读取数据了,chunck代表流的一部分，不一定是全部也不一定是一个字符
rs.on('data',function(chunk) {
	console.log('Data:');
	console.log(chunk);
});
//end代表数据读取完毕
rs.on('end',function(){
	console.log('END');
})
//error出错
rs.on('error',function(err){
	console.log('ERROR: '+err);
})