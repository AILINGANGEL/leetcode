var mostCommonWord = function(paragraph, banned) {
    let bannedSet = new Set(banned);
    paragraph = paragraph.split(/[\s!?',;.]/);
    let map = {};
    paragraph.forEach(word=>{
        word = word.toLowerCase();
        if(word && !bannedSet.has(word)) {
            map[word] = map[word] === undefined ? 1: map[word] + 1;
        }
    });
    let ans;
    let cnt = 0;
    for(let key in map) {
        if(map[key] > cnt) {
            ans = key;
            cnt = map[key];
        }
    }
    return ans;
};
