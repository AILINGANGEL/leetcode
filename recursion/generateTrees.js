/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }
    return generateTree(1, n);
};

var generateTree = function(start, end) {
    if (start > end) {
        return [null];
    }
    let nodes = [];
    for (let i = start; i <= end; i++) {
        let left = generateTree(start, i - 1);
        let right = generateTree(i + 1, end);
        for (let j = 0; j < left.length; j++) {
            for (let k = 0; k < right.length; k++) {
                nodes.push({ val: i, left: left[j], right: right[k] });
            }
        }
    }
    return nodes;
}