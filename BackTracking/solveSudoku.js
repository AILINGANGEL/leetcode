/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    solve(board);
};
var solve = function(board) {
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            if(board[i][j] === '.') {
                for(let k = 1; k < 10; k++) {
                    if(isValid(board,i,j,k)) {
                        board[i][j] = k + '';
                        if(solve(board)) {
                            return true;
                        } else {
                            board[i][j] = '.';
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function isValid(board, row, col, k) {
    for(let i = 0; i < 9; i++) {
        if(board[i][col] === k + ''){
            return false;
        }
        if(board[row][i] === k + '') {
            return false;
        }
    }
    let startRow = Math.floor(row/3)*3;
    let startCol = Math.floor(col/3)*3;
    
    for(let i = startRow; i < startRow + 3; i++) {
        for(let j = startCol; j < startCol + 3; j++) {
            if(board[i][j] === k+'') {
                return false;
            }
        }
    }
    return true;
}
