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