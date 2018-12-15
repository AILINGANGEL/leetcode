var fourSumCount = function(A, B, C, D) {
    let map = {};
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            map[A[i] + B[j]] = map[A[i] + B[j]] ? map[A[i] + B[j]] + 1 : 1;
        }
    }
    let res = 0;

    for (let i = 0; i < C.length; i++) {
        for (let j = 0; j < D.length; j++) {
            if (map[-(C[i] + D[j])]) {
                res += map[-(C[i] + D[j])];
            }
        }
    }
    return res;
};

var a = [-1, -1];
var b = [-1, 1];
var c = [-1, 1];
var d = [1, -1];

console.log(fourSumCount(a, b, c, d));