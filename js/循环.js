let arr = [2,2,4,8,9,7,6,7];

for(/*语句一*/let i=0;/*语句二  判断是否满足条件*/i<arr.length;/*语句三*/i++){
    //console.log(arr[i]);
};

//let i = 0;
/* do{
    console.log(arr[i]);
    i++;
}while(i<arr.length); */

/* do{
    i++;
    console.log(arr[i]);
}while(i<arr.length); */

/* while(i<arr.length){
    console.log(arr[i]);
    i++;
}; */

for (let i=0;i<5;i++) {
    let str = '';
	for (let j=4-i;j<5;j++) {
		str += "o ";
	}
    console.log(str);
}

let sum = 0;
for (let i = 1; i <= 100; i++){
    if( i % 2 == 0){
        sum += i;
    }
}
console.log(sum);

let num = 3;

function isPrimeNum(num){
    for(let i=2;i<Math.sqrt(num);i++){
        if(num%i == 0){
            return false;
        }
    }
    return true;
}

console.log(num + '是否是质数：' + flag);

let sum1 = 0;
for(let i=1;i<=100;i++){//求和
    //判断i是否是质数
    let flag1 = true;
    for(let j=2;j<=i-1;j++){
        if(i%j==0){
            flag1 = false;
            break;
        }
    }

    //是质数就加到sum1上去
    if(flag1){
        sum1 = sum1 + i;
    }
}

//得到结果
console.log(sum1)