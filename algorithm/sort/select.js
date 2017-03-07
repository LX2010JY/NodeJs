/**
 * Created by yuan on 2017/3/7.
 * 选择排序
 */
function  Select(arr) {
    var length = arr.length;
    for (let i = 0;i<length;i++) {
        for (let j=i+1;j<length;j++) {
            if(arr[i]>arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
var arr = [12,31,23,12,3,4,32,23,4,234,23,4,24,3,5,345,34,523,4,234,23];
var newarr = Select(arr);
console.log(newarr);
