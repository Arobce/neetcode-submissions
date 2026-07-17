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
        
        // We set previous to next
        // We set next to null for the first one
        // Increament current
        while(current != null) {
            let next = current.next;
            current.next = previous;

            previous = current;
            current = next;

        }

        return previous;
    }
}
