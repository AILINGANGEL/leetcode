var isUnivalTree = function(root) {
   if(root === null) return true;
   let isUniVal = true;
   if(root.left && root.left.val !== root.val) isUniVal = false;
   if(root.right && root.right.val !== root.val) isUniVal = false;
   return isUnivalTree(root.left) && isUnivalTree(root.right) && isUniVal;
};


//DFS
var isUnivalTree = function(root) {
    let arr = [];
    helper(root, arr);
    return (new Set(arr)).size < 2;
};

var helper = function(root, arr) {
    if(root) {
        arr.push(root.val);
        helper(root.left, arr);
        helper(root.right, arr);
    }
};
