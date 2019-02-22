var countBits = function(num) {
    if (num < 1) return [0];
    let bits = [0, 1];
    let i = 2;
    while (i < num + 1) {
        bits[i] = bits[Math.floor(i / 2)] + bits[i % 2];
        i++;
    }
    return bits;
};

console.log(countBits(22))