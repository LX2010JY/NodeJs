//冒泡排序
function bubble_sort(arr) {
	var len = arr.length;
	for(var i=0;i<len;i++) {
		for(var j=0;j<len-i;j++) {
			if(arr[j+1]<arr[j]) {
				var temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}
var arr = [12,3,4,65,34,2,32,4354,7,5,234,565,23];
console.log(bubble_sort(arr));