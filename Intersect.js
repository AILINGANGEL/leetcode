// 首次写的算法，利用js 对象来记录每个数字出现的下标，在对第二个数组进行遍历的时候，如果发现这个数字出现过就弹出一个下标;
var intersect = function(nums1, nums2) {
    var map = {};
    var result = [];
    for (var i = 0; i < nums1.length; i++) {
        if (map[nums1[i]] == undefined) {
            map[nums1[i]] = [i];
        } else {
            map[nums1[i]].push(i);
        }
    }

    for (var j = 0; j < nums2.length; j++) {
        let num = nums2[j];
        if (map[num] !== undefined && map[num].length !== 0) {
            result.push(num);
            map[num].shift();
        }
    }
    return result;
};

//其实上面的算法也可以不记录每个数字出现的下标,而是记录每个数字出现的次数，在对第二个数组进行遍历的时候，对出现的次数减一
//善于利用es5里面的几个高阶函数
var intersect = function(nums1, nums2) {
    var map = nums1.reduce((prev, num) => {
        // prev[num] = prev[num] === undefined ? 1 : prev[num] + 1;
        prev[num] = (prev[num] + 1) || 1;
        return prev;
    }, {});
    var result = nums2.filter((num) => {
        if (map[num]) {
            map[num]--;
            return true;
        } else {
            return false;
        }
    });
    return result;
};


// 注意js的排序函数, 按照正常的sort排序12 会比2小
var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => {
        return a - b;
    });
    nums2.sort((a, b) => {
        return a - b;
    });
    var i = 0;
    var j = 0;
    var result = [];
    while (i < nums1.length && j < nums2.length) {
        let a = nums1[i];
        let b = nums2[j];
        if (a < b) {
            i++;
        } else if (a > b) {
            j++;
        } else {
            result.push(a);
            i++;
            j++;
        }
    }
    return result;
};

console.log(intersect([6, 23, 12, 231, 1, 2, 1, 2], [2, 2, 3, 1]));