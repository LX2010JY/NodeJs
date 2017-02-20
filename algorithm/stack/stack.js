/**
 * Created by yuan on 2017/2/20.
 */
function stack() {
    //功能：1.入栈，2.出栈，3.查看栈顶元素，4.查看栈长度，5.是否为空，6.清空栈，7.打印
    var item = [];
    this.push = function (e) {
        item.push(e);
    };
    this.pop = function () {
        return item.pop();
    };
    this.peek = function () {
        return item[item.length-1];
    };
    this.size = function () {
        return item.length;
    };
    this.isEmpty = function () {
        return item.length==0;
    };
    this.clear = function () {
        item = [];
    };
    this.print = function () {
        console.log(item.toString());
    }
}

module.exports = stack;