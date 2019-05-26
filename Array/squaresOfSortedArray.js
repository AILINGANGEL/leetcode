var sortedSquares = function(A) {
    let negative = [];
    let positive = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] < 0) {
            negative.unshift(A[i] * A[i]);
        } else {
            positive.push(A[i] * A[i]);
        }
    }
    let i = 0;
    let j = 0;
    let ans = []
    while (i < positive.length && j < negative.length) {
        if (positive[i] <= negative[j]) {
            ans.push(positive[i]);
            i++;
        } else {
            ans.push(negative[j]);
            j++;
        }
    }
    if (i < positive.length) {
        ans.push(...positive.slice(i));
    }
    if (j < negative.length) {
        ans.push(...negative.slice(j));
    }
    return ans;
};