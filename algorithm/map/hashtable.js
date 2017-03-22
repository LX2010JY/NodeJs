/**
 * Created by yuan on 2017/3/22.
 * 哈希表 散列表
 */
/**
 * step 1:创建散列函数
 *
 * @constructor
 */
function HashTable() {
    var table = [];
    //内部函数 私有函数
    var loseloseHashCode = function (key) {
        var hash = 0;
        for(var i=0;i<key.length;i++) {
            //获取key字符串位置i 的字符的Unicode码
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };
    this.put = function (key,value) {
        var position = loseloseHashCode(key);
        console.log(position+'-'+key);
        table[position] = value;
    };
    this.get = function (key) {
        return table[loseloseHashCode(key)];
    };
    this.remove = function (key) {
        table[loseloseHashCode(key)] = undefined;
    }
}
