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
