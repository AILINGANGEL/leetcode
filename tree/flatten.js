var flatten = function(root) {
    helper(root);
};

var helper = function(root) {
    if (root === null) return root;
    if (root.left === null && root.right === null) return root;
    let leftEndNode = helper(root.left);
    let rightEndNode = helper(root.right);
    if (leftEndNode) {
        leftEndNode.right = root.right;
        root.right = root.left;
        root.left = null;
    }
    if (rightEndNode === null) return leftEndNode;
    return rightEndNode;
}