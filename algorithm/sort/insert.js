/**
 * Created by yuan on 2017/3/21.
 */
function insertSort(arr) {
    var length = arr.length;
    var j,temp;
    for(var i=1 ;i<length;i++) {
        j=i;
        temp = arr[i];
        while(j>0 && arr[j-1]>temp) {
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = temp;
    }
    return arr;
}


/**
 * 将需排序的数组遍历，然后将本次遍历到的数字及其前面的数组当做一个新的数组，进行一次“反向冒泡排序” ，将当前的数字插入到数组应该在的位置
 * @param arr
 * @returns {*}
 */
var myinsertSort = function (arr) {
    for (let i=0;i<arr.length;i++) {
        for(let j=i;j>0;j--) {
            if(arr[j]>arr[j-1]) {
                break;
            } else {
                let temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
        }
    }
    return arr;
};


var arr = [23,34,3,3,23,4,23,423,4,234,23,123];
console.log(arr.sort());
console.log(myinsertSort(arr));
console.log(insertSort(arr));
