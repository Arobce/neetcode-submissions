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
     * @return {boolean}
     */
    hasCycle(head) {
        let map = new Map();

        while (head != null) {
            if (map.has(head)) {
                map.set(head, map.get(head) + 1)
            } else {
                map.set(head, 1);
            }

            console.log(map);

            if (map.get(head) >= 2) return true;
            head = head.next;
        }

        return false;
    }
}
