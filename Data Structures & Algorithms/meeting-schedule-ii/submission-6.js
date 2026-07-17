class MinHeap {
    constructor() {
        this.heap = [];
    }

    peek() {
        return this.heap[0] ?? null;
    }

    size() {
        return this.heap.length;
    }

    push(interval) {
        // interval is an instance of the Interval class
        this.heap.push(interval);
        this.bubbleUp();
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();

        return min;
    }

    bubbleUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            // Access the .start property for comparison
            if (this.heap[parent].end <= this.heap[index].end) break;

            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            // Compare by .start property
            if (left < length && this.heap[left].end < this.heap[smallest].end) {
                smallest = left;
            }

            if (right < length && this.heap[right].end < this.heap[smallest].end) {
                smallest = right;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}


/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (intervals.length === 0) return 0;

        intervals.sort((a, b) => a.start - b.start);

        let minHeap = new MinHeap();

        let max = 0;


        // If end time is greater than the time there is
        for (let interval of intervals) {

            while (minHeap.size() > 0 && minHeap.peek().end <= interval.start) {
                minHeap.pop();
            }
            
            minHeap.push(interval);
            
            max = Math.max(minHeap.size(), max);
        }


        return max;
    }
}
