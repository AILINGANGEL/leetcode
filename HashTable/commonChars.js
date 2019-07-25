var commonChars = function(A) {
    if (A.length < 2) return A;
    let firstChar = A[0];
    let tmp = {};
    for (let i = 0; i < A.length; i++) {
        let char = A[i];
        for (let j = 0; j < char.length; j++) {
            if (tmp[char[j]] !== undefined) {
                tmp[char[j]]++;
            } else {
                tmp[char[j]] = 1;
            }
        }
    }
    console.log(tmp)
    let len = A.length;
    let ans = [];
    for (let [key, value] of Object.entries(tmp)) {
        if (value >= len) {
            let cnt = Math.floor(value / len);
            while (cnt) {
                ans.push(key);
                cnt--;
            }
        }
    }
    return ans;
};

console.log(commonChars(["acabcddd", "bcbdbcbd", "baddbadb", "cbdddcac", "aacbcccd", "ccccddda", "cababaab", "addcaccd"]))