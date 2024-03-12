function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        // Find the minimum element in the remaining unsorted array
        let min_idx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }

        // Swap the found minimum element with the first element
        let temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}

let arr = [68, 37, 23, 120, 200, 110, 90];

console.log("Original array:");
console.log(...arr);

selectionSort(arr);

console.log("Sorted array:");
console.log(...arr);
