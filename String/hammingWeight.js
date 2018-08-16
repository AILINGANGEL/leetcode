var hammingWeight = function(n) {
    let num = 0;
    while (n !== 0) {
        if (n % 2 === 1) {
            num++;
        }
        n = Math.floor(n / 2);
    }
    return num;
};
