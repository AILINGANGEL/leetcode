var isPowerOfFour = function(num) {
    if(num <= 0) return false;
    if(num === 1) return true;
    if(num % 4 !== 0) return false;
    return isPowerOfFour(num / 4);
};


var isPowerOfFour = function(num) {
    if(num <= 0) return false;
    if(num === 1) return true;
    while(num !== 1) {
        if(num % 4 !== 0) return false;
        num = num / 4;
    }
    return true;
};

var isPowerOfFour = function(num) {
    // 0x55555555 是16进制 转换成二进制就是0101010101010101 通过与 num进行按位与会得到num本身不会为0
    return num > 0 && (num&(num-1)) == 0 && (num & 0x55555555) != 0;
}
