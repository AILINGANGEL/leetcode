/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    if(intervals.length === 0) {
        return [];
    }
    if(intervals.length === 1) {
        return [-1];
    }
    intervals.forEach((interval, index)=>{
        interval.push(index);
    });
    intervals.sort(function(a, b){
        return a[0] - b[0];
    });
    
    for(let i = 0; i < intervals.length; i++) {
        let found = false;
        for(let j = i + 1; j < intervals.length; j++) {
            if(intervals[j][0] >= intervals[i][1]){
                found = true;
                intervals[i].push(intervals[j][2]);
                break;
            }
        }
        if(!found) {
            intervals[i].push(-1);
        }
    }
    return intervals.sort(function(a, b){
        return a[2] - b[2];
    }).map(item=>item[3]);
};

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    if(intervals.length === 0) {
        return [];
    }
    if(intervals.length === 1) {
        return [-1];
    }
    let startIndexMap = {};
    let starts = [];
    intervals.forEach((interval, index)=>{
        startIndexMap[interval[0]] = index;
        starts.push(interval[0]);
    });
    starts.sort((a,b)=>a-b);
    let ans = [];
    for(let i = 0; i < intervals.length; i++){
        let end = intervals[i][1];
        let bigger = findBigger(starts, end);
        if(bigger < end) {
            ans.push(-1);
        } else {
            ans.push(startIndexMap[bigger]);
        }
    }
    return ans;
};

var findBigger = function(arr, num) {
    let i = 0;
    let j = arr.length - 1;
    let bigger = arr[j];
    while(i <= j) {
        let mid = Math.floor((i + j) / 2);
        if(arr[mid] === num) {
            return num;
        } else if(arr[mid] < num) {
            i = mid + 1;
        } else {
            bigger = Math.min(bigger, arr[mid]);
            j = mid - 1;
        }
    }
    return bigger;
}


var findRightInterval = function(intervals) {
    if(intervals.length === 0) {
        return [];
    }
    if(intervals.length === 1) {
        return [-1];
    }
    let startIndexMap = {};
    let starts = [];
    intervals.forEach((interval, index)=>{
        startIndexMap[interval[0]] = index;
        starts.push(interval[0]);
    });
    starts.sort((a,b)=>a-b);
    intervals.sort((a,b)=>a[1]-b[1]);
    let ans = [];
    let j = 0;
    for(let i = 0; i < intervals.length; i++){
        let end = intervals[i][1];
        while(j < starts.length && starts[j] < end) {
            j++;
        }
        let index = startIndexMap[intervals[i][0]];
        if(j === starts.length) {
            ans[index] = -1;
        } else {
            ans[index] = startIndexMap[starts[j]];
        }
    }
    return ans;
};


let test = [ [3,4], [2,3], [1,2] ];
// let test = [ [1,4], [2,3], [3,4] ];
console.log(findRightInterval(test));
