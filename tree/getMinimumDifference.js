var getMinimumDifference = function(root) {
    let arr = [];
    helper(root, arr);
    let res = arr[1] - arr[0];
    let i = 1;
    let j = 2;
    while(j < arr.length) {
        if(arr[j] - arr[i] < res) {
            res = arr[j] -arr[i];
        }
        i++;
        j++;
    }
    return res;
};

var helper = function(root, arr) {
    if(root) {
        helper(root.left, arr);
        arr.push(root.val);
        helper(root.right, arr);
    }
};
