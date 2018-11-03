var isMonotonic = function(A) {
    if(A.length < 3) return true;
    let i = 1;
    let flag = A[1] - A[0];
    while(i < A.length - 1) {
        let diff = A[i + 1] - A[i];
        if(flag === 0) {
            if(diff !== 0 ) {
                flag = diff;
            }
            i++;
            continue;
        }
        if(diff * flag < 0) {
            return false;
        }
        i++;
    }
    return true;
};
