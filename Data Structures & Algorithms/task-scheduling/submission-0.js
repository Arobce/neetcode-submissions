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

    push(value) {
        this.heap.push(value);
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

            if (this.heap[parent] >= this.heap[index]) break;

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

            if (left < length && this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            if (right < length && this.heap[right] > this.heap[largest]) {
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
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let map = new Map();

        // Counting each tasks
        for (let task of tasks) {
            map.set(task, (map.get(task) || 0) + 1);
        }

        // Queue for queuing tasks
        let queue = [];

        // Heap for making sure the tasks that can run the most is used
        let heap = new MaxHeap();

        // Push to heap
        for (let [key, value] of map) {
            heap.push(value);
        }

        console.log(heap);

        let time = 0;

        while (heap.size() != 0 || queue.length != 0) {
            let toScheduleTask = null;

            if (heap.size()) {
                toScheduleTask = heap.pop();
                toScheduleTask--;

                if (toScheduleTask > 0) {
                    let timeForNextScheduling = time + n;
                    queue.push([toScheduleTask, timeForNextScheduling]);
                }
            }

            // If its time to re-add the task to heap
            while (queue.length && queue[0][1] <= time) {
                heap.push(queue[0][0]);
                queue.shift();
            }
            time++;

        }

        return time;

    }
}
