var longestUnivaluePath = function(root) {
    if(root === null || (root.left === null && root.right === null)) return 0;
     var l = 0;
    if( root.left && root.left.val === root.val) {
        l = 1;
    }
    var r = 0;
    if(root.right && root.right.val === root.val) {
        r = 1;
    }
    return Math.max(longestUnivaluePath(root.left) + l, longestUnivaluePath(root.right)+r); 
};
