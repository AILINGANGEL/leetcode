var isHappy = function(n) {
    let squareNumSet = new Set();
    let sum = calSquareNum(n);
    while(!squareNumSet.has(sum)){
        squareNumSet.add(sum);
        sum = calSquareNum(sum);
    }
    return sum === 1;
};
    
var calSquareNum = function(n) {
    let res = 0;
    while(n) {
        let mod = n % 10;
        res += mod * mod;
        n = Math.floor(n/10);
    }
    return res;
};



// 步长法
var isHappy = function(n) {
    let slow = n;
    let fast = n;
    do {
        slow = calSquareNum(slow);
        fast = calSquareNum(fast);
        fast = calSquareNum(fast);
    }while(slow !== fast);
    return slow === 1;
};
    
var calSquareNum = function(n) {
    let res = 0;
    while(n) {
        let mod = n % 10;
        res += mod * mod;
        n = Math.floor(n/10);
    }
    return res;
};


var isHappy = function(n) {
   let set = new Set();
   while(!set.has(n) && n !==1) {
       set.add(n);
       n = calSquareNum(n);
   }
    return n === 1;
};
    
var calSquareNum = function(n) {
    let res = 0;
    while(n) {
        let mod = n % 10;
        res += mod * mod;
        n = Math.floor(n/10);
    }
    return res;
};
