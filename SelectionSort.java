public class SelectionSort {
    void selectionSort(int arr[]) {
        int n = arr.length;
        for (int i = 0; i < n; i++) {
            // Find the minimum element in the remaining unsorted array
            int min_idx = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[min_idx]) {
                    min_idx = j;
                }
            }

            // Swap the found minimum element with the first element
            int temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
    }

    public static void main(String args[]) {
        int arr[] = {68, 37, 23, 120, 200, 110, 90};
        SelectionSort ob = new SelectionSort();
        
        System.out.println("Original array:");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();

        ob.selectionSort(arr);

        System.out.println("Sorted array:");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }
}

