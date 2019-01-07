let sum;
var sumOfLeftLeaves = function(root) {
    sum = 0;
    helper(root);
    return sum;
};

var helper = function (root, type) {
    if(root) {
        if(root.left === null && root.right === null && type === 'left') sum += root.val;
        helper(root.left, 'left');
        helper(root.right, 'right');
    }
}
