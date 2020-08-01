/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if (k <= 0) return [];
    let ans = [];
    helper(0, k, n, [], ans);
    return ans;
};

var helper = function(level, k, n, combination, combinations) {
    if (combination.length === k) {
        combinations.push([...combination]);
        return;
    }
    const start = combination[level - 1] || 0;
    for (let i = start + 1; i <= (n - k + 1 + level); i++) {
        combination[level] = i;
        helper(level + 1, k, n, combination, combinations);
        combination.splice(level);
    }
}

console.log(combine(4, 2));