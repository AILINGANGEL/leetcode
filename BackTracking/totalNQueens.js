let count = 0;
var totalNQueens = function(n) {
    count = 0;
    const queens = [];
    backtrackNqueen(n, 0, queens);
    return count;
};

function backtrackNqueen(n, row=0, queens=[]) {
    if(row >= n) {
        count++;
        return;
    }
    for(let col = 0; col < n; col++){
        if(isNotUnderAttack(queens, row, col)) {
            placeQueue(queens, row, col);
            backtrackNqueen(n, row + 1, queens);
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
