let sum;
var rangeSumBST = function(root, L, R) {
    sum = 0;
    helper(root, L, R);
    return sum;
};

var helper = function(root, L, R) {
    if (root) {
        let val = root.val;
        if (val >= L && val <= R) {
            sum += val;
        }
        if (L < val) {
            helper(root.left, L, R);
        }
        if (val < R) {
            helper(root.right, L, R);
        }
    }
}