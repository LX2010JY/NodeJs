function choice_sort(arr) {
	var len = arr.length;
	for(var i=0;i<len;i++) {
		for(var j=i+1;j<len;j++) {
			if(arr[i]>arr[j]) {
				var temp = arr[j];
				arr[j] = arr[i];
				arr[i] = temp;
			}
		}
	}
	return arr;
}
console.log("选择排序：");
var arr = [123,34,34,35,46,4,65,7,324,56,754,6546,34,534,5];
console.error(choice_sort(arr));