var searchMatrix1 = function(matrix, target) {
    if(matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    const midRow = Math.floor(matrix.length / 2);
    const midCol = Math.floor(matrix[0].length / 2);
    const mid = matrix[midRow][midCol];
    if( mid === target) {
        return true;
    } else if(mid < target) {
        const rightTop = [];
        const leftBottom = [];
        const rightBottom = [];
        for(let i = 0; i <= midRow; i++){
            rightTop.push(matrix[i].slice(midCol + 1));
        }
        for(let i = midRow + 1; i < matrix.length; i++) {
            leftBottom.push(matrix[i].slice(0, midCol));
            rightBottom.push(matrix[i].slice(midCol));
        }
        return searchMatrix1(rightTop, target) || searchMatrix1(leftBottom, target) || searchMatrix1(rightBottom, target);
    } else {
        const leftTop = [];
        const rightTop = [];
        const leftBottom = [];
        for(let i = 0; i < midRow; i++){
            leftTop.push(matrix[i].slice(0, midCol));
            rightTop.push(matrix[i].slice(midCol));
        }
        for(let i = midRow; i < matrix.length; i++) {
            leftBottom.push(matrix[i].slice(0, midCol));
        }
        return searchMatrix1(leftTop, target) || searchMatrix1(rightTop, target) || searchMatrix1(leftBottom, target);
    }
};


var searchMatrix2 = function(matrix, target) {
    if(matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    const midCol = Math.floor(matrix[0].length / 2);
    let midRow;
    var i;
    for(i = 0; i < matrix.length; i++) {
        if(matrix[i][midCol] === target) {
            return true;
        } else if(matrix[i][midCol] > target){
            midRow = i;
            break;
        }
    }
    if(i === matrix.length) {
        midRow = matrix.length;
    }

    const rightTop = [], leftBottom = [];
    for(let i = 0; i < midRow; i++) {
        rightTop.push(matrix[i].slice(midCol + 1));
    }
    for(let i = midRow; i < matrix.length; i++) {
        leftBottom.push(matrix[i].slice(0, midCol));
    }
    return searchMatrix2(rightTop, target) || searchMatrix2(leftBottom, target);
};


const test = [
    [1,4,7,11,15],
    [2,5,8,12,19],
    [3,6,9,16,22],
    [10,13,14,17,24],
    [18,21,23,26,30]
];
const target = -1;
console.log(searchMatrix1(test, target));
console.log(searchMatrix2(test, target));
