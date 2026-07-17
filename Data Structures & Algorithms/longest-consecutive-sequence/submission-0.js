class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let longest = 0;


        for(let i = 0; i < nums.length; i++) {
            let num = nums[i];

            // Is the start
            if(!set.has(num - 1)) {
                let length = 0;
                
                while (set.has(num + length)){
                    length++;
                }
                longest = Math.max(longest, length);
            }
            
        }

        return longest;
    }
}
