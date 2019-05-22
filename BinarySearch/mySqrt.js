var mySqrt = function(x) {
    let i = 0;
    let j = x;
    while (true) {
        let mid = Math.floor((i + j) / 2);
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid > x) {
            j = mid - 1;
        } else {
            if ((mid + 1) * (mid + 1) > x) {
                return mid;
            } else {
                i = mid + 1;
            }
        }
    }
};