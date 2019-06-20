var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false;
    let m = matrix[0].length;
    let n = matrix.length;
    let i = 0;
    let j = n - 1;
    while (i < m && j > -1) {
        let item = matrix[j][i];
        if (item === target) {
            return true;
        } else if (item < target) {
            i++;
        } else {
            j--;
        }
    }
    return false;
};

var searchMatrix = function(matrix, target) {
    let arr = flatArray(matrix);
    console.log(arr);
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        con
        if (mid === target) {
            return true;
        } else if (mid < target) {
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }
    return false;
};
var flatArray = function(nums) {
    return nums.reduce((acc, item) => {
        if (Array.isArray(item)) {
            return acc.concat(flatArray(item));
        } else {
            return acc.concat(item);
        }
    }, []);
}

console.log(searchMatrix([
    [1]
], 0))