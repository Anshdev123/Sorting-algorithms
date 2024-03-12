def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

arr = [68, 37, 23, 12, 200, 110, 90]
bubble_sort(arr)
print("Sorted array:")
for i in range(len(arr)):
    print(arr[i], end=" ")
print()
