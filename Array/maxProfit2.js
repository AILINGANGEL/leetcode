var maxProfit = function(prices) {
     let profit = 0;
     for(let i=1; i<prices.length; i++) {
         if(prices[i] > prices[i-1]) {
             profit += (prices[i] - prices[i-1]);
         }
     }
    return profit;
};



var maxProfit = function(prices) {
    let profit = 0;
    let peak = prices[0];
    let valley = prices[0];
    let i = 1;
    while(i < prices.length) {
        while(i < prices.length && prices[i] <= prices[i-1]) {
            i++;
        }
        valley = prices[i - 1];
        while(i < prices.length && prices[i] >= prices[i-1]) {
            i++;
        }
        peak = prices[i - 1];
        profit += peak - valley;
    }
    return profit;
};
