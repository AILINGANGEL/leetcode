var mySqrt = function(x) {
    if (x === 0) return 0;
    let l = 1;
    let r = x;
    while (true) {
        let mid = Math.floor((l + r) / 2);
        let temp = mid * mid;
        if (temp === x) {
            return mid;
        } else if (temp > x) {
            r = mid;
        } else {
            if ((mid + 1) * (mid + 1) > x) {
                return mid;
            }
            l = mid;
        }
    }
};