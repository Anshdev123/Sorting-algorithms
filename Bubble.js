function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

let arr = [68, 37, 23, 12, 200, 110, 90];
bubbleSort(arr);
console.log("Sorted array:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + " ");
}
console.log();
