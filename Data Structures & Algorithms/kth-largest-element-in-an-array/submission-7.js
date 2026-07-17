class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Helper: Get parent/child indices
  getParentIndex(i) { return Math.floor((i - 1) / 2); }
  getLeftChildIndex(i) { return 2 * i + 1; }
  getRightChildIndex(i) { return 2 * i + 2; }

  // Helper: Swap two elements
  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }

  // Insert a new value
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  // Move the last element up to its correct position
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = this.getParentIndex(index);
      if (this.heap[index] <= this.heap[parentIndex]) break;
      
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  // Remove and return the max (root)
  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    // Move the last element to the root and sink it down
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    
    return max;
  }

  // Move the root element down to its correct position
  sinkDown(index) {
    let largest = index;
    const left = this.getLeftChildIndex(index);
    const right = this.getRightChildIndex(index);
    const size = this.heap.length;

    if (left < size && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (right < size && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      this.swap(index, largest);
      this.sinkDown(largest);
    }
  }

  peek() {
    return this.heap[0] || null;
  }
}
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let maxHeap = new MaxHeap();

        for (let num of nums) {
            maxHeap.insert(num);
        }


        for(let i = 1; i < k; i++) {
            console.log(maxHeap.extractMax());
        }

        return maxHeap.extractMax();
    }
}
