var isValidBST = function(root) {
    var arr = [];
    inOrderTranverse(root, arr);
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] >= arr[i+1]) {
            return false;
        }
    }
    return true;
}

var inOrderTranverse = function(root, arr) {
    if(root) {
        inOrderTranverse(root.left, arr);
        arr.push(root.val);
        inOrderTranverse(root.right, arr);
    }
}

var test = {
    val: 2,
    left: null,
    right: {
        val: -1,
        left: null,
        right: null
    }
}

console.log(isValidBST(test));