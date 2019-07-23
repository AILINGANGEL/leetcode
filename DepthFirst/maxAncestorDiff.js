var maxAncestorDiff = function(root) {
    return dfs(root, root.val, root.val);
};

var dfs = function(root, maxVal, minVal) {
    if (root === null) return maxVal - minVal;
    maxVal = Math.max(root.val, maxVal);
    minVal = Math.min(root.val, minVal);
    let left = dfs(root.left, maxVal, minVal);
    let right = dfs(root.right, maxVal, minVal);
    return Math.max(left, right);
}

//     0
//   /   \
//  null  1


// const MAX_VALUE = 100001;
// const MIN_VALUE = -1;
// var ans;
// var maxAncestorDiff = function(root) {
//     ans = 0;
//     helper(root);
//     return ans;
// };

// var helper = function(root) {
//     if (root === null) return { max: MIN_VALUE, min: MAX_VALUE };
//     if (root.left === null && root.right === null) return { max: root.val, min: root.val };
//     var { max: leftMax, min: leftMin } = helper(root.left);
//     var { max: rightMax, min: rightMin } = helper(root.right);

//     var left1 = Math.abs(root.val - leftMax);
//     var left2 = Math.abs(root.val - leftMin);
//     var right1 = Math.abs(root.val - rightMax);
//     var right2 = Math.abs(root.val - rightMin);

//     ans = Math.max(left1, left2, right1, right2);
//     console.log('-------------------')
//     console.log('root', root.val);
//     console.log('max', Math.max(leftMax, rightMax));
//     console.log('min', Math.min(leftMin, rightMin))

//     return { max: Math.max(leftMax, rightMax, root.val), min: Math.min(leftMin, rightMin, root.val) };
// }