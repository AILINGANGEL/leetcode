var maxDepth = function(root) {
    if (root === null) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
   if (root === null) return 0;
    let queue = [root];
    let nextLevel = [];
    let ans = 1;
    while (queue.length > 0) {
        let node = queue.shift();
        if (node.left) {
            nextLevel.push(node.left);
        }
        if (node.right) {
            nextLevel.push(node.right);
        }
        if (queue.length === 0 && nextLevel.length > 0) {
            ans++;
            queue = nextLevel;
            nextLevel = [];
        }
    }
    return ans;
};