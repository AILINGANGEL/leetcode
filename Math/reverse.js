var reverse = function(x) {
    let isNegative = x < 0;
    let res = 0;
    x = x < 0 ? -x : x;
    while (x !== 0) {
        res = res * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    if (res > Math.pow(2, 31)) return 0;
    return isNegative ? -res : res;
};

console.log(reverse(-123))