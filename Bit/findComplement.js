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