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

    push(val) {
        // val should look like: [x, y, z]
        this.heap.push(val);
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

            // compare by index 0
            if (this.heap[parent][0] <= this.heap[index][0]) break;

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

            // compare by index 0
            if (left < length && this.heap[left][0] < this.heap[smallest][0]) {
                smallest = left;
            }

            if (right < length && this.heap[right][0] < this.heap[smallest][0]) {
                smallest = right;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let maxHeap = new MinHeap();

        for(let point of points) {
            let distance = ((point[0] * point[0]) + (point[1] * point[1]));
            maxHeap.push([distance, point[0], point[1]]);
        }

        console.log(maxHeap);

        let array = [];

        while(array.length - k != 0) {
            let maxDistance = maxHeap.pop();
            array.push([maxDistance[1], maxDistance[2]]);
        }

        return array;
    }
}
