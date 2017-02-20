/**
 * Created by yuan on 2017/2/20.
 */
stack = require('./stack');
/**
 * 将十进制转为16进制以下进制
 * @param num
 * @param e
 */
function decimal_to_another(num,e) {
    var temp;
    var yushu;
    var Stack = new stack();
    var answer='';
    var eles = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    while(num>=1) {
        temp = Math.floor(num/e);
        yushu = num-(temp*e);
        Stack.push(yushu);
        num = temp;
    }
    while(!Stack.isEmpty()) {
        answer+=eles[Stack.pop()];
    }
    console.log(answer);
}

decimal_to_another(213781892731,16);