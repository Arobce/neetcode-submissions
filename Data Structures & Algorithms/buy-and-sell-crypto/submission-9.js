class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = left + 1;
        let max = 0;

        while (right < prices.length){

            if(prices[left] >= prices[right]) {
                left = right;
            } else {
                max = Math.max(prices[right] - prices[left], max);
            }

            right++;
        }

        return max;
    }
}
