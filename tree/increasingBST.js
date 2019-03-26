// 终须遍历
var increasingBST = function(root) {
    let arrNodes = [];
    inorderTranverse(arrNodes, root);
    let newRoot = {
        val: arrNodes[0],
        left: null,
        right: null
    };
    let node = newRoot;
    for (let i = 1; i < arrNodes.length; i++) {

        node.right = {
            val: arrNodes[i],
            left: null,
            right: null
        }
        node = node.right;
    }
    return newRoot;
};

var inorderTranverse = function(arr, root) {
    if (root) {
        inorderTranverse(arr, root.left);
        arr.push(root.val);
        inorderTranverse(arr, root.right);
    }
};

// 一边遍历一边relink
let node;
var increasingBST = function(root) {
    ans = { val: 0, right: null, left: null };
    node = ans;
    inorder(root);
    return ans.right;
};

var inorder = function(root) {
    if (root) {
        inorder(root.left, node);
        root.left = null;
        node.right = root;
        node = root;
        inorder(root.right, node);
    }
}