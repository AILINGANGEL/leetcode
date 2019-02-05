var intersect = function(nums1, nums2) {
    let map = {};
    nums1.forEach(num=>{        
        map[num] = map[num] === undefined ? 1: ++map[num];        
    });
    let res = [];
    nums2.forEach(num=>{
        if(map[num]) {
            map[num]--;
            res.push(num);
        }
    });
    return res;
};
