class MaxHeap {
    constructor() {
        this.heap = [];
    }

    peek() {
        return this.heap[0] ?? null;
    }

    size() {
        return this.heap.length;
    }

    push(val) {
        // val should look like: [x, y, z]
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();

        return max;
    }

    bubbleUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            // compare by index 0
            if (this.heap[parent][0] >= this.heap[index][0]) break;

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
            let largest = index;

            // compare by index 0
            if (left < length && this.heap[left][0] > this.heap[largest][0]) {
                largest = left;
            }

            if (right < length && this.heap[right][0] > this.heap[largest][0]) {
                largest = right;
            }

            if (largest === index) break;

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let heap = new MaxHeap();

        let map = new Map();

        for(let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        for(let [key, value] of map) {
            heap.push([value, key]);
        }

        let finalArray = [];

        while(finalArray.length < k) {
            finalArray.push(heap.pop()[1]);
        }

        return finalArray;


    }
}
