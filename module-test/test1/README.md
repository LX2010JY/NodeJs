自己创建一个module，叫做Hello.js 在程序最后加上module.exports = greet 将 greet 方法作为模块发布了出去。
从而在main.js里。可以通过require进行调用，直接使用greet