var groupAnagrams = function(strs) {
    let map = {};
    for(let i = 0; i < strs.length; i++) {
        let key = strs[i].split('').sort().join('');
        if(map[key] === undefined) {
            map[key] = [strs[i]];
        } else {
            map[key].push(strs[i]);
        }
    }
    return Object.values(map);
};
