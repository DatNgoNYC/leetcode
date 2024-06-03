/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 0 || prices.length === 1) {
        return [0];
    } 

    if (prices.length === 2) {
        return [Math.max(0, prices[1] - prices[0])];
    }

    var max_profit = 0;
    var buy_day = 0
    for (let i = 0; i < prices.length; i++) {
        // if buy_day_price - sell_day_price is less than 0 
        //  go ahead and push the buy day by 1 because we wouldnt want to buy at a price higher than sell
        let buy_day_price = prices[buy_day]
        let sell_day_price = prices[i]
        let window_profit = sell_day_price - buy_day_price
        if (window_profit < 0) {
            buy_day = i;
        } else if (window_profit > max_profit) {
            max_profit = window_profit 
        }
    }
    
    return [max_profit];
};

console.log(maxProfit([7,1,5,3,6,4])[0] === 5)
console.log(maxProfit([7,6,4,3,1])[0] === 0)
