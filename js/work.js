window.onload = function(){
    //获取input对象
    let yearInput = document.getElementsByName('year')[0];
    let monthInput = document.getElementsByName('month')[0];
    let dateInput = document.getElementsByName('date')[0];

    //获取span对象
    let oSpan = document.getElementsByTagName('span')[0];

    //获取button对象
    let oBtn = document.getElementsByTagName('button')[0];

function isLeapyear(year){
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        return true;
    }
    return false;//...
}

    function countDays(year,month,day){
        year = parseInt(year);
        month = parseInt(month);
        day = parseInt(day);

        let result = 0;
        let arrDay = [31,28,31,30,31,30,31,31,30,31,30];
        if(isLeapyear(year)){
            arrDay[1] = 29;
        }
        for(let i = 0;i <= month - 2;i++){
            result += arrDay[i];
        }
        return result + day;
    }
    oBtn.onclick = function(){
        oSpan.innerHTML = countDays(yearInput.value,monthInput.value,dateInput.value);
    }

}