var topKFrequent = function(nums, k) {
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]] === undefined) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]]++;
        }
    }
    
    return Object.keys(map).sort((a,b)=>(map[b] - map[a])).filter((item, index)=>index < k);
};
