class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const setLength = new Set(nums);
        return setLength.size != nums.length;
    }
}
