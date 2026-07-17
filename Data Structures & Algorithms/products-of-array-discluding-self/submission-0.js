class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
      let prefixMul = [];
    let postfixMul = Array(nums.length);
    let mul = 1;

    for (let i = 0; i < nums.length; i++) {
        mul *= nums[i];
        prefixMul.push(mul);
    }

    console.log(prefixMul);

    mul = 1;

    for (let j = nums.length - 1; j >= 0; j--) {
        mul *= nums[j];
        postfixMul[j] = mul;
    }

    // Create final array
    let finalArray = [];

    console.log(postfixMul);


    for (let i = 0; i < nums.length; i++) {
        finalArray.push((prefixMul[i - 1] ?? 1) * (postfixMul[i + 1] ?? 1));
    }

    return finalArray;

        
    }
}
