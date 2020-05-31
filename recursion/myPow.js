var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    return n % 2 === 0 ? myPow(x * x, n / 2) : x * myPow(x * x, Math.floor(n / 2));
};

console.log(myPow(2, 2))
var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }
    x = n < 0 ? 1 / x : x;
    n = n < 0 ? -n : n;
    const ans = Math.pow(myPow(x, Math.floor(n / 2)), 2);
    return n % 2 === 0 ? ans : ans * x;
};

// divide-and-conquer
// x的n次方，等同于x的n/2次方得到的结果和自己相乘;注意处理n为基数的情况