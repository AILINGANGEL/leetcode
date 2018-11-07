var maxProfit = function(prices) {
    let res = [];
    res[0] = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        res[i] = Math.max(res[i - 1], prices[i] - min, 0);
    }
    return res[res.length - 1];
}

let test = [7, 6, 5, 4, 3];
console.log(maxProfit(test));