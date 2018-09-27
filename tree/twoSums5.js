/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let nums = [];
    helper(root, nums);
    let i = 0;
    let j = nums.length - 1;
    while(i<j) {
        let sum = nums[i] + nums[j];
        if(sum < k) {
            i++;
        } else if (sum > k) {
            j--;
        } else {
            return true;
        }
    }
    return false;
};

var helper = function(root, nums) {
    if(root !== null) {
        helper(root.left, nums);
        nums.push(root.val);
        helper(root.right, nums);
    }
}
