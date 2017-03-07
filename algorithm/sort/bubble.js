/**
 * Created by yuan on 2017/3/7.
 * 冒泡排序
 */
function  bubbleSort(arr) {
    var length = arr.length;
    for(let i=0;i<length;i++) {
        for(let j =0;j<length-i-1;j++) {
            if(arr[j]>arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
var arr = [23,34,32,3,5,345,234,23,4,24,2,543,5,345,34,5];
var newarr = bubbleSort(arr);
console.log(newarr);
