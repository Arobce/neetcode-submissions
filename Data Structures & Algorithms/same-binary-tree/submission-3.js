/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        // Both are null means equal
        // Both values match means equal
        // Both values unmatch means unequal
        // One null the other is not means unequal
         if (p === null && q === null) {
            return true;
        }

        if (p === null || q === null) {
            return false;
        }

        if (p.val !== q.val) {
            return false;
        }

        return (
            this.isSameTree(p.left, q.left) &&
            this.isSameTree(p.right, q.right)
        );
    }
}
