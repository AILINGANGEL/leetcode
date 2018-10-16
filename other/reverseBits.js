var reverseBits = function(n) {
    let res = '';
    while (n > 0) {
        res += n % 2;
        n = Math.floor(n / 2);
    }
    res = res.concat('0'.repeat(32 - res.length));
    let num = 0;
    for (let i = res.length - 1; i > -1; i--) {
        if (res[i] == 1) {
            num += Math.pow(2, res.length - i - 1);
        }
    }
    return num;
};


// 00111001011110000010100101

//00111001011110000010100101000000
reverseBits(43261596)