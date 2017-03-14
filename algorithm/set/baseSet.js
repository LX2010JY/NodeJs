/**
 * Created by yuan on 2017/3/14.
 */
function Set() {
    var items = {};
    this.has = function (value) {
        // return value in items;
        return items.hasOwnProperty(value);
    };
    this.add = function (value) {
        if(!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    };
    this.remove = function (value) {
        if(this.has(value)) {
            //删除对象的属性关键字！！！
            delete items[value];
            return true;
        }
        return false;
    };
    this.clear = function () {
        items = {};
    };
    this.size = function () {
        return Object.keys(items).length;
        var len = 0;
        for(var key in items) {

        }
    };
    this.values = function () {
        // return Object.keys(items);
        var keys = [];
        for(var item in items) {
            if(this.has(item)) {
                keys.push(item);
            }
        }
        return keys;
    };
}

var set = new Set();
set.add('a');
set.add('b');
set.add('3');
console.log(set.values());