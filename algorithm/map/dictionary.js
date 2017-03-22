/**
 * Created by yuan on 2017/3/20.
 */
function Dictionary () {
    var items = {};
    this.has = function (key) {
        return key in items;
    };
    this.set = function (key,value) {
        items[key] = value;
    };
    this.remove = function (key) {
        if(this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };
    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    };
    //获取值
    this.values = function () {
        var values = [];
        for(var k in items) {
            if(this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    };
    //获取键
    this.keys = function () {
        var keys = [];
        for(var k in items) {
            if(this.has(k)) {
                keys.push(k);
            }
        }
        return keys;
    };
    this.size = function () {
        return Object.keys(items).length;
    };
    this.clear = function () {
        items = {};
    }
}
var dic = new Dictionary();
dic.set('name','haha');
dic.set('age',12);
dic.set('school','peking');
console.log(dic.keys());
console.log(dic.values());
