/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let previous = null;
        let current = head;

        while(current != null) {
            let next = current.next; // 1 - 2
            current.next = previous; // null - 1
            previous = current; // 0 - 1
            current = next; // 1 - 

        }

        return previous;
    }
}
