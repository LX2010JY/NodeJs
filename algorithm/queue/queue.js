/**
 * Created by yuan on 2017/2/20.
 * 普通版本队列
 */
function queue() {
    //功能：1.入队，2.出队，3.查看队首元素，4.查看队列长度，5.是否为空，6.清空队列，7.打印
    var item = [];
    this.enqueue = function (e) {
        item.push(e);
    };
    this.dequeue = function (e) {
        return item.shift();
    };
    this.front = function (e) {
        return item[0];
    };
    this.isEmpty = function () {
        return item.length==0;
    };
    this.clear = function () {
        item = [];
    };
    this.size = function () {
        return item.length;
    };

    this.print = function () {
        console.log(item.toString());
    }
}

module.exports = queue;