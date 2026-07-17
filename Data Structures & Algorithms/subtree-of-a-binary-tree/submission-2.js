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

        return (this.isSameTree(a.right,b.right) && this.isSameTree(a.left,b.left));
    }

    isSubtree(p,q) {
        if(p == null || q == null) {return false; }

        if(this.isSameTree(p,q)) {return true; }

        
        return (this.isSubtree(p.right,q) || this.isSubtree(p.left,q));
    }
}
