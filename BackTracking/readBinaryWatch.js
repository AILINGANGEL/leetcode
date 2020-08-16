/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    if(num < 0 || num >= 10) return [];
    let ans = [];
    let leds = Array(10).fill(0);
    helper(0, leds, num, ans);
    return ans;
};

var helper = function( next, leds , num, ans) {
    if(num === 0) {
        const time = getTime(leds);
        ans.push(time);
        return;
    }
    
    for(let i = next; i < 10; i++) {
        leds[i] = 1;
        if(isValidTime(leds)) {
            helper(i+1, leds, num - 1, ans);
        } 
        leds[i] = 0;
    }
}

var isValidTime = function(leds) {
    let hour = 0;
    for(let i = 0; i < 4; i++) {
        hour += leds[i] * Math.pow(2, i);
    }
    if(hour > 11) {
        return false;
    }
    let minute = 0;
    for(let j = 4; j < 10; j++) {
        minute += leds[j] * Math.pow(2, j - 4);
    }
    if(minute > 59) {
        return false;
    }
    return true;
}

var getTime = function(leds) {
    let hour = 0;
    for(let i = 0; i < 4; i++) {
        hour += leds[i] * Math.pow(2, i);
    }
    
    let minute = 0;
    for(let j = 4; j < 10; j++) {
        minute += leds[j] * Math.pow(2, j - 4);
    }
    minute = minute < 10 ? '0' + minute : minute;
    return hour + ':' + minute;
}
