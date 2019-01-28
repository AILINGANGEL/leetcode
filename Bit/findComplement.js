var findComplement = function(num) {
    let tmp = 0;
    let i = 0;
    while (num !== 0) {
        tmp += Math.pow(2, i);
        num = Math.floor(num / 2);
        i++;
    }
    return num ^ tmp;
};


// 会导致溢出
var findComplement = function(num) {
    let i = 1;
    while (i <= num) {
        i = i << 1;
    }
    return (i - 1) ^ num;
};


var findComplement = function(num) {
    let mask = ~0;
    while (num & mask) {
        mask = mask << 1;
    }
    return ~mask & ~num;
};