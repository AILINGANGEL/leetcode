var rotateString = function(A, B) {
    if (A.length !== B.length) return false;
    let m = 0;
    while (m < A.length) {
        if (A[m] !== B[0]) {
            m++;
        } else {
            if (A.substring(m, A.length) === B.substring(0, B.length - m) && A.substring(0, m) === B.substring(B.length - m, B.length)) {
                return true;
            } else {
                m++;
            }
        }
    }
    if (A === '') return B === '';
    return false;
};

let A = "abcde"
let B = "abced"

console.log(rotateString(A, B));