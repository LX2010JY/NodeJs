'use strict';

var fs = require('fs');

var rs = fs.createReadStream('output1.txt');
var ws = fs.createWriteStream('output3.txt');

//通过pipe将一个文件和另一个文件链接起来，这样rs读取的数据可以通过pipe到ws中去输出

rs.pipe(ws);
