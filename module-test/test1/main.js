'use strict'

//自己写模块并且调用的方法 module.exports = function
var greet = require('./Hello');

var s = 'Michael';

greet(s);