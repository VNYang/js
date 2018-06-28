//函数
/*
    定义：
        function 函数名（形式参数）{
            //对形式参数的操作


            return //定义这个函数的返回值;
        }

        函数定义时的给的默认参数是 形式参数
        函数调用时 给的参数 是 实际参数

        return是不必需的
*/ 


console.log(isPrime(3));
//判断是否是质数的函数
function isPrime(num){
    for (let i = 2;i<num;i++) {
        if(num % i == 0){
            return false;
        }
    }

    return true;
}

function sum100(){//功能：就是算1-100的和 然后打印出来
    let result = 0;
    for(let i=1;i<101;i++){
        result += i;
    }
    console.log(result);
}

function sum(a,b){
    console.log('函数sum执行了')
    return a+b;
    
}


function leapYear(num){
    let year = false;
    if(num % 4 == 0 && num % 100 != 0 || num % 400 == 0){
        return year = true; 
    }
    return year;
}
console.log(leapYear(2100))

function isHuiwenshu(num){
    let numEnd = parseInt((num+'').split('').reverse().join(''));

    if(num == numEnd){
        return true;
    }

    return false;
}

/* for(let i=10000;i<=100000;i++){
    if(isHuiwenshu(i)){
        console.log(i);
    }
} */

function splitNum(num){
    let ge,shi,bai,qian,wan;
    ge = parseInt(num%10);
    shi = parseInt(num%100/10);
    bai =parseInt(num%1000/100);
    qian =parseInt(num%10000/1000);   
    wan =parseInt(num/10000); 

    return [ge,shi,bai,qian,wan];
}

console.log(splitNum(12546))