var hammingDistance = function(x, y) {
    let num = x ^ y;
    return (num).toString(2).replace(/0/g, '').length;
};

var hammingDistance = function(x, y) {
    let num = x ^ y;
    let ans = 0;
    while (num) {
        num = num & num - 1;
        ans++;
    }
    return ans;
};