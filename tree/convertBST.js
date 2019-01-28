let sum ;
var convertBST = function(root) {
    sum = 0;
    return helper(root);
};

var helper = function(root) {
    if(root) {
        helper(root.right);
        sum += root.val;
        root.val = sum;
        helper(root.left);
    }
    return root;
}
