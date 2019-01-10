var minDiffInBST = function(root) {
    let min = Number.MAX_SAFE_INTEGER;
    let arr = [];
    helper(root, arr);
    for(let i=0; i<arr.length-1; i++){
        if(arr[i+1]-arr[i] < min) {
            min = arr[i+1]-arr[i];
        }
    }
    return min;
};

var helper = function(root, arr) {
    if(root) {
        helper(root.left, arr);
        arr.push(root.val);
        helper(root.right, arr);
    }
};
