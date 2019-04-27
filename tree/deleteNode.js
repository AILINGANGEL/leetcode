var deleteNode = function(root, key) {
    if(root) {
        if(root.val < key) {
            root.right = deleteNode(root.right, key);
        } else if (root.val > key) {
            root.left = deleteNode(root.left, key);
        } else {
            return helper(root);
        }
    }
    return root;
};
var helper = function(node) {
    if(node.right === null) {
        return node.left;
    }
    if(node.left === null) {
        return node.right;
    }
    let rightLeftMostNode = node.right;
    while(rightLeftMostNode.left) {
        rightLeftMostNode = rightLeftMostNode.left;
    }
    rightLeftMostNode.left = node.left;
    return node.right;
}