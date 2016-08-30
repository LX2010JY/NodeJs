//global 全局变量，其中包含很多东东
//process 代表node当前的进程，其中有很多信息，process === global.process

//nextTick 不会立即执行，必须要等到下一次事件循环之后才会执行
//?????不太懂
process.nextTick(function() {
	console.log("nextTick callback");
});
console.log('nextTick was set');

//结果
//nextTick was set
//nextTick callback

process.on('exit',function(code){
	console.log('about to exit with code: '+code);
});

//判断是在node环境还是在brower环境，只有浏览器环境下，才会有window全局变量
if(typeof(window) === 'undefined') {
	console.log('node.js');
} else {
	console.log('browser');
}