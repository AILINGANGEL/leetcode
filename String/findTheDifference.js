var findTheDifference = function(s, t) {
    var map = {};
    for(let i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] === undefined ? 1: map[s[i]]+1;
    }
    for(let i = 0; i < t.length; i++) {
        if(map[t[i]] === undefined) {
            map[t[i]] = 1;
        } else  {
            map[t[i]]--;
        }
        if(map[t[i]] === 0) {
            delete map[t[i]];
        } 
    }
  return Object.keys(map)[0];  
};

var findTheDifference = function(s, t) {
    let diff = 0;
    for(let i = 0; i < t.length; i++) {
        diff ^= s[i] ? s[i].charCodeAt(): 0;
        diff ^= t[i].charCodeAt();
    }
    return String.fromCharCode(diff);
}