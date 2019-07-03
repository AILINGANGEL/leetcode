function pathSum(root, sum) {
    if (root === null) return 0;
    return pathSum(root.left, sum) + pathSum(root.right, sum) + helper(root, sum);
};

function helper(root, sum) {
    if(root === null) {
        return 0;
    }
    let count = root.val === sum ? 1: 0;
    return helper(root.left, sum - root.val) + helper(root.right, sum - root.val) + count;
};