/**
 * Created by yuan on 2017/3/21.
 */
/**
 * 归并排序将一个大数组转化为多个小数组 直到只有一个项
 * @param arr
 * @returns {*}
 */
var mergeSortRec = function (arr) {
    var length = arr.length;
    if(length===1) {
        return arr;
    }
    var mid = Math.floor(length/2);
    var left = arr.slice(0,mid);
    var right = arr.slice(mid,length);
    return merge(mergeSortRec(left),mergeSortRec(right));
};

var merge = function (left,right) {
    var result = [];
    var il = 0,ir = 0;
    while(il<left.length && ir<right.length) {
        //两个数组比大小....小的添加，总有一个数组先被遍历完成
        if(left[il]<right[ir]) {
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }
    while(il<left.length) {
        //如果上一个循环没有遍历完成left，则全部直接添加
        result.push(left[il++]);
    }
    while(ir<right.length) {
        result.push(right[ir++]);
    }
    return result;
};

var arr = [123,21,3,123,2,3,4,35,3,5,345,34,234,32,412,3];
console.log(arr);
console.log(mergeSortRec(arr));