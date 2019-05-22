var maxProfit = function(prices) {
    let res = [];
    res[0] = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        res[i] = Math.max(res[i - 1], prices[i] - min);
    }
    return res[res.length - 1];
}

let test = [7, 6, 5, 4, 3];
console.log(maxProfit(test));



var maxProfit = function(prices) {
    let min = Number.MAX_VALUE;
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else if (prices[i] - min > profit) {
            profit = prices[i] - min;
        }
    }
    return profit;
};

var maxProfit = function(prices) {
    let arr = [0];
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        arr[i] = Math.max(arr[i - 1], prices[i] - min);
        if (prices[i] < min) {
            min = prices[i];
        }
    }
    return arr[arr.length - 1];
};