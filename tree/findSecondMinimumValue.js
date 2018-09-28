var findSecondMinimumValue = function(root) {
    let min = root.val;
    let rightMin = helper(root.right);
    let leftMin = helper(root.left);

}; 

var helper = function(root) {
    if(root === null) return Number.MAX_VALUE;
    let min;
    let secondMin = -1;
    let leftMin = Number.MAX_VALUE;
    let rightMin = Number.MAX_VALUE;
    if(root.left) {
        leftMin = helper(root.left);
    }
    if(root.right) {
        rightMin = helper(root.right);
    }
    min = Math.min(root.val, leftMin, rightMin);
    return min;
}

var test = {
    val: 2,
    left: {
        val: 2,
        right: null,
        left: null
    },
    right: {
        val: 2,
        left: null,
        right: null
    }
}

console.log(helper(test));