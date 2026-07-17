class MaxHeap {
    constructor() {
        this.heap = [];
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    push(val) {
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
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const heap = new MaxHeap();

        for(let stone of stones) {
            heap.push(stone);
        }

        while(heap.size() > 1) {
            let max = heap.pop();
            let secondMax = heap.pop();

            if(max > secondMax) {
                heap.push(max - secondMax);
            }
        }

        return heap.pop() ?? 0;
    }
}

