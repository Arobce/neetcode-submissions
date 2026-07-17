class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = 0;
        let sell = 1;
        let max = 0;

        while(sell < prices.length) {
            if(prices[sell] < prices[buy]) {
                buy++;
            } else {
                max = Math.max(max, prices[sell] - prices[buy]);
                sell++;
            }
        }

        return max;
    }
}
