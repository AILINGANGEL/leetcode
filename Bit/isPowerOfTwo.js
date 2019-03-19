var isPowerOfTwo = function(n) {
    if (n < 1) return false;
    while (n !== 1) {
        if (n % 2 !== 0) return false;
        n = n / 2;
    }
    return true;
};

var isPowerOfTwo = function(n) {
    return n > 0 && !(n & n - 1)
};

var isPowerOfTwo = function(n) {
    if(n < 1) return false;
    return (n & (n - 1) )=== 0;
};
