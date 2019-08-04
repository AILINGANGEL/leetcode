var reconstructQueue = function(people) {
    people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);
    let ans = [];
    console.log(people);
    for (let i = 0; i < people.length; i++) {
        ans.splice(people[i][1], 0, people[i]);
    }
    console.log(ans);
    return ans;
};

reconstructQueue([
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2]
])