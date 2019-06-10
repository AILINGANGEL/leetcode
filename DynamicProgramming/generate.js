var generate = function(numRows) {
    if (numRows === 0) {
        return [];
    }
    if (numRows === 1) {
        return [
            [1]
        ];
    }

    let tmp = generate(numRows - 1);
    let row = [];
    for (i = 0; i < numRows; i++) {
        if (i === 0 || i === numRows - 1) {
            row[i] = 1;
        } else {
            row[i] = tmp[numRows - 2][i - 1] + tmp[numRows - 2][i];
        }
    }
    tmp.push(row);
    return tmp;
};

var generate = function(numRows) {
    if (numRows === 0) return [];
    let ans = [
        [1]
    ];
    for (let i = 1; i < numRows; i++) {
        let row = [];
        row[0] = 1;
        row[i] = 1;
        for (let j = 1; j < i; j++) {
            row[j] = ans[i - 1][j - 1] + ans[i - 1][j];
        }
        ans.push(row);
    }
    return ans;
};