let num = 5362;

let gewei,shiwei,baiwei,qian;

//算法
qian = parseInt(num / 1000);
baiwei = parseInt((num%1000)/100);
shiwei = parseInt((num%100)/10);
gewei = parseInt(num%10);

let randomNum = parseInt(Math.random() * 78 + 1);

let num1 = 89;
let day,hour;
day = parseInt(num1/24);
hour = num1%24;

let tmp = 80;
let sheshi = 5/9.0*(tmp-32);

let num2 = 50;
if (num2%2 == 0) {
	console.log(num2+'是偶数。');
} else{
	console.log(num2+'是奇数。');
}

let weight = 120,height=170;
let result = (height-108)/2;
if (result-10<weight && weight<result+10){
	console.log("合适");
}else if(weight<result-10){
	console.log("太轻");
}else{
	console.log("超重");
}

console.log('个位是：' + gewei);
console.log('十位是：' + shiwei);
console.log('百位是：' + baiwei);
console.log('千位是：' + qian);


console.log(randomNum)

console.log(day+"天"+hour+"小时");

console.log(sheshi);

let r = 5;
console.log(Math.PI*r**2);


let year = 1900;
if ((year%4==0 && year%100 != 0) || year%400 == 0) {
	console.log("闰年");
}else {
	console.log("不是闰年");
}
