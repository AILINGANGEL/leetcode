var intersection = function(nums1, nums2) {
    let map = {};
    nums1.forEach(item=> {
        if(map[item] === undefined) {
            map[item] = true;
        }
    })
    let res = [];
    nums2.forEach(item=> {
        if(map[item]) {
            res.push(item);
            delete map[item];
        }
    })
    return res;
};
