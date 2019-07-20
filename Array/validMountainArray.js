var validMountainArray = function(A) {
    if (A.length < 3) return false;
    let mountainIndex = -1;
    let i = 1;
    while (i < A.length) {
        if (A[i] > A[i - 1]) {
            i++;
        } else if (A[i] === A[i - 1]) {
            return false;
        } else {
            mountainIndex = i - 1;
            break;
        }
    }
    if (mountainIndex === 0 || i === A.length) {
        return false;
    }
    while (i < A.length) {
        if (A[i] >= A[i - 1]) {
            return false
        }
        i++;
    }
    return true;
};

console.log(validMountainArray(
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
))