var getRow = function(rowIndex) {
    let ans = [1];
    for (let row = 1; row < rowIndex + 1; row++) {
        for (let col = row; col >= 1; col--) {
            ans[col] = (ans[col] || 0) + ans[col - 1];
        }
    }
    return ans;
};