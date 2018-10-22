var isPowerOfThree = function(n) {
    if (n === 0) {
        return false;
    }
    if (n === 1) {
        return true
    }
    if (n % 3 !== 0) {
        return false;
    }
    return isPowerOfThree(n / 3);
};


// 注意考虑负数的情况
var isPowerOfThree = function(n) {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 3 !== 0) {
            return false;
        }
        n = n / 3;
    }
    return true;
}