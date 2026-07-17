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
    isSameTree(a,b) {
        if(a == null && b == null) {
            return true;
        }

        if(a == null || b == null) {
            return false;
        }

        if(a.val != b.val) {
            return false;
        }

        return (this.isSameTree(a.left, b.left) && this.isSameTree(a.right, b.right));
    }

    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(root == null || subRoot == null) {
            return false;
        } 

       if(this.isSameTree(root, subRoot)) {
        return true;
       }

       return (this.isSubtree(root.right, subRoot) || this.isSubtree(root.left, subRoot));
    }
}
