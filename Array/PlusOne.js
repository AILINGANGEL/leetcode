var plusOne = function(digits) {
    var i = digits.length - 1;
    while (digits[i] === 9 && i > -1) {
        digits[i] = 0;
        i--;
    }

    if (i > -1) {
        digits[i]++;
    } else {
        digits.unshift(1);
    }
    return digits;
};


//下面是从leetcode上找的答案，思路一样，但是代码简介很多
var plusOne = function(digits) {
    for (var i = digits.length - 1; i >= 0; i--) {
        if (++digits[i] > 9) digits[i] = 0;
        else return digits;
    }
    digits.unshift(1);
    return digits;
};

// 再练习
var plusOne = function(digits) {
    for(let i = digits.length - 1; i>=0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
};

var plusOne = function(digits) {
    let i = digits.length - 1;
    let tmp = 1;
    while(i > -1 && tmp !== 0) {
        let sum = digits[i] + tmp;
        digits[i] = sum % 10;
        tmp = Math.floor(sum / 10);
        i--;
    }
    if(tmp === 1) {
        digits.unshift(1);
    }
    return digits;
};
