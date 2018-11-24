var blockNo = function(x, y) {
    if (x < 3) {
        if (y < 3) return 1;
        if (y < 6) return 2;
        if (y < 9) return 3;
    } else if (x < 6) {
        if (y < 3) return 4;
        if (y < 6) return 5;
        if (y < 9) return 6;
    } else {
        if (y < 3) return 7;
        if (y < 6) return 8;
        if (y < 9) return 9;
    }
}

var isValidSudoku = function(board) {
    var map = {};
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            let num = board[i][j];
            if (num !== '.') {
                if (map[num] === undefined) {
                    map[num] = [
                        [i, j]
                    ];
                } else {
                    for (let k = 0; k < map[num].length; k++) {
                        if (i === map[num][k][0]) {
                            return false;
                        }
                        if (j === map[num][k][1]) {
                            return false;
                        }

                        if (blockNo(i, j) === blockNo(map[num][k][0], map[num][k][1])) {
                            return false;
                        }
                    }
                    map[num].push([i, j]);
                }
            }
        } //for
    } //for
    return true;
};


var isValidSudoku = function(board) {
    let colMap = {};
    let rowMap = {};
    let squareMap = {};
    for(let i = 0; i<board.length; i++) {
        for(let j = 0; j < board.length; j++) {
            let num = board[i][j];
            if(num === '.') continue;
            let squareNo = getSquareNo(i, j);
            if(rowMap[i] === undefined) {
                rowMap[i] = [num];
            } else if (rowMap[i].indexOf(num) > -1) {
                return false;
            } else {
                rowMap[i].push(num);
            }
            if(colMap[j] === undefined) {
                colMap[j] = [num];
            } else if (colMap[j].indexOf(num) > -1) {
                return false;
            } else {
                colMap[j].push(num);
            }
            if(squareMap[squareNo] === undefined) {
                squareMap[squareNo] = [num];   
            } else if (squareMap[squareNo].indexOf(num) > -1) {
                console.log(3);
                return false;
            } else {
                squareMap[squareNo].push(num);
            }
        }
    }
    return true;
};

var getSquareNo = function(i, j) {
    if(i>=0 && i<=2) {
        if(j>=0 && j<=2){
            return 1;
        } else if (j>2 && j<=5) {
            return 2;
        } else if (j>5 && j<=8 ) {
            return 3;
        }
    }else if (i>2 && i<=5) {
        if(j>=0 && j<=2){
            return 4;
        } else if (j>2 && j<=5) {
            return 5;
        } else if (j>5 && j<=8 ) {
            return 6;
        }
    } else if (i>5 && i<=8) {
        if(j>=0 && j<=2){
            return 7;
        } else if (j>2 && j<=5) {
            return 8;
        } else if (j>5 && j<=8 ) {
            return 9;
        }
    }
};