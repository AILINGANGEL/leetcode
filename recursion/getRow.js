// 自底向上
var getRow = function(rowIndex) {
    if(rowIndex === 0) {
        return [1];
    }
    let preRow = getRow(rowIndex - 1);
    let ans = []
    // 第rowIndex行含有rowIndex+1个元素
    for(let i = 0; i < rowIndex + 1; i++){
        if(i === 0 || i === rowIndex) {
            ans[i] = 1;
        } else {
            ans[i] = preRow[i-1] + preRow[i];
        }
    }
    return ans;
};

// 自顶向下
var getRow = function(rowIndex) {
    let ans = [1];
    helper(1, rowIndex, ans);
    return ans;
};
var helper = function(i, rowIndex, ans) {
    if(i <= rowIndex) {
        let newAns = [];
        for(let j = 0; j < i + 1; j++){
            if(j === 0 || j === i) {
                newAns[j] = 1;
            } else {
                newAns[j] = ans[j-1]+ans[j]; 
            }
        }
        ans.splice(0);
        ans.push(...newAns);
        helper(i+1, rowIndex, ans);
    }
}