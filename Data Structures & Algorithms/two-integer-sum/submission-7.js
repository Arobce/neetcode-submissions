class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            let num =  nums[i];

            let toGo = target - num;

            console.log(toGo);

            let foundIndex = nums.findLastIndex(val => val === toGo);

            if(foundIndex === i) continue;

            if (foundIndex != -1) {
                return [i, foundIndex]
            }
        }
    }
}
