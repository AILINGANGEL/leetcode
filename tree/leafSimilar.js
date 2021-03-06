var leafSimilar = function(root1, root2) {
    let arr1 = [];
    let arr2 = [];
    findLeaf(root1, arr1);
    findLeaf(root2, arr2);
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


var leafSimilar = function(root1, root2) {
    let leafs1 = [];
    getLeaf(leafs1, root1);
    let leafs2 = [];
    getLeaf(leafs2, root2);
    if (leafs1.length !== leafs2.length) return false;
    for (let i = 0; i < leafs1.length; i++) {
        if (leafs1[i] !== leafs2[i]) {
            return false;
        }
    }
    return true;
};

var getLeaf = function(arr, root) {
    if (root) {
        if (root.left === null && root.right === null) {
            arr.push(root.val);
        }
        getLeaf(arr, root.left);
        getLeaf(arr, root.right);
    }
}