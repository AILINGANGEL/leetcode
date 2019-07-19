var relativeSortArray = function(arr1, arr2) {
    let ans = [];
    for (let i = 0; i < arr2.length; i++) {
        let j = 0;
        while (j < arr1.length) {
            if (arr1[j] === arr2[i]) {
                ans.push(arr1[j]);
                arr1.splice(j, 1);
            } else {
                j++;
            }
        }
    }
    if (arr1.length === 0) {
        return ans;
    } else {
        return ans.concat(arr1.sort((a, b) => a - b));
    }
};