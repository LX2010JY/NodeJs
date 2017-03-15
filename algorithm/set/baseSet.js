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
    //并集操作
    this.union = function (otherset) {
        var unionSet = new Set();
        var values = this.values();
        for(let i=0;i<values.length;i++) {
            unionSet.add(values[i]);
        }
        values = otherset.values();
        for(let i=0;i<values.length;i++) {
            unionSet.add(values[i]);
        }
        return unionSet;
    };
    //并集
    this.intersection = function (otherset) {
        var interset = new Set();
        var values = otherset.values();
        for(let i=0;i<values.length;i++) {
            if(this.has(values[i])) {
                interset.add(values[i]);
            }
        }
        return interset;
    };
    //差集 A-(A和B的交集)
    this.difference = function (otherset) {
        var diffset = new Set();
        var interset = this.intersection(otherset);
        var values = this.values();
        for(let i =0;i<values.length;i++) {
            if(!interset.has(values[i])){
                diffset.add(values[i]);
            }
        }
        return diffset;
    };
    //判断是否是子集
    this.issubset = function (otherset) {
        if(this.size<otherset.size) {
            return false;
        } else {
            var values = otherset.values();
            for(let i=0;i<values.length;i++) {
                if(!this.has(values[i])) {
                    return false;
                }
            }
            return true;
        }
    }
}

var set = new Set();
set.add('a');
set.add('b');
set.add('3');
var set2 = new Set();
set2.add('asda');
set2.add('1');
set2.add('3');
var set3 = new Set();
set3.add('3');

console.log("交集："+set.union(set2).values());
console.log("并集："+set.intersection(set2).values());
console.log("差集："+set.difference(set2).values());
console.log(set.issubset(set3));
