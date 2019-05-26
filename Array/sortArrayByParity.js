var sortArrayByParity = function(A) {
    let i = 0;
    let j = A.length - 1;
    while (i < j) {
        console.log(A);
        if (isEven(A[i])) {
            i++;
        }
        if (!isEven(A[j])) {
            j--;
        }
        [A[i], A[j]] = [A[j], A[i]];
    }
    return A;
};

const isEven = x => x % 2 === 0;

console.log(sortArrayByParity([3, 1, 2, 4]))