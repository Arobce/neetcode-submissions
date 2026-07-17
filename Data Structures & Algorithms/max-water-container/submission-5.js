class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let right = heights.length - 1;
        let area = 0;
        let left = 0;

        while (left < right) {
            let height = Math.min(heights[left], heights[right]);
            let calcArea = height * (right - left);

            console.log(right);
            console.log(left);

            area = Math.max(calcArea, area);

            if (heights[left] <= heights[right]) {
                left++;
            } else {
                right--;
            }

            console.log("Area"+calcArea);
        }

        return area;
    }
}
