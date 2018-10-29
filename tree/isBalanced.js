var isBalanced = function(root) {
    if(root === null) return true;
    return isBalanced(root.left) && isBalanced(root.right) && Math.abs(getHeight(root.left) - getHeight(root.right)) <=1;
};

var getHeight = function(root) {
    if(root === null) return 0;
    return Math.max(getHeight(root.left), getHeight(root.right) ) + 1;
}


// 递归
let res = true;
var isBalanced = function(root) {
    res = true;
    helper(root);
    return res;
};

var helper = function(root) {
    if(root===null) return 0;
    let left = helper(root.left);
    let right = helper(root.right);
    if(Math.abs(left - right) > 1) {
        res = false;
    }
    return Math.max(left, right) + 1;
}