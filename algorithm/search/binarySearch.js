/**
 * Created by yuan on 2017/3/21.
 */

function AdjustArray(arr,left,right) {
    var i=left,j=right;
    var x = arr[i];
    while(i<j) {
        while(i<j&&arr[j]>=x) {
            j--;
        }
        if(i<j) {
            arr[i] = arr[j];
            i++;
        }
        while(i<j&&arr[i]<x) {
            i++;
        }
        if(i<j) {
            arr[j] = arr[i];
            j--;
        }
    }
    arr[i] = x;
    return i;
}
function quick_sort(arr,left,right) {
    if(left<right) {
        var i = AdjustArray(arr,left,right);
        quick_sort(arr,left,i-1);
        quick_sort(arr,i+1,right);
    }
    return arr;
}
//二分查找
var binarySearch = function (arr,item) {
    var narr = quick_sort(arr,0,arr.length-1);
    var low = 0,high = narr.length-1,mid,element;
    while(low<high) {
        mid = Math.floor((low+high)/2);
        element = arr[mid];
        if(element>item) {
            high = mid-1;
        } else if(element<item) {
            low = mid+1;
        } else {
            return mid;
        }
    }
    return -1;
};

var arr = [123,3,4,3,53,5,1546,6,267,786,8979,87,78,967,8,65,754,6,34,5,234,12];
console.log(binarySearch(arr,1546));