var preorderTraversal = function(root) {
    let arr = [];
    preorderTree(root, arr);
    return arr;
};

var preorderTree = function(root, arr) {
    if (root){
        arr.push(root.val);
        preorderTree(root.left, arr);
        preorderTree(root.right, arr);
    }
}