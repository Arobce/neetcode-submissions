class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let set = new Set();
        let max = 0;

        for (let i = 0; i < s.length; i++) {
            let char = s[i];

            while (set.has(char)) {

                set.delete(s[left]);
                left++;
            }
            set.add(char);

            max = Math.max(max, set.size);

        }

        return max;


    }
}
