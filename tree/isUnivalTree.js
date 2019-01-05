var isUnivalTree = function(root) {
   if(root === null) return true;
   let isUniVal = true;
   if(root.left && root.left.val !== root.val) isUniVal = false;
   if(root.right && root.right.val !== root.val) isUniVal = false;
   return isUnivalTree(root.left) && isUnivalTree(root.right) && isUniVal;
};
