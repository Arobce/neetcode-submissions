class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while(l <= r) {
            let m = Math.floor((l + r) / 2);
            
            // If mid is value return 
            if(nums[m] === target) {
                return m;
            }

            // If m is greater than left means it is part of a subarray
            if(nums[m] >= nums[l]) {
                // Means the num is in right
                // Means the target is less than left most, means search right
                if(target > nums[m] || target < nums[l]) {
                    l = m + 1;
                } else {
                    r = m -1;
                }
            } else {
                if (target < nums[m] || target > nums[r]) {
                    r = m - 1;
                } else {
                    l = m  + 1;
                }
            }
        }
        return -1;
    }
}
