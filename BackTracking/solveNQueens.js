var solveNQueens = function(n) {
    let ans = [], queens = [];
    backtrackNqueen(n, 0, queens, ans);
    return ans;
};


function generateMatrix(n){
    let matrix = [];
    for(let i = 0; i < n; i++) {
        let tmp = [];
        for(let j = 0; j < n; j++) {
            tmp.push('');
        }
        matrix.push(tmp);
    }
    return matrix;
}
function generateQMatrix(matrix) {
    let ans = [];
    matrix.forEach(item => {
        ans.push(item.join('.'));
    });
    return ans;
}
function backtrackNqueen(n, row, queens, ans) {
    if(row >= n) {
        let matrix = generateMatrix(n);
        for(let i = 0; i < n; i ++) {
            matrix[queens[i].x][queens[i].y] = 'Q';
        }
        ans.push(generateQMatrix(matrix));
        return;
    }
    for(let col = 0; col < n; col++){
        if(isNotUnderAttack(queens, row, col)) {
            placeQueue(queens, row, col);
            backtrackNqueen(n, row + 1, queens, ans);
            removeQueue(queens, row, col);
        }
    }
}

function isNotUnderAttack(queens, row, col) {
   for(let i = 0; i < queens.length; i++) {
       const queen = queens[i];
       if(row === queen.x || col === queen.y) {
           return false;
       }
       if(Math.abs(row - queen.x) === Math.abs(col - queen.y)) {
           return false;
       }
   }
   return true;
}

function removeQueue(queens, row, col) {
    const index = queens.findIndex(item=>item.x === row && item.y === col);
    queens.splice(index, 1);
}


function placeQueue(queens, row, col) {
    queens.push({x: row, y: col});
}
