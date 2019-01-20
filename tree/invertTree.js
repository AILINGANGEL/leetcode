var invertTree = function(root) {
    if (root === null || (root.right === null && root.left === null)) return root;
    let left = root.left;
    let right = root.right;
    root.left = right;
    root.right = left;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};


var invertTree = function(root) {
    if(root) {
        let temp = root.left;
        root.left = root.right;
        root.right = temp;
        invertTree(root.left);
        invertTree(root.right);
    }
    return root;
};
