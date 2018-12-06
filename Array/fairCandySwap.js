var fairCandySwap = function(A, B) {
    let sumA = A.reduce((total, num) => total + num, 0);
    let sumB = B.reduce((total, num) => total + num, 0);
    let gap = (sumB - sumA) / 2;
    let i = 0;
    let set = new Set(B);
    while (i < A.length) {
        if (set.has(A[i] + gap)) {
            return [A[i], A[i] + gap];
        }
        i++;
    }
};
var a = [1, 2, 5];
var b = [2, 4];
console.log(fairCandySwap(a, b));