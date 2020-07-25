/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    let ans = [];
    backtrack(0, S.split(''), ans);
    return ans;
};

var backtrack = function(index, s, ans) {
    if(index === s.length) {
        ans.push(s.join(''));
        return;
    }
    if (s[index] >= 0 && s[index] <= 9) {
        backtrack(index + 1, s, ans);
    } else {
        s[index] = s[index].toLowerCase();
        backtrack(index + 1, s, ans);
        s[index] = s[index].toUpperCase();
        backtrack(index + 1, s, ans);
    }
}
