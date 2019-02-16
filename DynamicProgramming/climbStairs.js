var climbStairs = function(n) {
    if(n < 2) {
        return n;
    }
    let step = [];
    step[1] = 1;
    step[2] = 2;
    for(let i =3; i <= n; i++) {
        step[i] = step[i - 1] + step[i - 2];
    }
    return step[n];
};


var climbStairs = function(n) {
    let arr = [1, 2];
    for(let i = 2; i< n; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n-1];
};
