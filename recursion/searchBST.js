var searchBST = function(root, val) {
    if(root) {
        if(root.val === val) {
            return root;
        }
        if(root.val < val) {
            return searchBST(root.right, val);
        }
        if(root.val > val) {
            return searchBST(root.left, val);
        }
    }
    return null;
};