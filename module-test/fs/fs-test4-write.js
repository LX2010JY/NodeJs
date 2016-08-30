'use strict'
var fs = require('fs');
var data = '';
for(var i=0;i<100;i++) {
	data = data + "Hello,Node.js\n";
}
fs.writeFile('output.txt',data,function(err){
	if(err) {
		console.log(err);
	} else {
		console.log('ok');
	}
});
console.log("你写完了吗？我可是在你后面哦。");