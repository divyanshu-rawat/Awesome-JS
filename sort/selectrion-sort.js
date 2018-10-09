'use strict';

/**
 * Sort algorithms
 */
class Sort {
    /**
     * Constructor
     * @param {Object} data Data to sort
     */
    constructor(data) {
        if (typeof data === 'undefined') return new Error('Data passed is undefined');
        this.data = data || null;
        this.dataLength = this.data.length;
    }
    /**
     * Selection Sort Algorithm
     */
    selectionSort() {
        let min, temp;
        for (let i = 0; i < this.dataLength; i++) {
            min = i;
            for (let j = i + 1; j < this.dataLength; j++) {
                if (this.data[j] < this.data[min]) {
                    min = j;
                }
            }
            temp = this.data[i];
            this.data[i] = this.data[min];
            this.data[min] = temp;
        }
        return this.data;
    }
    /**
     * Insertion Sort Algorithm
     */
    insertionSort() {
        for (let i = 1; i < this.dataLength; ++i) {
            let temp = this.data[i];
            let j = i - 1;
            for (; j >= 0 && this.data[j] > temp; --j) {
                this.data[j + 1] = this.data[j];
            }
            this.data[j + 1] = temp;
        }
        return this.data;
    }
}

var data = new Sort([1, 9, 0, 6, 3, 2]);

console.log(`Selection Sort: ${data.selectionSort()}`);
console.log(`Insertion Sort: ${data.insertionSort()}`);