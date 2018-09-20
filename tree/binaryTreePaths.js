/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = [];
    if (root !== null)
        helper(root, '', res);
    return res;
};

var helper = function(root, path, res) {
    if (root.left === null && root.right === null) {
        res.push(path + root.val);
        return;
    }
    if (root.left)
        helper(root.left, path + root.val + '->', res);
    if (root.right)
        helper(root.right, path + root.val + '->', res);
}
var test = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 4,
        left: null,
        right: null
    }
}

console.log(binaryTreePaths(test));