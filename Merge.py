def merge(arr, l, m, r):
    n1 = m - l + 1
    n2 = r - m

    # Create temporary arrays
    L = arr[l:l + n1]
    R = arr[m + 1:m + 1 + n2]

    # Merge the temporary arrays back into arr[l..r]
    i = 0
    j = 0
    k = l
    while i < n1 and j < n2:
        if L[i] <= R[j]:
            arr[k] = L[i]
            i += 1
        else:
            arr[k] = R[j]
            j += 1
        k += 1

    # Copy the remaining elements of L[], if there are any
    while i < n1:
        arr[k] = L[i]
        i += 1
        k += 1

    # Copy the remaining elements of R[], if there are any
    while j < n2:
        arr[k] = R[j]
        j += 1
        k += 1

def mergeSort(arr, l, r):
    if l < r:
        # Same as (l+r)//2, but avoids overflow for large l and r
        m = (l + (r - l)) // 2

        # Sort first and second halves
        mergeSort(arr, l, m)
        mergeSort(arr, m + 1, r)

        # Merge the sorted halves
        merge(arr, l, m, r)

arr = [64, 34, 25, 12, 22, 11, 90]
n = len(arr)

print("Original array: ")
for i in range(n):
    print(arr[i], end=" ")
print()

mergeSort(arr, 0, n - 1)

print("Sorted array: ")
for i in range(n):
    print(arr[i], end=" ")
print()
