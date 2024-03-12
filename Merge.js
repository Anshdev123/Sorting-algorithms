class MergeSort {
    merge(arr, l, m, r) {
        let n1 = m - l + 1;
        let n2 = r - m;

        // Create temporary arrays
        let L = new Array(n1);
        let R = new Array(n2);

        // Copy data to temporary arrays L[] and R[]
        for (let i = 0; i < n1; ++i)
            L[i] = arr[l + i];
        for (let j = 0; j < n2; ++j)
            R[j] = arr[m + 1 + j];

        // Merge the temporary arrays back into arr[l..r]
        let i = 0, j = 0;

        // Initial index of merged subarray array
        let k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        // Copy the remaining elements of L[], if there are any
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        // Copy the remaining elements of R[], if there are any
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    mergeSort(arr, l, r) {
        if (l < r) {
            // Same as (l+r)/2, but avoids overflow for large l and r
            let m = Math.floor(l + (r - l) / 2);

            // Sort first and second halves
            this.mergeSort(arr, l, m);
            this.mergeSort(arr, m + 1, r);

            // Merge the sorted halves
            this.merge(arr, l, m, r);
        }
    }

    main() {
        let arr = [68, 37, 23, 12, 200, 110, 90];
        let n = arr.length;

        console.log("Original array:");
        for (let i = 0; i < n; ++i)
            console.log(arr[i] + " ");
        console.log();

        this.mergeSort(arr, 0, n - 1);

        console.log("Sorted array:");
        for (let i = 0; i < n; ++i)
            console.log(arr[i] + " ");
        console.log();
    }
}

let ob = new MergeSort();
ob.main();
