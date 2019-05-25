var isMonotonic = function(A) {
    let increasing;
    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] < A[i + 1]) {
            if (increasing === undefined) {
                increasing = true;
            } else if (increasing === false) {
                return false;
            }
        } else if (A[i] > A[i + 1]) {
            if (increasing === undefined) {
                increasing = false;
            } else if (increasing === true) {
                return false;
            }
        }
    }
    return true;
};