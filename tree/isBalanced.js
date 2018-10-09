var isBalanced = function(root) {
    if(root === null) return true;
    return isBalanced(root.left) && isBalanced(root.right) && Math.abs(getHeight(root.left) - getHeight(root.right)) <=1;
};

var getHeight = function(root) {
    if(root === null) return 0;
    return Math.max(getHeight(root.left), getHeight(root.right) ) + 1;
}