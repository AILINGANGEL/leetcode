var leafSimilar = function(root1, root2) {
    let arr1 = [];
    let arr2 = [];
    findLeaf(root1, arr1);
    findLeaf(root2, arr2);
    if (arr1.length !== arr2.length) return false;
    return arr1.join(',') === arr2.join(',');
};

var findLeaf = function(root, arr) {
    if (root !== null) {
        findLeaf(root.left, arr);
        findLeaf(root.right, arr);
        if (root.left === null && root.right === null) {
            arr.push(root.val);
        }
    }
}