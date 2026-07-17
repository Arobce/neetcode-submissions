class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const array = []
        for (let num of nums) {
            if(array.includes(num)) {
                return true;
            } else {
                array.push(num);
            }
        }
        return false;
    }
}
