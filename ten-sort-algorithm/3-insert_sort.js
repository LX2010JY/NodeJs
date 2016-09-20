function insert_sort(arr) {
	if(Object.prototype.toString.call(arr).slice(8,-1)==="Array") {
		//i=1表示的是 把 0 作为已经排好序的部分了。
		console.time('插入排序时：');		
		for(var i=1;i<arr.length;i++) {
			//这个key是需要进行插入的值
			var key = arr[i];
			var j = i-1;
			//j代表的是key前面所有的数字，也就是已经排好序的部分，让key分别对比，在这个过程中，把比过的数字都右移，当找到一个数字比key小时，把key插入到这个位置
			while(j>=0 && arr[j]>key) {
				arr[j+1] = arr[j];
				j--;
			}
			arr[j+1] = key;
		}
		console.timeEnd("插入排序耗时：");
		return arr;
	} else {
		return "arr is not a Array !";
	}
}

function Insert_Sort(arr) {
	if(Object.prototype.toString.call(arr).slice(8,-1)==="Array") {
		console.time("插入排序时：");
		for(var i =1;i<arr.length;i++) {
			var key = arr[i];
			var j = 0;
			while(j<i && arr[j] < key) {
				j++;
			}
			for(var k=i;k>j;k--) {
				arr[k] = arr[k-1];
			}
			arr[j] = key;
		}
		console.timeEnd("插入排序（从左向右）耗时：")
		return arr;
	}
}

var arr = [];
for(var i=0;i<1000;i++) {
	arr[i] = Math.round(Math.random(2)*10000);
}
console.log(Insert_Sort(arr));

