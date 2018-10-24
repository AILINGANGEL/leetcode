// var findSecondMinimumValue = function(root) {
//     let arrs = [];
//     helper(root, arrs);
//     let min = root.val;
//     let secondMin = Number.MAX_VALUE;
//     arrs.forEach(num => {
//         if (num > min && num < secondMin) {
//             secondMin = num;
//         }
//     });
//     return secondMin === Number.MAX_VALUE ? -1 : secondMin;
// };

// var helper = function(root, arrs) {
//     if (root) {
//         arrs.push(root.val);
//         helper(root.left, arrs);
//         helper(root.right, arrs);
//     }
// }

var findSecondMinimumValue = function(root) {
    let obj = {
        min: root.val,
        secondMin: Number.MAX_VALUE
    };
    helper(root, obj);
    return obj.secondMin === Number.MAX_VALUE ? -1 : obj.secondMin;

}
var helper = function(root, obj) {
    if (root) {
        if (root.val < obj.secondMin && root.val > obj.min) {
            obj.secondMin = root.val;
        } else if (root.val === obj.min) {
            helper(root.left, obj);
            helper(root.right, obj);
        }
    }
}



var test = {
    val: 2,
    left: {
        val: 2,
        right: null,
        left: null
    },
    right: {
        val: 5,
        left: null,
        right: null
    }
}

console.log(findSecondMinimumValue(test));