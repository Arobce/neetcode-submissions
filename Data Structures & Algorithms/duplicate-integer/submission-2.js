class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      let countHash = {};

      for(let num of nums) {
        if(countHash[num]) {
            return true;
        }

        countHash[num] = 1;
      }

      return false;
    }
}
