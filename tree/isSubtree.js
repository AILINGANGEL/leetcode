var isSubtree = function(s, t) {
    let arr1 = [];
    let arr2 = [];
    helper(s, arr1);
    helper(t, arr2);
    return arr1.join(',').indexOf(arr2.join(',')) > -1;
};

var helper = function(root, arr) {
    if (root) {
        helper(root.left, arr);
        helper(root.right, arr);
        arr.push('#' + root.val + '#'); // 前后加##防止出现 如下例子所出现的情况
    } else {
        arr.push('null'); // 检验结构是否相同
    }
}

var test = {
    val: 12,
    right: null,
    left: null
}

var test1 = {
    val: 1,
    left: null,
    right: null
}
// let arr = [];
// helper(test, arr);
// console.log(arr.join(','));

// let arr1 = [];
// helper(test1, arr1);
// console.log(arr1.join(','));

console.log(isSubtree(test, test1));