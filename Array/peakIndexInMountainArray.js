var peakIndexInMountainArray = function(A) {
    let max = A[0];
    for(let i = 1; i<A.length; i++) {
        if(A[i] > max) {
            max = A[i];
        } else {
            return i - 1;
        }
    }
    return 0;
};
