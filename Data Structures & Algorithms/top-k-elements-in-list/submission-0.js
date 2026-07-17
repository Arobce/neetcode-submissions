class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) {
                map.set(nums[i], map.get(nums[i]) + 1);
            } else {
                map.set(nums[i], 1);
            }
        }

        const array = Array.from({ length: nums.length + 1 }, () => []);

        map.forEach((value, key) => {
            array[value].push(key);
        })

        // Pointer serach
        let left = array.length - 1;
        let returnArray = [];

        while (returnArray.length != k) {
            if (array[left]) {
                returnArray.push(...array[left]);
            }
            left--;
        }

        return returnArray;
    }
}
