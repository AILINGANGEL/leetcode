var fib = function(N) {
    if(N < 2) return N;
    let a = 0;
    let b = 1;
    let i = 2;
    while(i <= N) {
        let tmp = a;
        a = b;
        b = tmp + a;
        i++;
    }
    return b;
};