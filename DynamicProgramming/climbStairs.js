var climbStairs = function(n) {
    let arr = [1, 2];
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n - 1];
};


var climbStairs = function(n) {
    let first = 1;
    let second = 1;
    for (let i = 2; i < n + 1; i++) {
        console.log('-----', first, second);
        let tmp = second;
        second = first + second;
        first = tmp;
    }
    return second;
};
console.log(climbStairs(3))