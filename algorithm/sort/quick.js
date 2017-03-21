/**
 * Created by yuan on 2017/3/21.
 */
//O(n log n)
var quick = function (arr,left,right) {
    var index;
    if(arr.length>1) {
        index = partition(arr,left,right);
        if(left<index - 1) {
            quick(arr,left,index-1);
        }
        if(index<right) {
            quick(arr,index,right);
        }
    }
};

var partition = function (arr,left,right) {
    var pivot = arr[Math.floor(right+left)/2];
    var i=left,j=right;
    while(i<=j) {
        while(arr[i]<pivot) {
            i++;
        }
        while(arr[j]>pivot) {
            j--;
        }
        if(i<=j) {
            swapQuickSort(arr,i,j);
            i++;
            j--;
        }
    }
    return i;
};
var swapQuickSort = function (arr,index1,index2) {
    var aux = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = aux;
};

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

var arr = [12,312,3,2,4,3,53,5,34,234,32,42,4,3,5,345,345,234,234,2];
console.log(quick_sort(arr,0,arr.length-1));