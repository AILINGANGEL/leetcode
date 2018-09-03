var searchBST = function(root, val) {
    if (root === null) return [];
    if (root.val === val) return root;
    if (root.val > val) return searchBST(root.left, val);
    if (root.val < val) return searchBST(root.right, val);
};

var searchBST = function(root, val) {
    if (root === null) return [];
    let node = root;
    while (node) {
        if (node.val === val) {
            return node;
        } else if (node.val > val) {
            node = node.left;
        } else if (node.val < val) {
            node = node.right;
        }
    }
    return [];
};